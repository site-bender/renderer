import { expect, test } from "vitest"

import collectScriptElements from "."
import type { SbFullElement } from "../../types/shared"

const elem: SbFullElement = {
	children: [
		{
			children: [
				{
					children: [
						{
							tagName: "P",
						},
					],
					stylesheets: [
						{
							attributes: {
								href: "four",
								media: "print",
								rel: "stylesheet",
							},
							tagName: "LINK",
						},
						{
							attributes: {
								href: "two",
								media: "all",
								rel: "stylesheet",
							},
							tagName: "LINK",
						},
					],
					scripts: [
						{
							attributes: {
								src: "alpha",
							},
							tagName: "SCRIPT",
						},
						{
							attributes: {
								src: "bravo",
							},
							tagName: "SCRIPT",
						},
					],
					tagName: "SECTION",
				},
			],
			stylesheets: [
				{
					attributes: {
						href: "two",
						media: "screen",
					},
					tagName: "LINK",
				},
				{
					attributes: {
						href: "three",
					},
					tagName: "LINK",
				},
			],
			scripts: {
				attributes: {
					src: "charlie",
					type: "module",
				},
				tagName: "SCRIPT",
			},
			tagName: "ARTICLE",
		},
	],
	stylesheets: {
		attributes: {
			href: "one",
			media: "screen",
			rel: "stylesheet",
		},
		tagName: "LINK",
	},
	scripts: [
		{
			attributes: {
				src: "alpha",
			},
			tagName: "SCRIPT",
		},
		{
			attributes: {
				src: "alpha",
			},
			tagName: "SCRIPT",
		},
	],
	tagName: "BODY",
}

test("[collectScriptElements] (utilities) collects and dedupes style elements", () => {
	expect(collectScriptElements(elem)).toMatchObject([
		{ attributes: { src: "alpha" }, tagName: "SCRIPT" },
		{ attributes: { src: "charlie", type: "module" }, tagName: "SCRIPT" },
		{ attributes: { src: "bravo" }, tagName: "SCRIPT" },
	])
})
