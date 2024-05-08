import type { Override } from "../../shared"
import type { SbAnchorElement } from "../text-level-semantics/a"
import type { SbAudioElement } from "../embedded/audio"
import type { SbButtonElement } from "../forms/button"
import type { SbDetailsElement } from "../interactive/details"
import type { SbEmbedElement } from "../embedded/embed"
import type { SbHiddenInputElement } from "../forms/input/hidden"
import type { SbIFrameElement } from "../embedded/iframe"
import type { SbImageElement } from "../embedded/img"
import type { SbInputElement } from "../forms/input"
import type { SbLabelElement } from "../forms/label"
import type { SbObjectElement } from "../embedded/object"
import type { SbSelectElement } from "../forms/select"
import type { SbTextAreaElement } from "../forms/textarea"
import type { SbVideoElement } from "../embedded/video"

export type SbInteractiveContent =
	| Override<SbAnchorElement, { href: string }>
	| Override<SbAudioElement, { controls: string }>
	| SbButtonElement
	| SbDetailsElement
	| SbEmbedElement
	| SbIFrameElement
	| Override<SbImageElement, { useMap: string }>
	| Exclude<SbInputElement, SbHiddenInputElement>
	| SbLabelElement
	| Override<SbObjectElement, { useMap: string }>
	| SbSelectElement
	| SbTextAreaElement
	| Override<SbVideoElement, { controls: string }>
