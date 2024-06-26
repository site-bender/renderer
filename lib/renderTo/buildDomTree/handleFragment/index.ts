import buildDomTree from ".."
import { SbElement } from "../../../types/elements"
import { SbFullElement, SbRenderOptions } from "../../../types/shared"

export type HandleFragmentF = (
	parent: Node,
) => (children?: Array<SbElement>) => (options?: SbRenderOptions) => void

const handleFragment: HandleFragmentF =
	parent =>
	(children = []) =>
	options => {
		children.forEach(child =>
			buildDomTree(parent)(child as SbFullElement)(options),
		)
	}

export default handleFragment
