import footer from "../../sectioning/footer"
import header from "../../sectioning/header"
import main from "../../sectioning/main"

export default function templateB() {
	return {
		children: [header(), main(), footer()],
		dataset: {
			template: "B",
		},
	}
}
