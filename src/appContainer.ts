import "./export";
import styles from "./appContainer.css"
import { loadCss } from "./utilities/styles";
import { addObserver, state } from "./store";
import { ScreensTypes } from "./types/screens";

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            loadCss(this, styles)

            this.shadowRoot.innerHTML = ""
            switch (state.screen) {
                case ScreensTypes.landingPage:
                    const landingPage = this.ownerDocument.createElement("landing-page")
                    this.shadowRoot.appendChild(landingPage)
                    break;
                case ScreensTypes.scanPage:
                    const scanPage = this.ownerDocument.createElement("scan-page")
                    this.shadowRoot.appendChild(scanPage)
                    break;
                default:
                    break;
            }
        }
    }
}

customElements.define('app-container', AppContainer)