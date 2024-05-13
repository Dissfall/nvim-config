return {
	"nvim-neo-tree/neo-tree.nvim",
	branch = "v3.x",
	dependencies = {
		"nvim-lua/plenary.nvim",
		"nvim-tree/nvim-web-devicons",
		"MunifTanjim/nui.nvim",
    "3rd/image.nvim",
	},
	config = function()
    require('neo-tree').setup({
      default_component_configs = {
        modified = {
          symbol = "",
          highlight = "NeoTreeModified",
        },
        git_status = {
          symbols = {
            added     = "",
            modified  = "",
            deleted   = "󱟃",
            renamed   = "",
            untracked = "󰡯",
            ignored   = "",
            unstaged  = "󰄱",
            staged    = "",
            conflict  = "󱚠",
          }
        },
      },
      window = {
        mappings = {
          ["l"] = "open",
          ["h"] = "close_node",
          ["L"] = "focus_preview",
        }
      },
      filesystem = {
        hide_dotfiles = false,
        hide_gitignored = false,
        hide_hidden = false
      },
    });

		vim.keymap.set("n", "<leader>ee", ":Neotree filesystem toggle left<CR>", { desc = "Toggle file explorer" })
		vim.keymap.set("n", "<leader>eb", ":Neotree buffers toggle float<CR>", { desc = "Toggle buffers explorer" })
	end,
}
