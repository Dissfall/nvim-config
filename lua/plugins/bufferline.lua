return {
  "akinsho/bufferline.nvim",
  version = "*",
  dependencies = "nvim-tree/nvim-web-devicons",
  config = function()
    require("bufferline").setup({
      options = {
        mode = "tabs",
        -- separator_style = "slant" | "slope" | "thick" | "thin" | { 'any', 'any' },
        separator_style = "thin",
        indicator = {
          style = "icon",
        },
        modified_icon = "●",
        diagnostics = "nvim_lsp",
        offsets = {
          {
            filetype = "neo-tree",
            text = "",
            text_align = "left",
            separator = false,
          },
        },
        color_icons = true,
      },
    })
  end,
}
