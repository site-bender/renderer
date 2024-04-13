import { defineConfig } from "vitest/config"

export default defineConfig({
	test: {
		coverage: {
			exclude: ["temp/**", "index.ts"],
			include: ["lib/**"],
			provider: "v8",
		},
	},
})
