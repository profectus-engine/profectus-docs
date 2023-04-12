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
    path.join(config.outDir, file).replace(/\.vue$/, 'Component.md'), // specify the name of the output md file
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
  return `
  ### ${displayName} Component

  ${description ? '> ' + description : ''}

  ${renderedUsage.props}
  ${renderedUsage.methods}
  ${renderedUsage.events}
  ${renderedUsage.slots}
  ${docsBlocks?.length ? '---\n' + docsBlocks.join('\n---\n') : ''}
  `
}

const eventCols = ["Name", "Description", "Properties"];
const eventShouldDisplayCol = {
  [eventCols[0]]: event => event.name,
  [eventCols[1]]: event => event.description,
  [eventCols[2]]: event => event.properties?.length
}
const eventGetDisplay = {
  [eventCols[0]]: event => `<code>${clean(event.name)}</code>`,
  [eventCols[1]]: event => clean(event.description || ""),
  [eventCols[2]]: event => {
    if (!event.properties) return "";
    return event.properties.map(property => {
      const { name, description, type } = property
      if (!type) {
        return ''
      }
      return `**${name}** <code>${clean(type.names.length ? type.names.join(', ') : '')}</code> - ${description}`
    }).join('<br/>')
  }
}

const propCols = ["Name", "Type", "Description", "Values", "Default"];
const propShouldDisplayCol = {
  [propCols[0]]: pr => pr.name,
  [propCols[1]]: pr => pr.type?.name,
  [propCols[2]]: pr => pr.description || pr.tags,
  [propCols[3]]: pr => pr.values,
  [propCols[4]]: pr => pr.defaultValue
}
const propGetDisplay = {
  [propCols[0]]: pr => `<code>${clean(pr.name)}</code>` + (pr.required ? "*" : ""),
  [propCols[1]]: pr => {
    let n = pr.type?.name ?? ''
    if (n === "union") n = pr.type?.elements.map(el => el.name).join(' | ')
    if (n === "Array") n = (pr.type?.elements.length > 1 ? "(" : "") + pr.type?.elements.map(el => el.name).join(' | ') + (pr.type?.elements.length > 1 ? ")" : "") + "[]"
    return n ? '<code>' + clean(n) + '</code>' : ''
  },
  [propCols[2]]: pr => clean((pr.description ?? '') + renderTags(pr.tags)),
  [propCols[3]]: pr => clean(pr.values?.map(pv => `\`${pv}\``).join(', ') ?? '-'),
  [propCols[4]]: pr => clean(pr.defaultValue?.value ?? '')
}

const slotCols = ["Name", "Description", "Bindings"];
const slotShouldDisplayCol = {
  [slotCols[0]]: slot => slot.name,
  [slotCols[1]]: slot => slot.description,
  [slotCols[2]]: slot => slot.bindings?.length
}
const slotGetDisplay = {
  [slotCols[0]]: slot => `<code>${clean(slot.name)}</code>`,
  [slotCols[1]]: slot => clean(slot.description || ""),
  [slotCols[2]]: slot => {
    if (!slot.bindings) return "";
    return slot.bindings.map(binding => {
      const { name, description, type } = binding
      if (!type) {
        return ''
      }
      return `**${name}** <code>${
        type.name === 'union' && type.elements
          ? type.elements.map(({ name: insideName }) => insideName).join(', ')
          : type.name
      }</code> - ${description}`
    }).join('<br/>')
  }
}

function displayUsedCols(title, cols, shouldDisplayCol, getDisplay, rows, opt) {
  cols = cols.filter(col => rows.some(shouldDisplayCol[col]));
  if (!cols) return "";

  let output = `\n${opt.isSubComponent || opt.hasSubComponents ? '#' : ''}#### ${title}\n|`;
  cols.forEach(col => (output += ` ${col} |`));
  output += `\n|`;
  cols.forEach(col => (output += ' :-- |'));
  output += '\n';

  rows.forEach(row => {
    output += "|";
    cols.forEach(col => (output += ` ${getDisplay[col](row)} |`));
    output += "\n";
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
