import type { SbDocumentWithDisplayCache } from "../../types/shared"

export type MoveElementToDisplayCacheF = (id: string) => void

const moveElementToDisplayCache: MoveElementToDisplayCacheF = id => {
	const doc = document as SbDocumentWithDisplayCache
	const element = document.getElementById(id)

	if (element && doc) {
		const slot = doc.createElement("SLOT")

		slot.setAttribute("name", id)

		element.after(slot)
		element.remove()

		doc.__sbDisplayCache ??= {}
		doc.__sbDisplayCache[element.id] = element
	}
}

export default moveElementToDisplayCache
