import type { SbConditionalOperation } from "@sitebender/operations/lib/types"
import type { SbFullElement } from "../../types/shared"

import collectConditionals from "../../utilities/collectConditionals"
import collectDependencies from "../../utilities/collectDependencies"
import makeConditional from "../../stubs/makeConditional"
import makeDisplayToggle from "./makeDisplayToggle"

type WithDisplayCallbacks = typeof document & {
	__sbDisplayCallbacks: Record<string, Array<Function>>
}

export type AddConditionalsF = (
	element: HTMLElement,
) => (component: SbFullElement) => void

const addConditionals: AddConditionalsF = element => component => {
	const conditionals = collectConditionals(component)

	Object.entries(conditionals).forEach(([id, conditional]) => {
		const testCondition = makeConditional(conditional as SbConditionalOperation)
		const displayToggle = makeDisplayToggle(id)(testCondition)
		const selectors = collectDependencies(conditional as SbConditionalOperation)
		const doc = document as WithDisplayCallbacks

		doc.__sbDisplayCallbacks ??= {}

		selectors.forEach(selector => {
			const { id } =
				element.querySelector(selector) ||
				(document as WithDisplayCallbacks).querySelector(selector) ||
				{}

			if (id) {
				doc.__sbDisplayCallbacks[id] ??= []
				doc.__sbDisplayCallbacks[id].push(displayToggle)
			}
		})
	})
}

export default addConditionals
