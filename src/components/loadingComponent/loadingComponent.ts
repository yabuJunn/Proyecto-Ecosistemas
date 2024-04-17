import { loadCss } from "../../utilities/styles";
import "../../export";
import styles from "./exampleComponent.css"

const enum loadingIconProperties {
    icon = "icon"
}

export class loadingIcon extends HTMLElement {
    properties: Record<loadingIconProperties, string> = {
        icon: ""
    }

    static get observedAttributes() {
        const properties: Record<loadingIconProperties, null> = {
            icon: null,
        }
        return Object.keys(properties);
    }

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    attributeChangedCallback(propName: loadingIconProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case loadingIconProperties.icon:
                this.properties.icon = newValue
                break;
            default:
                break;
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            loadCss(this, styles)

            const something = this.ownerDocument.createElement("h1")
            something.innerText = "Example Component"
            this.shadowRoot.appendChild(something)
        }

    }
}

customElements.define("loading-icon", loadingIcon)