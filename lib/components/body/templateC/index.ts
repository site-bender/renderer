import footer from "../../sectioning/footer"
import header from "../../sectioning/header"
import main from "../../sectioning/main"
import nav from "../../sectioning/nav"

export default function templateC() {
	return {
		children: [header(), nav(), main(), footer()],
		dataset: {
			template: "C",
		},
	}
}
