import {PlugPluginData} from './types/plug';

const plugins: PlugPluginData[] = [
  'pangloss/vim-javascript',
  'leafgarland/typescript-vim',
  'maxmellon/vim-jsx-pretty',
  'jparise/vim-graphql',
  ['neoclide/coc.nvim', {branch: 'release'}],
  'vim-airline/vim-airline',
  'vim-airline/vim-airline-themes',
  'preservim/nerdtree',
  'Xuyuanp/nerdtree-git-plugin',
  'ryanoasis/vim-devicons',
  'preservim/tagbar',
  'airblade/vim-gitgutter',
  'ctrlpvim/ctrlp.vim',
  'd11wtq/ctrlp_bdelete.vim',
  'Yggdroot/indentLine',
  'editorconfig/editorconfig-vim',
  'wesQ3/vim-windowswap',
  'nikvdp/neomux',
  'numkil/ag.nvim',
  ['junegunn/fzf', {do() {
    console.log('test');
    vim.call('fzf#install()');
  }}],
  'junegunn/fzf.vim',
  ['theniceboy/fzf-gitignore', {do() {
    vim.call(':UpdateRemotePlugins');
  }}],
  'weirongxu/plantuml-previewer.vim',
  'aklt/plantuml-syntax',
  'tyru/open-browser.vim',
  'vim-test/vim-test',
  'tpope/vim-dispatch',
  'neomake/neomake',
  'mfussenegger/nvim-dap',
  'rcarriga/nvim-dap-ui',
  'xavierchow/vim-swagger-preview',
];

export {plugins};
