import header from "../../sectioning/header"
import main from "../../sectioning/main"

export default function templateA() {
	return {
		children: [header(), main()],
		dataset: {
			template: "A",
		},
	}
}
