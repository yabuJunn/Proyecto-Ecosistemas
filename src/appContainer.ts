import "./export";
import styles from "./appContainer.css"
import { loadCss } from "./utilities/styles";

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        loadCss(this, styles)
        const help = this.ownerDocument.createElement("h1")
        help.innerText = "Help"
        this.shadowRoot?.appendChild(help)
        if (this.shadowRoot) {
            const examplePage = this.ownerDocument.createElement("example-page")
            this.shadowRoot.appendChild(examplePage)
        }
    }
}

customElements.define('app-container', AppContainer)