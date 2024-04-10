import { a } from "@sitebender/fp"

type LinkType = "scripts" | "stylesheets"
type WithAssets = {
	children?: Array<WithAssets>
	scripts?: Array<string>
	stylesheets?: Array<string>
}

type CollectLinked = (
	type: LinkType,
) => (configuration: WithAssets) => Array<string>

const collectLinked: CollectLinked = type => configuration => {
	const elements = Array.isArray(configuration)
		? configuration
		: [configuration]

	return a.unique(
		elements.reduce((acc, element) => {
			const arr = element[type] || []
			const children = collectLinked(type)(element.children || [])

			return acc.concat(arr).concat(children)
		}, []),
	)
}

export default collectLinked
