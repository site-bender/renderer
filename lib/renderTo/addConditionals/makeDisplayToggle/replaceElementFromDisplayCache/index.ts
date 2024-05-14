import type { SbDocumentWithDisplayCache } from "../../../../types/shared"

export type ReplaceElementFromDisplayCacheF = (id: string) => void

const replaceElementFromDisplayCache: ReplaceElementFromDisplayCacheF = id => {
	const doc = document as SbDocumentWithDisplayCache

	if (doc) {
		const slot = doc.querySelector(`slot[name=${id}]`)
		const element = doc.__sbDisplayCache && doc.__sbDisplayCache[id]

		if (slot && element) {
			slot.after(element)
			slot.remove()

			delete doc.__sbDisplayCache[id]
		}
	}
}

export default replaceElementFromDisplayCache
