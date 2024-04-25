import { defineConfig } from "vitest/config"

export default defineConfig({
	test: {
		coverage: {
			exclude: ["temp/**", "index.ts", "lib/guards/index.ts"],
			include: ["lib/**"],
			provider: "v8",
		},
	},
})
