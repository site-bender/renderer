import type { SbDataset } from "../../../types/shared"

export type AddDataAttributesF = (
	elem: HTMLElement,
) => (dataset?: SbDataset) => void

const addDataAttributes: AddDataAttributesF =
	elem =>
	(dataset = {}) => {
		Object.entries(dataset).forEach(([attr, value]) =>
			typeof value === "boolean"
				? value && elem.setAttribute(`data-${attr}`, "")
				: elem.setAttribute(`data-${attr}`, `${value}`),
		)
	}

export default addDataAttributes
