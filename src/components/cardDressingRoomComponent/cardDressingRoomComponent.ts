import { loadCss } from "../../utilities/styles";
import "../../export";
import styles from "./cardDressingRoomComponent.css"

const enum cardDressingRoomProperties {
    img = "img"
}

export class cardDressingRoom extends HTMLElement {
    properties: Record<cardDressingRoomProperties, string> = {
        img: ""
    }

    static get observedAttributes() {
        const properties: Record<cardDressingRoomProperties, null> = {
            img: null,
        }
        return Object.keys(properties);
    }

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    attributeChangedCallback(propName: cardDressingRoomProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case cardDressingRoomProperties.img:
                this.properties.img = newValue
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

            const img = this.ownerDocument.createElement("img")
            img.src = this.properties.img
            this.shadowRoot.appendChild(img)

            // const something = this.ownerDocument.createElement("h1")
            // something.innerText = "Example Component"
            // this.shadowRoot.appendChild(something)
        }

    }
}

customElements.define("card_dressing_room-component", cardDressingRoom)