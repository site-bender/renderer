import {
	PHRASING_ELEMENTS,
	PHRASING_IF_AREA_DESCENDANT,
	PHRASING_IF_ITEMPROP_ATTRIBUTE,
	PHRASING_IF_CONTAINS_PHRASING,
} from "../../constants"
import hasDescendant from "./hasDescendant"

type Config = {
	attributes?: { [key: string]: string }
	children?: Array<Config>
	tagName: string
}
type Options = { ancestors: Array<string> }

type IsPhrasingContentF = (config: Config) => (options?: Options) => boolean

const isPhrasingContent: IsPhrasingContentF =
	(config = {} as Config) =>
	(options = {} as Options) => {
		const { attributes = {}, tagName } = config
		const { ancestors = [] } = options

		if (PHRASING_ELEMENTS.includes(tagName)) {
			return true
		}

		if (
			PHRASING_IF_AREA_DESCENDANT.includes(tagName) &&
			ancestors.at(-1) === "AREA"
		) {
			return true
		}

		if (
			PHRASING_IF_ITEMPROP_ATTRIBUTE.includes(tagName) &&
			Object.keys(attributes).includes("itemprop")
		) {
			return true
		}

		if (
			PHRASING_IF_CONTAINS_PHRASING.includes(tagName) &&
			hasDescendant(config)(PHRASING_ELEMENTS)
		) {
			return true
		}

		return false
	}

export default isPhrasingContent
