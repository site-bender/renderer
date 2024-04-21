import { p } from "@sitebender/fp"
import {
	INTERACTIVE_ELEMENTS,
	INTERACTIVE_IF_HREF_ATTRIBUTE,
	INTERACTIVE_IF_CONTROLS_ATTRIBUTE,
	INTERACTIVE_IF_USEMAP_ATTRIBUTE,
	INTERACTIVE_IF_TYPE_ATTRIBUTE_NOT_HIDDEN_STATE,
} from "../../constants"

type Config = {
	attributes?: { [key: string]: string }
	tagName: string
}

type IsInteractiveContentF = (config: Config) => () => boolean

const isInteractiveContent: IsInteractiveContentF =
	(config = {} as Config) =>
	() => {
		const { attributes = {}, tagName } = config

		if (INTERACTIVE_ELEMENTS.includes(tagName)) {
			return true
		}

		if (
			INTERACTIVE_IF_HREF_ATTRIBUTE.includes(tagName) &&
			Object.keys(attributes).includes("href")
		) {
			return true
		}

		if (
			INTERACTIVE_IF_CONTROLS_ATTRIBUTE.includes(tagName) &&
			Object.keys(attributes).includes("controls")
		) {
			return true
		}

		if (
			INTERACTIVE_IF_USEMAP_ATTRIBUTE.includes(tagName) &&
			Object.keys(attributes).includes("usemap")
		) {
			return true
		}

		if (
			INTERACTIVE_IF_TYPE_ATTRIBUTE_NOT_HIDDEN_STATE.includes(tagName) &&
			Object.keys(attributes).includes("type") &&
			p.not(Object.keys(attributes).includes("hidden"))
		) {
			return true
		}

		return false
	}

export default isInteractiveContent
