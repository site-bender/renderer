import { SbFormInjectorData } from "@sitebender/operations/lib/types"

export type GetSelectorF = (source: SbFormInjectorData) => string

const getSelector: GetSelectorF = source => {
	const { form, id, name, selector, tagName = "" } = source || {}

	const formId = form ? `#${form} ` : ""

	if (selector) {
		return selector
	}

	if (id) {
		return `#${id}`
	}

	if (name) {
		return `${formId}${tagName}[name=${name}]`
	}

	return `${formId}${tagName}`
}

export default getSelector
