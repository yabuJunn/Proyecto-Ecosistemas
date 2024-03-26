import "../../export";
import styles from "./whoAreYouPage.css"
import { loadCss } from "../../utilities/styles";
import { state } from "../../store";

export class whoAreYouPage extends HTMLElement {
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

            const whoAreYouContainer = this.ownerDocument.createElement("div")
            whoAreYouContainer.setAttribute("id", "whoAreYouContainer")
            pageContainer.appendChild(whoAreYouContainer)

            const whoAreYouTitle = this.ownerDocument.createElement("h2")
            whoAreYouTitle.innerText = "Who are you?"
            whoAreYouContainer.appendChild(whoAreYouTitle)

            const buyerButton = this.ownerDocument.createElement("who_are_you-button")
            buyerButton.setAttribute("type", "buyer")
            whoAreYouContainer.appendChild(buyerButton)

            const companionButton = this.ownerDocument.createElement("who_are_you-button")
            companionButton.setAttribute("type", "companion")
            whoAreYouContainer.appendChild(companionButton)
        }
    }
}

customElements.define('who_are_you-page', whoAreYouPage)