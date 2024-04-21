import { METADATA_ELEMENTS } from "../../constants"

type IsMetadataContentF = (config: { tagName: string }) => () => boolean

const isMetadataContent: IsMetadataContentF =
	({ tagName }) =>
	() =>
		METADATA_ELEMENTS.includes(tagName)

export default isMetadataContent
