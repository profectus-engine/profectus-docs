import { Application } from 'typedoc';

import { ProfectusTheme } from './theme';

export function load(app: Application) {
  app.renderer.defineTheme('profectus', ProfectusTheme);
}
