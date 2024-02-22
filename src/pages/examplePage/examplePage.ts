import "../../export";
// import { AppContainer } from "../..";
import styles from "./examplePage.css"
import { loadCss } from "../../utilities/styles";

export class examplePage extends HTMLElement {
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

            const something = this.ownerDocument.createElement('h1');
            something.innerText = "Own Scaffolding"
            this.shadowRoot?.appendChild(something);
        }
    }
}

customElements.define('example-page', examplePage)