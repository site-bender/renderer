import aside from "../../sectioning/aside"
import footer from "../../sectioning/footer"
import header from "../../sectioning/header"
import main from "../../sectioning/main"

export default function templateD() {
	return {
		children: [
			header(),
			main(),
			aside({
				attributes: {
					class: "column-right",
				},
			}),
			footer(),
		],
		dataset: {
			template: "D",
		},
	}
}
