class NavContainer extends HTMLElement {

    static get observedAttributes() {
        return ["img","starttest"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/Components/Nav/nav.css">
        <nav class="navbar">
        <div class="logo">
            <img class="img" src="${this.img}" alt="Logo de la empresa">
        </div>
        <div class="buttons">
            <button class="btn">${this.starttest}</button>
        </div>
    </nav>
        `;
    }
}

customElements.define('nav-contain', NavContainer);
export default NavContainer;