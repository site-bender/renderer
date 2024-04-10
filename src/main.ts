import {
	accordion,
	collectLinked,
	emailField,
	helpBox,
	numberField,
	render,
} from "../dist/renderer.js"

const help1 = helpBox({
	component: "help-box",
	stylesheets: ["help-box"],
	value: "Bob is the man.",
})

const help2 = helpBox({
	component: "help-box",
	stylesheets: ["help-box"],
	value: "I forgot the question.",
})

const email = emailField({
	children: [help1],
	component: "email-field",
	defaultValue: "bob@dobbs.com",
	label: "Email address",
	name: "emailAddress",
	stylesheets: ["email-field"],
})

const number = numberField({
	children: [help2],
	component: "number-field",
	defaultValue: "42",
	label: "The answer",
	name: "the-answer",
	stylesheets: ["number-field"],
	validation: {
		operation: {
			operands: [],
			operation: "OR",
		},
		validateOn: ["blur", "input", "submit"],
	},
})

const accord = accordion({
	children: [email, number],
	component: "accordion",
	scripts: ["accordion"],
	stylesheets: ["accordion"],
	summary: ["This is the accordion!"],
})

const out = render(accord)

console.log(JSON.stringify(accord, null, 2))

const scripts = collectLinked("scripts")(accord)
const stylesheets = collectLinked("stylesheets")(accord)

stylesheets.forEach((sheet: string) => {
	const style = document.createElement("LINK")

	style.setAttribute("rel", "stylesheet")
	style.setAttribute("href", `/css/${sheet}.css`)

	document.head.appendChild(style)
})

document.body.appendChild(out)

scripts.forEach((sheet: string) => {
	const style = document.createElement("SCRIPT")

	style.setAttribute("src", `/js/${sheet}.js`)
	// style.setAttribute("type", "module")

	document.body.appendChild(style)
})
