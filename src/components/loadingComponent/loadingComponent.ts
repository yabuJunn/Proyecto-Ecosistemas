import { loadCss } from "../../utilities/styles";
import "../../export";
import styles from "./loadingComponent.css"

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
            const loadingContainer = this.ownerDocument.createElement("div")
            loadingContainer.setAttribute("id", "loadingContainer")
            this.shadowRoot.appendChild(loadingContainer)

            const innerSVG = this.ownerDocument.createElement("img")
            innerSVG.setAttribute("src", "/src/assets/svg/Loading Inner Circle.svg")
            innerSVG.setAttribute("id", "innerSVG")
            loadingContainer.appendChild(innerSVG)

            const outerSVG = this.ownerDocument.createElement("img")
            outerSVG.setAttribute("src", "/src/assets/svg/Loading Outer Circle.svg")
            outerSVG.setAttribute("id", "outerSVG")
            loadingContainer.appendChild(outerSVG)

            // const something = this.ownerDocument.createElement("h1")
            // something.innerText = "Example Component"
            // loadingContainer.appendChild(something)
        }

    }
}

customElements.define("loading-icon", loadingIcon)