import { loadCss } from "../../utilities/styles";
import "../../export";
import styles from "./successfulComponent.css"

const enum successfulIconProperties {
    icon = "icon"
}

export class successfulIcon extends HTMLElement {
    properties: Record<successfulIconProperties, string> = {
        icon: ""
    }

    static get observedAttributes() {
        const properties: Record<successfulIconProperties, null> = {
            icon: null,
        }
        return Object.keys(properties);
    }

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    attributeChangedCallback(propName: successfulIconProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case successfulIconProperties.icon:
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

            const loadingContainer = this.ownerDocument.createElement("div")
            loadingContainer.setAttribute("id", "loadingContainer")
            this.shadowRoot.appendChild(loadingContainer)

            const circleSVG = this.ownerDocument.createElement("img")
            circleSVG.setAttribute("src", "/src/assets/svg/White Circle.svg")
            circleSVG.setAttribute("id", "circleSVG")
            loadingContainer.appendChild(circleSVG)

            const checkSVG = this.ownerDocument.createElement("img")
            checkSVG.setAttribute("src", "/src/assets/svg/Red Check Marker.svg")
            checkSVG.setAttribute("id", "checkSVG")
            loadingContainer.appendChild(checkSVG)

            // const something = this.ownerDocument.createElement("h1")
            // something.innerText = "Example Component"
            // loadingContainer.appendChild(something)
        }

    }
}

customElements.define("successful-icon", successfulIcon)