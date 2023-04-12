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

export class ProfectusTheme extends MarkdownTheme {
  constructor(renderer: Renderer) {
    super(renderer);

    this.entryDocument = 'index.md';
    this.hideBreadcrumbs = true;
    this.hideInPageTOC = true;

    // registerTypeHelper();
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
    if (name.match(/features\/.*\/.*/) != null && !name.includes("/tabs/")) {
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
