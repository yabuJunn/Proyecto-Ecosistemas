import "./export";
import styles from "./appContainer.css"
import { loadCss } from "./utilities/styles";
import { state } from "./store";
import { ScreensTypes } from "./types/screens";

class AppContainer extends HTMLElement {
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

            this.shadowRoot.innerHTML = ""
            
            if (state.screen === ScreensTypes.landingPage) {
                const landingPage = this.ownerDocument.createElement("landing-page")
                this.shadowRoot.appendChild(landingPage)
            }
        }
    }
}

customElements.define('app-container', AppContainer)