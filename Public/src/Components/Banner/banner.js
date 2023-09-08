class BannerContainer extends HTMLElement {

    static get observedAttributes() {
        return ["title","text","start"];
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
        <link rel="stylesheet" href="./src/Components/Banner/banner.css">
        <section>
        <h1>${this.title}</h1>
        <h3>${this.text}</h3>
        <button class="buttons">${this.start}</button>
        </section>
        `;
    }
}

customElements.define('banner-contain',BannerContainer);
export default BannerContainer;