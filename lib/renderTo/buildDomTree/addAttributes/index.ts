import type { SbGlobalAttributes } from "../../../types/shared"

export type AddAttributesF = (
	elem: HTMLElement,
) => (attributes?: SbGlobalAttributes) => void

const addAttributes: AddAttributesF =
	elem =>
	(attributes = {}) => {
		console.log("addAttributes", elem.tagName)
		Object.entries(attributes).forEach(([attr, value]) =>
			typeof value === "boolean"
				? value && elem.setAttribute(attr, "")
				: elem.setAttribute(attr, `${value}`),
		)
	}

export default addAttributes
