import { a } from "@sitebender/fp"

type LinkType = "scripts" | "stylesheets"
type WithAssets = {
	children?: Array<WithAssets>
	scripts?: Array<string> | string
	stylesheets?: Array<string> | string
}

type CollectLinked = (
	type: LinkType,
) => (configuration: WithAssets | Array<WithAssets>) => Array<string>

const collectLinked: CollectLinked = type => configuration => {
	const elements = Array.isArray(configuration)
		? configuration
		: [configuration]

	return a.unique(
		elements.reduce((acc, element) => {
			const arr = element[type]

			if (arr) {
				const kids = element.children || []
				const links = collectLinked(type)(kids)

				return acc.concat(arr).concat(links)
			}

			return acc
		}, [] as Array<string>),
	)
}

export default collectLinked
