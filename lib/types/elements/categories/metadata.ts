import { SbBaseElement } from "../metadata/base"
import { SbLinkElement } from "../metadata/link"
import { SbMetaElement } from "../metadata/meta"
import { SbStyleElement } from "../metadata/style"
import { SbTitleElement } from "../metadata/title"
import { SbNoScriptElement } from "../scripting/noscript"
import { SbScriptElement } from "../scripting/script"
import { SbTemplateElement } from "../scripting/template"

export type SbMetadataContent =
	| SbBaseElement
	| SbLinkElement
	| SbMetaElement
	| SbStyleElement
	| SbTitleElement
	| SbNoScriptElement
	| SbScriptElement
	| SbTemplateElement
