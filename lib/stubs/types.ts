export type SbElementOf<T extends readonly unknown[]> =
	T extends readonly (infer ET)[] ? ET : never

export const SbCastableValues = [
	"integer",
	"number",
	"string",
	"boolean",
] as const

export type SbCastableValue = SbElementOf<typeof SbCastableValues>
