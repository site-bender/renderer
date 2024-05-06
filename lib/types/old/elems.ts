import { SbAnchorElement } from "../elements/text-level-semantics/a"
import { SbAbbreviationElement } from "../elements/text-level-semantics/abbr"
import { SbElement } from "../elements"
import { SbBreakElement } from "../elements/text-level-semantics/br"
import { SbDefinitionElement } from "../elements/text-level-semantics/dfn"
import { SbInsertionElement } from "../elements/edits/ins"

const a: SbAnchorElement = {
	attributes: {
		href: "https://bob.dobbs.com/",
		referrerPolicy: "bob",
		target: "_self",
	},
	tagName: "A",
}

const abbr: SbAbbreviationElement = {
	attributes: {
		title: "What the fuck?",
	},
	children: [a],
	tagName: "ABBR",
}

const br: SbBreakElement = {
	attributes: {
		title: "What the fuck?",
	},
	tagName: "BR",
}

const dfn: SbDefinitionElement = {
	children: [
		{
			tagName: "A",
		},
	],
	tagName: "DFN",
}

const ins: SbInsertionElement = {
	children: [
		{
			content: "Bob's yer uncle",
			tagName: "TEXTNODE",
		},
	],
	tagName: "INS",
}

const f = (arg: SbElement) => arg

f(a)
f(abbr)
f(br)
f(dfn)
f(ins)
