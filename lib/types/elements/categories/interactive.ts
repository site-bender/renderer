import { Override } from "../../shared"
import { SbEmbedElement } from "../embedded/embed"
import { SbIFrameElement } from "../embedded/iframe"
import { SbImageElement } from "../embedded/img"
import { SbAnchorElement } from "../text-level-semantics/a"

export type SbInteractiveContent =
	| Override<SbAnchorElement, { href: string }>
	| Override<SbImageElement, { useMap: string }>
	| SbEmbedElement
	| SbIFrameElement
