import type { SbAudioElement } from "../embedded/audio"
import type { SbEmbedElement } from "../embedded/embed"
import type { SbIFrameElement } from "../embedded/iframe"
import type { SbImageElement } from "../embedded/img"
import type { SbObjectElement } from "../embedded/object"
import type { SbPictureElement } from "../embedded/picture"
import type { SbVideoElement } from "../embedded/video"
import type { SbCanvasElement } from "../scripting/canvas"

// TODO: Add math, svg

export type SbEmbeddedContent =
	| SbAudioElement
	| SbCanvasElement
	| SbEmbedElement
	| SbIFrameElement
	| SbImageElement
	| SbObjectElement
	| SbPictureElement
	| SbVideoElement
