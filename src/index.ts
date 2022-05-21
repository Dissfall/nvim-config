const plug = vim.fn['plug#'];

vim.call('plug#begin', '~/.config/nvim/plugged');

plug('tpope/vim-sensible');

vim.call('plug#end');
