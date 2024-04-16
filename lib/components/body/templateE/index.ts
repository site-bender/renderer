import aside from "../../sectioning/aside"
import footer from "../../sectioning/footer"
import header from "../../sectioning/header"
import main from "../../sectioning/main"

export default function templateE() {
	return {
		children: [
			header(),
			aside({
				attributes: {
					class: "column-left",
				},
			}),
			main(),
			aside({
				attributes: {
					class: "column-right",
				},
			}),
			footer(),
		],
		dataset: {
			template: "E",
		},
	}
}
