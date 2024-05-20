/** @type {import("prettier").Config} */
export default {
	arrowParens: "avoid",
	bracketSameLine: false,
	bracketSpacing: true,
	proseWrap: "always",
	quoteProps: "consistent",
	semi: false,
	singleAttributePerLine: true,
	singleQuote: false,
	tabWidth: 2,
	trailingComma: "all",
	useTabs: true,
	importOrder: ["^@(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	plugins: ["@trivago/prettier-plugin-sort-imports"],
}
