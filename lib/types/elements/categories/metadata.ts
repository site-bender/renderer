import type { SbBaseElement } from "../metadata/base"
import type { SbHeadElement } from "../metadata/head"
import type { SbLinkElement } from "../metadata/link"
import type { SbMetaElement } from "../metadata/meta"
import type { SbNoScriptElement } from "../scripting/noscript"
import type { SbScriptElement } from "../scripting/script"
import type { SbStyleElement } from "../metadata/style"
import type { SbTemplateElement } from "../scripting/template"
import type { SbTitleElement } from "../metadata/title"

export type SbMetadataContent =
	| SbBaseElement
	| SbHeadElement
	| SbLinkElement
	| SbMetaElement
	| SbNoScriptElement
	| SbScriptElement
	| SbStyleElement
	| SbTemplateElement
	| SbTitleElement
