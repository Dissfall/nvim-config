import {PlugPluginData} from '../types/plug';

const plug = vim.fn['plug#'];

export const processPlugins = (pluginsList: PlugPluginData[]) => {
  vim.call('plug#begin', '~/.config/nvim/plugged');

  for (const plugin of pluginsList) {
    if (typeof plugin === 'string') {
      plug(plugin);
    } else {
      plug(plugin[0], plugin[1]);
    }
  }

  vim.call('plug#end');
};
