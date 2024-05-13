return {
  "vim-test/vim-test",
  dependencies = {
    "preservim/vimux"
  },
  config = function()
    vim.keymap.set("n", "<leader>trn", ":TestNearest<CR>", { desc = "Run nearest test" })
    vim.keymap.set("n", "<leader>trn", ":TestFile<CR>", { desc = "Run test file" })
    vim.keymap.set("n", "<leader>trs", ":TestSuite<CR>", { desc = "Run test suite" })
    vim.keymap.set("n", "<leader>trl", ":TestLast<CR>", { desc = "Run last test" })
    vim.cmd("let test#strategy = 'vimux'")
  end,
}
