/** @noSelfInFile */

type Plug = (pluginName: string, parameters?: PlugParameters) => void;

type PlugPluginData = [
  string,
  PlugParameters,
] | string;

interface PlugParameters {
  on?: string | string[];
  for?: string;
  do?: () => void;
  branch?: string;
}

export {Plug, PlugPluginData, PlugParameters};
