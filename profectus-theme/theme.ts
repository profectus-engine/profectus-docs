import * as fs from 'fs';
import * as Handlebars from 'handlebars';
import * as path from "path";

import {
  ContainerReflection,
  PageEvent,
  Renderer,
  DeclarationReflection,
  ReflectionKind,
  RendererEvent
} from 'typedoc';
import { MarkdownTheme } from 'typedoc-plugin-markdown';
import registerTypeHelper from './type';

const TEMPLATE_PATH = path.join(__dirname, '..', 'profectus-theme', 'resources', 'templates');
const PARTIALS_PATH = path.join(__dirname, '..', 'profectus-theme', 'resources', 'partials');

export class ProfectusTheme extends MarkdownTheme {
  constructor(renderer: Renderer) {
    super(renderer);

    this.entryDocument = 'index.md';
    this.hideBreadcrumbs = true;
    this.hideInPageTOC = true;

    const partialFiles = fs.readdirSync(PARTIALS_PATH);
    partialFiles.forEach((partialFile) => {
        const partialName = path.basename(partialFile, '.hbs');
        const partialContent = fs
            .readFileSync(PARTIALS_PATH + '/' + partialFile)
            .toString();
        Handlebars.registerPartial(partialName, partialContent);
    });

    Handlebars.registerHelper("when", (context, operand_1, operator, operand_2, options) => {
      let operators = {                     //  {{#when <operand1> 'eq' <operand2>}}
        'eq': (l,r) => l == r,              //  {{/when}}
        'noteq': (l,r) => l != r,
        'gt': (l,r) => (+l) > (+r),                        // {{#when var1 'eq' var2}}
        'gteq': (l,r) => ((+l) > (+r)) || (l == r),        //               eq
        'lt': (l,r) => (+l) < (+r),                        // {{else when var1 'gt' var2}}
        'lteq': (l,r) => ((+l) < (+r)) || (l == r),        //               gt
        'or': (l,r) => l || r,                             // {{else}}
        'and': (l,r) => l && r,                            //               lt
        '%': (l,r) => (l % r) === 0                        // {{/when}}
      }
      let result = operators[operator](operand_1,operand_2);
      if(result) return options.fn(context);
      return options.inverse(context);
    });
  }

  getReflectionMemberTemplate() {
    const templ = super.getReflectionMemberTemplate();
    return (pageEvent) => {
      return templ(pageEvent);
    }
  }

  getReflectionTemplate() {
    return (pageEvent) => {
      if (pageEvent.url === "index.md") {
        return "# Profectus API";
      }
      return Handlebars.compile(
        fs.readFileSync(path.join(TEMPLATE_PATH, 'reflection.hbs')).toString(),
      )(pageEvent, {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true,
        data: { theme: this }
      })
    }
  }

  getRelativeUrl(url: string) {
    const relativeUrl = super
      .getRelativeUrl(url)
      .replace(/(.*).md/, '$1')
      .replace(/ /g, '-');
    return relativeUrl.startsWith('..') ? relativeUrl : './' + relativeUrl;
  }

  toUrl(mapping: any, reflection: DeclarationReflection) {
    let name = reflection.getFullName();
    if (name.match(/features\/.*\/.*/) != null && !name.includes("/tabs/") && !name.includes("/decorators/")) {
      name = name.replace(/features\/.*\/(.*)/, "features/$1");
    }
    return `${mapping.directory}/${name}.md`;
  }

  get mappings() {
    return [
      {
        kind: [ReflectionKind.Module],
        isLeaf: false,
        directory: 'modules',
        template: this.getReflectionTemplate(),
      }
    ];
  }
}
