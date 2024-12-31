const path = require('path')
const mdclean = require('vue-docgen-cli/lib/templates/utils').mdclean

module.exports = {
  componentsRoot: 'profectus/src', // the folder where CLI will start searching for components.
  components: '**/[A-Z]*.vue', // the glob to define what files should be documented as components (relative to componentRoot)
  outDir: 'components', // folder to save components docs in (relative to the current working directry)
  apiOptions: {
    jsx: true // tell vue-docgen-api that your components are using JSX to avoid conflicts with TypeScript <type> syntax
  },
  getDestFile: (file, config) =>
    path.join(config.outDir, file).replace(/\.vue$/, '.md'), // specify the name of the output md file
  templates: {
    // global component template wrapping all others see #templates
    component,
    events: (events, opt) => displayUsedCols("Events", eventCols, eventShouldDisplayCol, eventGetDisplay, events, opt),
    methods: require('vue-docgen-cli/lib/templates/methods').default,
    props: (props, opt) => displayUsedCols("Props", propCols, propShouldDisplayCol, propGetDisplay, props, opt),
    slots: (slots, opt) => displayUsedCols("Slots", slotCols, slotShouldDisplayCol, slotGetDisplay, slots, opt),
    // static template to display as a tag if component is functional
    functionalTag: '**functional**'
  }
}

function component(renderedUsage, // props, events, methods and slots documentation rendered
  doc, // the object returned by vue-docgen-api
  config, // the local config, useful to know the context
  fileName, // the name of the current file in the doc (to explain how to import it)
  requiresMd, // a list of all the documentation files
  // attached to the component documented. It includes documentation of subcomponents
  { isSubComponent, hasSubComponents }) {
  const { displayName, description, docsBlocks } = doc
  return `# Component: ${displayName}

${description}

${renderedUsage.props}
${renderedUsage.methods}
${renderedUsage.events}
${renderedUsage.slots}
${docsBlocks?.length ? '---\n' + docsBlocks.join('\n---\n') : ''}

## Defined in

[profectus/src/${fileName}](https://code.incremental.social/profectus/Profectus/src/branch/main/src/${fileName})
`.replaceAll('`Resource`', '[`Resource`](/api/features/resources/resource/interfaces/Resource)')
.replaceAll('`MaybeGetter`', '[`MaybeGetter`](/api/util/computed/type-aliases/MaybeGetter)')
.replaceAll('`Error`', '[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)')
.replaceAll('`MouseEvent`', '[`MouseEvent`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)')
.replaceAll('`TouchEvent`', '[`TouchEvent`](https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent)')
.replaceAll('`Hotkey`', '[`Hotkey`](/api/features/hotkey/interfaces/Hotkey)')
.replaceAll('`Requirements`', '[`Requirements`](/api/game/requirements/interfaces/Requirement)')
.replaceAll('`Renderable`', '[`Renderable`](/api/util/vue/type-aliases/Renderable)')
.replaceAll('`Direction`', '[`Direction`](/api/util/common/enumerations/Direction)')
.replaceAll('`DecimalSource`', '[`DecimalSource`](/api/util/bignum/type-aliases/DecimalSource)')
.replaceAll('`Visibility`', '[`Visibility`](/api/features/feature/enumerations/Visibility)')
.replaceAll('`Link`', '[`Link`](/api/features/links/links/interfaces/Link)')
.replaceAll('`FeatureNode`', '[`FeatureNode`](/api/game/layers/interfaces/FeatureNode)')
.replaceAll('`DOMRect`', '[`DOMRect`](https://developer.mozilla.org/en-US/docs/Web/API/DOMRect)')
.replaceAll('`Tab`', '[`Tab`](/api/features/tabs/tab/interfaces/Tab)')
.replaceAll('`TabButton`', '[`TabButton`](/api/features/tabs/tabFamily/interfaces/TabButton)')
.replaceAll('`TreeNode`', '[`TreeNode`](/api/features/trees/tree/interfaces/TreeNode)')
.replaceAll('`TreeBranch`', '[`TreeBranch`](/api/features/trees/tree/interfaces/TreeBranch)')
.replaceAll('`Wrapper`', '[`Wrapper`](/api/util/vue/type-aliases/Wrapper)')
.replaceAll('`LoadablePlayerData`', '[`LoadablePlayerData`](/api/util/save/type-aliases/LoadablePlayerData)')
// ^ Manually created for the types I am currently noticing show up in components
}

