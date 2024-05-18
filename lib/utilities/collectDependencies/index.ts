import type {
	SbConditionalOperation,
	SbFormInjectorData,
	SbNumericOperation,
} from "@sitebender/operations/lib/types"

import getSelector from "../getSelector"

export type CollectDependenciesF = (
	condition: SbConditionalOperation | SbNumericOperation,
) => Array<string>

const collectDependencies: CollectDependenciesF = (
	condition = {} as SbConditionalOperation,
) => {
	const dependencies = Object.entries(condition).reduce(
		(deps, [key, value]) => {
			if (key === "source") {
				deps.push(getSelector(value as SbFormInjectorData))

				return deps
			}

			if (typeof value === "object" && value != null) {
				return deps.concat(collectDependencies(value))
			}

			return deps
		},
		[] as Array<string>,
	)

	return dependencies
}

export default collectDependencies
