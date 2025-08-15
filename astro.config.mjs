// astro.config.mjs
import { defineConfig } from "astro/config";

export default defineConfig({
	vite: {
		resolve: {
			alias: {
				"@components": "/src/components",
				"@images": "/src/images",
			},
		},
	},
});
