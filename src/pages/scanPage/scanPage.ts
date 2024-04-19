import "../../export";
import styles from "./scanPage.css"
import { loadCss } from "../../utilities/styles";
//import { socket } from "../../utilities/serverClientSide";
import { dispatch, state } from "../../store";
import { changeScreen } from "../../store/actions";
import { ScreensTypes } from "../../types/screens";

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
            nextButton.addEventListener('click', async () => {
                console.log(codeInput.value)
                if (codeInput.value !== "") {
                    const response = await fetch(`http://localhost:5500/rooms/${codeInput.value}`)
                    const roomData = await response.json()
                    console.log(roomData)
                    if (roomData.data !== null) {
                        dispatch(
                            changeScreen(ScreensTypes.whoAreYouPage, true)
                        )
                    } else {
                        alert("Es nulo")
                    }
                } else {
                    alert('Code Input is Empty')
                }
            })
        }
    }
}

customElements.define('scan-page', scanPage)