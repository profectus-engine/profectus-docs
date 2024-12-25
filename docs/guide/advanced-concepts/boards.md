# Boards

The Board component allows you to make a pannable and zoomable "board" of components, called nodes. Instead of laying things out using the DOM, everything inside a board should be absolutely positioned. There are various utilities included in [board.ts](/api/modules/game/boards/board) to assist with implementing common behaviors with boards. Also, most of these code snippets are modified from [this Board example](https://code.incremental.social/thepaperpilot/Profectus/src/branch/board-example), which may make a useful reference while implementing your own boards.

To get started with a board, with a node that's just an upgrade locked to a specific location, it would look like this:

```ts
const upgrade = createUpgrade({
	class: "board-node",
	style: { transform: "translate(100px, 100px)" },
	/** snip **/
});

/** snip **/

// Render function
() => (<Board>
	{render(upgrade)}
</Board>);
```

## Selecting Nodes

There is a common (not Board specific) utility for creating a ref, along with a setter and "clearer" that works perfectly for situations where you'd like to let the player select at most 1 of a group of like things. To use it, you'll want to clear the selection on mouse down on either a node or the Board itself, and set the selection on mouse up on a selectable node.

Note you'll typically want to store an ID rather than the node itself, so that if you make the selection persistent you can still easily determine which node was chosen, even if all their other properties are identical. The easiest way to get guaranteed unique IDs for every node is to include an `id` property on every node and use the [setupUniqueIds](/api/modules/game/boards/board#setupUniqueIds) utility which will give you a ref with the value of a valid unique ID you can use for any newly created node.

## Dragging Nodes

Draggable nodes are substantially more complicated. Ultimately you'll want to use either [setupDraggableNode](/api/modules/game/boards/board#setupDraggableNode) and, if applicable, [makeDraggable](/api/modules/game/boards/board#makeDraggable), but from there hooking everything up is still a fairly manual process.

Similar to selecting nodes, draggable nodes should also typically be based on IDs. Assuming your nodes have x and y properties for their actual position, your `setupDraggableNode` call should look something like this:

```ts
const board = ref<ComponentPublicInstance<typeof Board>>();

// You can use any other method to map IDs to the actual nodes
const nodesById = computed<Record<string, NodePosition>>(() =>
    nodes.value.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {})
);

const { startDrag, endDrag, drag, nodeBeingDragged, hasDragged, dragDelta } =
    setupDraggableNode<number>({
	    board,
	    getPosition(id) {
	        return nodesById.value[id];
	    },
	    setPosition(id, position) {
	        const node = nodesById.value[id];
	        node.x = position.x;
	        node.y = position.y;
	    }
	});
```

The type hints in your IDE should clarify how to hook up or use each of the returned properties, but we'll go over them here as well. On mouse down on a draggable node, call `startDrag`. Whenever the mouse goes back up or leaves the board, call `endDrag`. And `drag` itself gets called when the mouse is moved over the board. In all, your Board element should look like this, including the ref property used to pass the component to `setupDraggableNode`:

```ts
<Board onDrag={drag} onMouseUp={endDrag} ref={board}>
```

Note that if you'd like to have nodes be both draggable _and_ selectable, you should also include `onMouseDown={deselect}`. Your mouse up and down listeners on the nodes themselves should look something like this:

```ts
function mouseDown(e: MouseEvent | TouchEvent, node: MyNodeType) {
    if (nodeBeingDragged.value == null) {
        startDrag(e, node.id);
    }
    deselect();
}
function mouseUp(e: MouseEvent | TouchEvent, node: MyNodeType) {
    if (!hasDragged.value) {
        endDrag();
        select(node.id);
        e.stopPropagation();
    }
}
```

When dragging, you'll often want to ensure that the node being dragged is always on top of all the others, and when you stop dragging it doesn't just jump down several layers. Rather than re-ordering the elements, which can break CSS transitions, it's recommended to specify the z index of each node. An easy way to do that is by setting the initial z index of any new node to its ID. Then on mouse down update the z indices so that the current node being dragged shifts all nodes between it and the "top" z index. Keep in mind this assumes the indices are contiguous, which you can check for and ensure when removing nodes.

```ts
const oldZ = node.z;
nodes.value.forEach(node => {
    if (node.z > oldZ) {
        node.z--;
    }
});
node.z = nextId.value;
```

Now to handle rendering the node being dragged appropriately. If they're being dragged, you'll want to account for that drag when calculating the position to render at. Check if the node is being dragged, and if so add the `dragDelta` components to its position. To that end, you might write a function like this to get the translate component of a CSS transform rule:

```ts
function translate(node: NodePosition, isDragging: boolean) {
    let x = node.x;
    let y = node.y;
    if (isDragging) {
        x += dragDelta.value.x;
        y += dragDelta.value.y;
    }
    return ` translate(${x}px,${y}px)`;
}
```

Finally, if you have any existing features that you'd like to make draggable, the `makeDraggable` utility lets you do just that so you don't have to worry about not being able to directly hook onto the feature's mouse down or up listeners and other configuration. It typically just requires passing along several of the properties you got from the `setupDraggableNode` call, plus some additional callbacks to allow for still retaining the original feature's interactivity. Here's an example of making an Upgrade feature draggable:

```ts
makeDraggable(upgrade, {
    id: "my-upgrade-id",
    endDrag,
    startDrag,
    hasDragged,
    nodeBeingDragged,
    dragDelta,
    onMouseUp: upgrade.purchase
});
```

## Dropping Nodes onto Other Nodes

To support dropping nodes onto other nodes, you'll need to provide up to 3 new fields to `setupDraggableNode`: `receivingNodes`, the list of all nodes that the currently dragged node can be dropped upon; `dropAreaRadius`, the radius of the circular drop zone around each receiving node; and of course `onDrop`, the actual callback for when a node gets dropped on a receiving node.

You'll then typically want to use the returned `receivingNode` and `receivingNodes` properties to display some indicator that anything in `receivingNodes` can receive the currently dragged node, and that if they let their mouse go right now, it'd drop into `receivingNode` specifically. In all, that might look something like this, as part of the node's display:

```ts
{receivingNodes.value.includes(node.id) && (
    <circle
        r="50"
        fill="var(--background)"
        stroke={receivingNode.value === node.id ? "#0F0" : "#0F03"}
        stroke-width="2"
    />
)}
```

## Common Display Components

The board system is intended to be very generic, allowing you to make whatever sort of components you like. Of particular note, SVG components are first-class citizens and incredibly easy to design completely custom displays with (and is what this section will be focused on since rendering vue features is straightforward). There's a utility component called SVGNode that will handle the positioning and listening to both touch and mouse events for you. Any SVG elements should go inside one of these.

Keep in mind, for performance reasons, it may be beneficial to put many elements in one `SVGNode`, particularly if they don't need to use the event handlers. For example, examples like this where you're rendering lines connecting various nodes:

```ts
const links = () => (
    <>
        {nodes.value
            .reduce(
                (acc, curr) => [
                    ...acc,
                    // Replace this with your own logic for determining links to draw
                    ...curr.links.map(l => ({ from: curr, to: nodesById.value[l] }))
                ],
                [] as { from: NodePosition; to: NodePosition }[]
            )
            .map(link => (
                <line
                    stroke="white"
                    stroke-width={4}
                    // Note how we handle adding dragDelta to the node being dragged. You may consider writing a utility function to help with this process
                    x1={
                        nodeBeingDragged.value === link.from.id
                            ? dragDelta.value.x + link.from.x
                            : link.from.x
                    }
                    y1={
                        nodeBeingDragged.value === link.from.id
                            ? dragDelta.value.y + link.from.y
                            : link.from.y
                    }
                    x2={
                        nodeBeingDragged.value === link.to.id
                            ? dragDelta.value.x + link.to.x
                            : link.to.x
                    }
                    y2={
                        nodeBeingDragged.value === link.to.id
                            ? dragDelta.value.y + link.to.y
                            : link.to.y
                    }
                />
            ))}
    </>
);

// And then in the render function:
<SVGNode>{links()}</SVGNode>
```

Beyond that, just use the standard SVG elements like `rect`, `circle`, `text`, etc. to fully design your nodes. There's also a few other built-in utility components like `CircularProgress` that do common but complex display parts. You may also use the global `node-text` CSS class to make the default `text` elements appear larger and centered.
