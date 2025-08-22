// astro.config.mjs
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

export default defineConfig({
  vite: {
      resolve: {
          alias: {
              "@components": "/src/components",
              "@images": "/src/images",
          },
      },
	},

  integrations: [react()],
});