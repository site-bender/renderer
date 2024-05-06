import { SbAudioElement } from "../embedded/audio"
import { SbEmbedElement } from "../embedded/embed"
import { SbIFrameElement } from "../embedded/iframe"
import { SbImageElement } from "../embedded/img"
import { SbObjectElement } from "../embedded/object"
import { SbPictureElement } from "../embedded/picture"
import { SbVideoElement } from "../embedded/video"
import { SbCanvasElement } from "../scripting/canvas"

export type SbEmbeddedContent =
	| SbCanvasElement
	| SbAudioElement
	| SbVideoElement
	| SbPictureElement
	| SbImageElement
	| SbEmbedElement
	| SbIFrameElement
	| SbObjectElement
