type Config = {
	children?: Array<Config>
	tagName: string
}

type FlatMapDescendantsF = (children: Array<Config>) => Array<string>

const flatMapDescendants: FlatMapDescendantsF = children =>
	children.reduce((out, child) => {
		return [
			...out,
			child.tagName,
			...(child.children ? flatMapDescendants(child.children) : []),
		]
	}, [] as Array<string>)

type HasDescendantF = (config: Config) => (tagNames: Array<string>) => boolean

const hasDescendant: HasDescendantF = config => tagNames => {
	const { children = [] } = config
	const descendants = flatMapDescendants(children)

	return Boolean(descendants.find(descendant => tagNames.includes(descendant)))
}

export default hasDescendant
