import dts from "vite-plugin-dts"
import { defineConfig } from "vite"
import { resolve } from "path"

export default defineConfig({
	plugins: [
		dts({
			insertTypesEntry: true,
		}),
	],
	build: {
		lib: {
			entry: resolve(__dirname, "index.ts"),
			formats: ["es"],
			name: "@sitebender/operations",
		},
	},
	test: {
		setupFiles: ["vitest-localstorage-mock"],
		mockReset: false,
	},
})
