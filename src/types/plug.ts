/** @noSelfInFile */

type Plug = (plugin: string, parameters?: PlugParameters) => void;

interface PlugParameters {
  on?: string | string[];
  for?: string;
  do?: () => any;
}

export { Plug };
