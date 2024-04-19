import "../../export";
// import { AppContainer } from "../..";
import styles from "./successfulConnectionPage.css"
import { loadCss } from "../../utilities/styles";

export class successfulConnectionPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            loadCss(this, styles)

            const pageContainer = this.ownerDocument.createElement("div")
            pageContainer.setAttribute("id", "pageContainer")
            pageContainer.style.backgroundImage = "url('/src/assets/jpg/black_girl_background_red.jpg')"
            this.shadowRoot.appendChild(pageContainer)

            const backgroundBlur = this.ownerDocument.createElement("div")
            backgroundBlur.setAttribute("id", "backgroundBlur")
            pageContainer.appendChild(backgroundBlur)

            const contentContainer = this.ownerDocument.createElement("div")
            contentContainer.setAttribute("id", "contentContainer")
            pageContainer.appendChild(contentContainer)

            const text = this.ownerDocument.createElement("h3")
            text.innerText = "Conexión exitosa"
            contentContainer.appendChild(text)

            const successfulIcon = this.ownerDocument.createElement("successful-icon")
            contentContainer.appendChild(successfulIcon)

            // const something = this.ownerDocument.createElement('h1');
            // something.innerText = "Own Scaffolding"
            // this.shadowRoot.appendChild(something);

            // const exampleComponent = this.ownerDocument.createElement("component-name")
            // this.shadowRoot.appendChild(exampleComponent)
        }
    }
}

customElements.define('successful_connection-page', successfulConnectionPage)