import type { SbConditionalOperation } from "@sitebender/operations/lib/types"
import type { SbFullElement } from "../../types/shared"

const collectConditionals = (component: SbFullElement) => {
	const conditions = Object.entries(component).reduce(
		(conds, [key, value]) => {
			if (key === "display" && component.attributes?.id) {
				conds[component.attributes?.id as string] = value
			}

			if (key === "children") {
				const childDeps = (value as Array<SbFullElement>)?.reduce(
					(out, item) => {
						return {
							...out,
							...collectConditionals(item),
						}
					},
					[] as Array<SbConditionalOperation>,
				)

				Object.assign(conds, childDeps)
			}

			return conds
		},
		{} as Record<string, unknown>,
	)

	return conditions
}

export default collectConditionals
