import "../../export";
import styles from "./scanPage.css"
import { loadCss } from "../../utilities/styles";
import { socket } from "../../utilities/serverClientSide";
import { state } from "../../store";

export class scanPage extends HTMLElement {
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
            this.shadowRoot.appendChild(pageContainer)

            const codeInput = this.ownerDocument.createElement("input")
            codeInput.placeholder = "Ingresa el codigo de la sala"
            pageContainer.appendChild(codeInput)

            const nextButton = this.ownerDocument.createElement("button")
            nextButton.innerText = "Continuar"
            pageContainer.appendChild(nextButton)
            nextButton.addEventListener('click', () => {
                if (codeInput.value !== "") {
                    socket.emit('enteringRoom', JSON.stringify({
                        userId: state.userId,
                        roomId: codeInput.value
                    }))
                } else {
                    alert('Code Input is Empty')
                }
            })
        }
    }
}

customElements.define('scan-page', scanPage)