import { Plug } from './plug';

/** @noSelf */
interface Vim {
  call: (functionName: string, args?: string) => any;
  fn: {
    [index: string]: (...[]: any) => any;
    'plug#': Plug
  }
}

export { Vim };
