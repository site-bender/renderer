import { expect, test } from "vitest"

import type { SbFullElement } from "../../types/shared"

import collectLinkElements from "."

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

test("[collectLinkElements] (utilities) collects and dedupes style elements", () => {
	expect(collectLinkElements(elem)).toMatchObject([
		{
			attributes: { href: "one", media: "screen", rel: "stylesheet" },
			tagName: "LINK",
		},
		{ attributes: { href: "two", media: "screen" }, tagName: "LINK" },
		{ attributes: { href: "three" }, tagName: "LINK" },
		{
			attributes: { href: "four", media: "print", rel: "stylesheet" },
			tagName: "LINK",
		},
		{
			attributes: { href: "two", media: "all", rel: "stylesheet" },
			tagName: "LINK",
		},
	])
})
