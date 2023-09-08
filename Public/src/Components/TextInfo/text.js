class TextContainer extends HTMLElement {

    static get observedAttributes() {
        return ["image","titlee","message","titlee2","message2","image2"];
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
        <link rel="stylesheet" href="./src/Components/TextInfo/text.css">
        <section>
        <div class="img">
            <img class="image" src="${this.image}">
        </div>
        <div class="info">
            <h1>${this.titlee}</h1>
            <p>${this.message}</p>
        </div>
    </section>

    <section>
        <div class="info2">
            <h1>${this.titlee2}</h1>
            <p>${this.message2}</p>
        </div>
        <div class="img">
            <img class="image" src="${this.image2}">
        </div>
    </section>
        `;
    }
}

customElements.define('text-contain', TextContainer);
export default TextContainer;