import { expect, test } from "vitest"

import { filterAttributes } from "."

const attributes = {
	accesskey: "Z",
	id: "id",
	class: "class",
	spellcheck: "",
	name: "name",
	open: false,
}

test("[filterAttributes] (flow::interactive::Details) typechecks attributes", () => {
	expect(
		filterAttributes({
			...attributes,
			/* @ts-expect-error */
			badAttr: "yes",
			badAttr2: true,
		}),
	).toMatchObject(attributes)
})
