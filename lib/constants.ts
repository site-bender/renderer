import { a } from "@sitebender/fp"

export const BASE_ELEMENTS = ["BODY", "HEAD", "HTML"]

export const EMBEDDED_ELEMENTS = [
	"AUDIO",
	"CANVAS",
	"EMBED",
	"IFRAME",
	"IMG",
	"MATH",
	"OBJECT",
	"PICTURE",
	"SVG",
	"VIDEO",
]

// Should have at least one child which is palpable,
// i.e., neither empty nor hidden.
export const FLOW_ELEMENTS = [
	"A",
	"ABBR",
	"ADDRESS",
	"ARTICLE",
	"ASIDE",
	"AUDIO",
	"B",
	"BDO",
	"BDI",
	"BLOCKQUOTE",
	"BR",
	"BUTTON",
	"CANVAS",
	"CITE",
	"CODE",
	"DATA",
	"DATALIST",
	"DEL",
	"DETAILS",
	"DFN",
	"DIALOG",
	"DIV",
	"DL",
	"EM",
	"EMBED",
	"FIELDSET",
	"FIGURE",
	"FOOTER",
	"FORM",
	"H1",
	"H2",
	"H3",
	"H4",
	"H5",
	"H6",
	"HN",
	"HEADER",
	"HGROUP",
	"HR",
	"I",
	"IFRAME",
	"IMG",
	"INPUT",
	"INS",
	"KBD",
	"LABEL",
	"MAIN",
	"MARK",
	"MATH",
	"MENU",
	"METER",
	"NAV",
	"NOSCRIPT",
	"OBJECT",
	"OL",
	"OUTPUT",
	"P",
	"PICTURE",
	"PRE",
	"PROGRESS",
	"Q",
	"RUBY",
	"S",
	"SAMP",
	"SEARCH",
	"SCRIPT",
	"SECTION",
	"SELECT",
	"SLOT",
	"SMALL",
	"SPAN",
	"STRONG",
	"SUB",
	"SUP",
	"SVG",
	"TABLE",
	"TEMPLATE",
	"TEXTAREA",
	"TIME",
	"U",
	"UL",
	"VAR",
	"VIDEO",
	"WBR",
] // Also, plain text

export const FLOW_IF_MAP_DESCENDANT = ["AREA"]
export const FLOW_IF_ITEMPROP_ATTRIBUTE = ["LINK", "META"]

export const FORM_ASSOCIATED_ELEMENTS = [
	"BUTTON",
	"FIELDSET",
	"INPUT",
	"LABEL",
	"METER",
	"OBJECT",
	"OUTPUT",
	"PROGRESS",
	"SELECT",
	"TEXTAREA",
]

export const FORM_ASSOCIATED_ELEMENTS_LABELABLE = [
	"BUTTON",
	"INPUT",
	"METER",
	"OUTPUT",
	"PROGRESS",
	"SELECT",
	"TEXTAREA",
]

export const FORM_ASSOCIATED_ELEMENTS_LISTED = [
	"BUTTON",
	"FIELDSET",
	"INPUT",
	"OBJECT",
	"OUTPUT",
	"SELECT",
	"TEXTAREA",
]

export const FORM_ASSOCIATED_ELEMENTS_RESETTABLE = [
	"INPUT",
	"OUTPUT",
	"SELECT",
	"TEXTAREA",
]

export const FORM_ASSOCIATED_ELEMENTS_SUBMITTABLE = [
	"BUTTON",
	"INPUT",
	"OBJECT",
	"SELECT",
	"TEXTAREA",
]

export const HEADING_ELEMENTS = [
	"H1",
	"H2",
	"H3",
	"H4",
	"H5",
	"H6",
	"HGROUP",
	"HN",
]

export const INTERACTIVE_ELEMENTS = [
	"BUTTON",
	"DETAILS",
	"EMBED",
	"IFRAME",
	"LABEL",
	"SELECT",
	"TEXTAREA",
]

export const INTERACTIVE_IF_HREF_ATTRIBUTE = ["A"]
export const INTERACTIVE_IF_CONTROLS_ATTRIBUTE = ["AUDIO", "VIDEO"]
export const INTERACTIVE_IF_USEMAP_ATTRIBUTE = ["IMG", "OBJECT"]
export const INTERACTIVE_IF_TYPE_ATTRIBUTE_NOT_HIDDEN_STATE = ["INPUT"]

export const METADATA_ELEMENTS = [
	"BASE",
	"LINK",
	"META",
	"NOSCRIPT",
	"SCRIPT",
	"STYLE",
	"TITLE",
]

export const PHRASING_ELEMENTS = [
	"ABBR",
	"AUDIO",
	"B",
	"BDI",
	"BDO",
	"BR",
	"BUTTON",
	"CANVAS",
	"CITE",
	"CODE",
	"DATA",
	"DATALIST",
	"DFN",
	"EM",
	"EMBED",
	"I",
	"IFRAME",
	"IMG",
	"INPUT",
	"KBD",
	"LABEL",
	"MARK",
	"MATH",
	"METER",
	"NOSCRIPT",
	"OBJECT",
	"OUTPUT",
	"PICTURE",
	"PROGRESS",
	"Q",
	"RUBY",
	"S",
	"SAMP",
	"SCRIPT",
	"SELECT",
	"SLOT",
	"SMALL",
	"SPAN",
	"STRONG",
	"SUB",
	"SUP",
	"SVG",
	"TEMPLATE",
	"TEXTAREA",
	"TIME",
	"U",
	"VAR",
	"VIDEO",
	"WBR",
] // Also plain text

export const PHRASING_IF_AREA_DESCENDANT = ["MAP"]
export const PHRASING_IF_ITEMPROP_ATTRIBUTE = ["LINK", "META"]
export const PHRASING_IF_CONTAINS_PHRASING = ["A", "DEL", "INS", "MAP"]

export const SCRIPT_SUPPORTING_ELEMENTS = ["SCRIPT", "TEMPLATE"]

export const SECTIONING_ELEMENTS = ["ARTICLE", "ASIDE", "NAV", "SECTION"]

// TODO: how to evaluate transparent content model
// MDN: If an element has a transparent content model, then its contents
// must be structured such that they would be valid HTML 5, even if the
// transparent element were removed and replaced by the child elements.

export const ALL_ELEMENTS = a.unique(
	BASE_ELEMENTS.concat(FLOW_ELEMENTS).concat(METADATA_ELEMENTS),
)
