import { defineConfig } from "astro/config"

// ignore unused exports
export default defineConfig({
	build: {
		format: "directory",
	},
	site: "https://renderer.sitebender.org/",
})
