import {
	FLOW_ELEMENTS,
	FLOW_IF_MAP_DESCENDANT,
	FLOW_IF_ITEMPROP_ATTRIBUTE,
} from "../../constants"

type Config = {
	attributes?: { [key: string]: string }
	tagName: string
}
type Options = { ancestors: Array<string> }

type IsFlowContentF = (config: Config) => (options?: Options) => boolean

const isFlowContent: IsFlowContentF =
	(config = {} as Config) =>
	(options = {} as Options) => {
		const { attributes = {}, tagName } = config
		const { ancestors = [] } = options

		if (FLOW_ELEMENTS.includes(tagName)) {
			return true
		}

		if (
			FLOW_IF_MAP_DESCENDANT.includes(tagName) &&
			ancestors.at(-1) === "MAP"
		) {
			return true
		}

		if (
			FLOW_IF_ITEMPROP_ATTRIBUTE.includes(tagName) &&
			Object.keys(attributes).includes("itemprop")
		) {
			return true
		}

		return false
	}

export default isFlowContent