function displayType(type) {
    let n = type?.name ?? type?.names?.[0] ?? '';
    if (n === "union") n = type?.elements.map(displayType).join(' | ')
    else if (n === "Array") n = (type?.elements.length > 1 ? "(" : "") + type?.elements.map(el => el.name).join(' | ') + (type?.elements.length > 1 ? ")" : "") + "[]"
    else if (n && type?.elements?.length > 0) n = `\`${n}\`<${type.elements.map(displayType).join(", ")}>`
    else n = `\`${n}\``
    return n;
}

const eventCols = ["Name", "Description", "Parameter", "Return"];
const eventShouldDisplayCol = {
  [eventCols[0]]: event => event.name,
  [eventCols[1]]: event => true,
  [eventCols[2]]: event => event.type,
  [eventCols[3]]: event => true
}
const eventGetDisplay = {
  [eventCols[0]]: event => `${clean(event.name)}()`,
  [eventCols[1]]: event => `> **${clean(event.name)}**: (${event.type ? `\`parameter\`` : ''}) => \`void\`\n\n${clean(event.description || "")}`,
  [eventCols[2]]: event => event.type ? `#### Parameters\n\n\n##### parameter\n\n\n${displayType(event.type)}` : '',
  [eventCols[3]]: event => `#### Returns\n\n\n\`void\``
}

const propCols = ["Name", "Type", "Description", "Values"/*, "Default"*/];
const propShouldDisplayCol = {
  [propCols[0]]: pr => pr.name,
  [propCols[1]]: pr => pr.type?.name,
  [propCols[2]]: pr => pr.description || pr.tags,
  [propCols[3]]: pr => pr.values,
  // [propCols[4]]: pr => pr.defaultValue
}
const propGetDisplay = {
  [propCols[0]]: pr => clean(pr.name) + (pr.required ? "" : "?"),
  [propCols[1]]: pr => {
    if (!pr.type) return '';
    let n = displayType(pr.type);
    return `> ${clean(n)}`;
  },
  [propCols[2]]: pr => clean((pr.description ?? '') + renderTags(pr.tags)),
  [propCols[3]]: pr => clean(pr.values?.map(pv => `\`${pv}\``).join(', ') ?? '-'),
  // [propCols[4]]: pr => clean(pr.defaultValue?.value ?? '')
}

const slotCols = ["Name", "Description", "Bindings"];
const slotShouldDisplayCol = {
  [slotCols[0]]: slot => slot.name,
  [slotCols[1]]: slot => slot.description,
  [slotCols[2]]: slot => slot.bindings?.length
}
const slotGetDisplay = {
  [slotCols[0]]: slot => clean(slot.name),
  [slotCols[1]]: slot => clean(slot.description || ""),
  [slotCols[2]]: slot => {
    if (!slot.bindings) return '';
    let output = `#### Bindings\n`;
    slot.bindings.forEach(({ name, description, type }) => {
      output += `\n##### ${name}\n\n\n${displayType(type)}\n\n\n${description}`;
    });
    return output;
  }
}

function displayUsedCols(title, cols, shouldDisplayCol, getDisplay, rows, opt) {
  cols = cols.filter(col => rows.some(shouldDisplayCol[col]));
  if (!cols) return "";

  let output = `\n${opt.isSubComponent || opt.hasSubComponents ? '#' : ''}## ${title}\n`;
  rows.forEach((row, i) => {
    const [name, ...other] = cols;
    if (i > 0) output += "\n***\n";
    output += `\n${opt.isSubComponent || opt.hasSubComponents ? '#' : ''}### ${getDisplay[name](row)}\n`;
    other.forEach(col => {
      output += `\n ${getDisplay[col](row)}\n`;
    });
  });

  return output;
}

function isTag(v) {
  return !!(v).content
}

function renderTags(tags) {
  if (!tags) {
    return ''
  }
  return Object.entries(tags)
    .map(([tag, values]) => {
      return values.map(v => `<br/>\`@${tag}\` ${isTag(v) ? v.content : v.description}`).join('')
    })
    .join('')
}

function clean(str) {
  return mdclean(str).replace(/<br\/>/g, '_br/_').replace(/>/g, '\\>').replace(/_br\/_/g, '<br/>')
}
