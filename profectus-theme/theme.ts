import * as fs from 'fs';

import {
  ContainerReflection,
  PageEvent,
  Renderer,
  DeclarationReflection,
  RendererEvent
} from 'typedoc';
import { MarkdownTheme } from 'typedoc-plugin-markdown';
import registerTypeHelper from './type';

export class ProfectusTheme extends MarkdownTheme {
  constructor(renderer: Renderer) {
    super(renderer);

    this.entryDocument = 'index.md';
    this.hideBreadcrumbs = true;
    this.hideInPageTOC = true;

    // registerTypeHelper();
  }


  getReflectionTemplate() {
    const templ = super.getReflectionTemplate();
    return (pageEvent) => {
      if (pageEvent.url === "index.md") {
        return "# Profectus API";
      }
      return templ(pageEvent);
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
    return `${mapping.directory}/${reflection.getFullName()}.md`;
  }
}
