import { expect, test } from "vitest"

import isPhrasingContent from "."

test("[isPhrasingContent] (guards) returns true for phrasing content elements", () => {
	expect(isPhrasingContent({ tagName: "BUTTON" })()).toBe(true)
	expect(isPhrasingContent({ tagName: "EMBED" })()).toBe(true)
	expect(isPhrasingContent({ tagName: "KBD" })()).toBe(true)
	expect(isPhrasingContent({ tagName: "METER" })()).toBe(true)
	expect(isPhrasingContent({ tagName: "LABEL" })()).toBe(true)
	expect(isPhrasingContent({ tagName: "PICTURE" })()).toBe(true)
	expect(isPhrasingContent({ tagName: "SVG" })()).toBe(true)
})

test("[isPhrasingContent] (guards) returns false for non-phrasing content elements", () => {
	expect(isPhrasingContent({ tagName: "DETAILS" })()).toBe(false)
	expect(isPhrasingContent({ tagName: "BASE" })()).toBe(false)
	expect(isPhrasingContent({ tagName: "LINK" })()).toBe(false)
	expect(isPhrasingContent({ tagName: "META" })()).toBe(false)
	expect(isPhrasingContent({ tagName: "STYLE" })()).toBe(false)
	expect(isPhrasingContent({ tagName: "TITLE" })()).toBe(false)
})

test("[isPhrasingContent] (guards) returns true for MAP when descendant of AREA", () => {
	expect(
		isPhrasingContent({ tagName: "MAP" })({
			ancestors: ["ARTICLE", "SECTION", "AREA"],
		}),
	).toBe(true)
})

test("[isPhrasingContent] (guards) returns false for MAP when not a descendant of AREA", () => {
	expect(
		isPhrasingContent({ tagName: "MAP" })({
			ancestors: ["ARTICLE", "SECTION"],
		}),
	).toBe(false)
})

test("[isPhrasingContent] (guards) returns true for LINK and META when itemprop attribute present", () => {
	expect(
		isPhrasingContent({ attributes: { itemprop: "prop" }, tagName: "LINK" })(),
	).toBe(true)
	expect(
		isPhrasingContent({ attributes: { itemprop: "prop" }, tagName: "META" })(),
	).toBe(true)
})

test("[isPhrasingContent] (guards) returns true for LINK and META when itemprop attribute absent", () => {
	expect(isPhrasingContent({ tagName: "LINK" })()).toBe(false)
	expect(isPhrasingContent({ tagName: "META" })()).toBe(false)
})

test("[isPhrasingContent] (guards) returns true for A, DEL, INS, or MAP when contains phrasing element(s)", () => {
	expect(
		isPhrasingContent({
			children: [
				{
					children: [{ tagName: "BR" }],
					tagName: "DIV",
				},
			],
			tagName: "A",
		})(),
	).toBe(true)
	expect(
		isPhrasingContent({
			children: [
				{
					children: [{ tagName: "BR" }],
					tagName: "DIV",
				},
			],
			tagName: "DEL",
		})(),
	).toBe(true)
	expect(
		isPhrasingContent({
			children: [
				{
					children: [{ tagName: "BR" }],
					tagName: "DIV",
				},
			],
			tagName: "INS",
		})(),
	).toBe(true)
	expect(
		isPhrasingContent({
			children: [
				{
					children: [{ tagName: "BR" }],
					tagName: "DIV",
				},
			],
			tagName: "MAP",
		})(),
	).toBe(true)
})

test("[isPhrasingContent] (guards) returns true for A, DEL, INS, or MAP when does not contain phrasing element(s)", () => {
	expect(
		isPhrasingContent({
			children: [
				{
					children: [{ tagName: "P" }],
					tagName: "DIV",
				},
			],
			tagName: "A",
		})(),
	).toBe(false)
	expect(
		isPhrasingContent({
			children: [
				{
					children: [{ tagName: "P" }],
					tagName: "DIV",
				},
			],
			tagName: "DEL",
		})(),
	).toBe(false)
	expect(
		isPhrasingContent({
			children: [
				{
					children: [{ tagName: "P" }],
					tagName: "DIV",
				},
			],
			tagName: "INS",
		})(),
	).toBe(false)
	expect(
		isPhrasingContent({
			children: [
				{
					children: [{ tagName: "P" }],
					tagName: "DIV",
				},
			],
			tagName: "MAP",
		})(),
	).toBe(false)
})
