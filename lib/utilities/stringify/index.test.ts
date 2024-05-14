import { expect, test } from "vitest"

import type { SbElement } from "../../types/elements"
import type { SbFullElement } from "../../types/shared"

import stringify from "."

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

// const elemReordered: SbFullElement = {
// 	children: [
// 		{
// 			children: [
// 				{
// 					children: [
// 						{
// 							tagName: "P",
// 						},
// 					],
// 					stylesheets: [
// 						{
// 							attributes: {
// 								href: "two",
// 								media: "all",
// 								rel: "stylesheet",
// 							},
// 							tagName: "LINK",
// 						},
// 						{
// 							attributes: {
// 								href: "four",
// 								media: "print",
// 								rel: "stylesheet",
// 							},
// 							tagName: "LINK",
// 						},
// 					],
// 					scripts: [
// 						{
// 							attributes: {
// 								src: "bravo",
// 							},
// 							tagName: "SCRIPT",
// 						},
// 						{
// 							attributes: {
// 								src: "alpha",
// 							},
// 							tagName: "SCRIPT",
// 						},
// 					],
// 					tagName: "SECTION",
// 				},
// 			],
// 			scripts: {
// 				attributes: {
// 					src: "charlie",
// 					type: "module",
// 				},
// 				tagName: "SCRIPT",
// 			},
// 			stylesheets: [
// 				{
// 					attributes: {
// 						href: "three",
// 					},
// 					tagName: "LINK",
// 				},
// 				{
// 					attributes: {
// 						href: "two",
// 						media: "screen",
// 					},
// 					tagName: "LINK",
// 				},
// 			],
// 			tagName: "ARTICLE",
// 		},
// 	],
// 	scripts: [
// 		{
// 			attributes: {
// 				src: "alpha",
// 			},
// 			tagName: "SCRIPT",
// 		},
// 		{
// 			attributes: {
// 				src: "alpha",
// 			},
// 			tagName: "SCRIPT",
// 		},
// 	],
// 	stylesheets: {
// 		attributes: {
// 			href: "one",
// 			media: "screen",
// 			rel: "stylesheet",
// 		},
// 		tagName: "LINK",
// 	},
// 	tagName: "BODY",
// }

const stringified =
	"children:children:children:tagName:P;scripts:attributes:src:alpha;tagName:" +
	"SCRIPT;attributes:src:bravo;tagName:SCRIPT;stylesheets:attributes:href:four;media:print;rel:" +
	"stylesheet;tagName:LINK;attributes:href:two;media:all;rel:stylesheet;tagName:LINK;tagName:" +
	"SECTION;scripts:attributes:src:charlie;type:module;tagName:SCRIPT;stylesheets:attributes:href" +
	":two;media:screen;tagName:LINK;attributes:href:three;tagName:LINK;tagName:ARTICLE;scripts:" +
	"attributes:src:alpha;tagName:SCRIPT;attributes:src:alpha;tagName:SCRIPT;stylesheets:attributes" +
	":href:one;media:screen;rel:stylesheet;tagName:LINK;tagName:BODY"

test("[stringify] (utilities) stringifies the object to a unique string for that object", () => {
	expect(stringify(elem as SbElement)).toMatch(stringified)
	// expect(stringify(elemReordered as SbElement)).toMatch(stringified) // TODO: make this work
})

test("[stringify] (utilities) works with arrays", () => {
	expect(
		stringify([
			{
				attributes: {
					src: "https://scripts/p",
					type: "module",
				},
				tagName: "SCRIPT",
			},
			{
				attributes: {
					src: "https://scripts/p2",
					type: "module",
				},
				tagName: "SCRIPT",
			},
		]),
	).toMatch(
		"attributes:src:https://scripts/p;type:module;tagName:SCRIPT;attributes:src:https://scripts/p2;type:module;tagName:SCRIPT",
	)
})
