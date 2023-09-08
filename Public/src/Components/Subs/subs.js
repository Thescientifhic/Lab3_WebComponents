class SubsContainer extends HTMLElement {

    static get observedAttributes() {
        return ["plans","annual","monthly","kind","cost","month","paragraph","element1","element2","element3","element4","invoiced","checkin","readmore",
    "kind2","cost2","element5","element6","element7","element8","element9","element10","element11","invoiced2","kind3","words","paragraph2","communicate"];
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
        <link rel="stylesheet" href="./src/Components/Subs/subs.css">
        <section>

        <div class="plans">
        <h1>${this.plans}</h1>
        <div class="buttons"><button class="button1">${this.annual}</button>
        <button class="button2">${this.monthly}</button></div>
        </div>

        <div class="container">

        <div class="card">

        <div class="info">
        <p>${this.kind}</p>
        <h2>${this.cost}</h2>
        <p>${this.month}</p>
        <ul>
            <li>${this.element1}</li>
            <li${this.element2}></li>
            <li>${this.element3}</li>
            <li>${this.element4}</li>
        </ul>

        <div class="finish1">
        <p class="invoiced">${this.invoiced}</p>
        <button class="btn1">${this.checkin}</button>
        <button class="btn2">${this.readmore}</button>
        </div>
        </div>
        </div>


        <div class="card">

        <div class="info">
        <p>${this.kind2}</p>
        <h2>${this.cost2}</h2>
        <p>${this.month}</p>
        <p>${this.paragraph}</p>
        <ul>
            <li>${this.element5}</li>
            <li${this.element6}></li>
            <li>${this.element7}</li>
        </ul>

        <div class="finish2">
        <p class="invoiced">${this.invoiced2}</p>
        <button class="btn1">${this.checkin}</button>
        <button class="btn2">${this.readmore}</button>
        </div>
        </div>
        </div>


        <div class="card">

        <div class="info">
        <p>${this.kind3}</p>
        <h3>${this.words}</h3>
        <p>${this.paragraph2}</p>
        <ul>
            <li>${this.element8}</li>
            <li${this.element9}></li>
            <li>${this.element10}</li>
            <li>${this.element11}</li>
        </ul>
        </div>

        <div class="finish3">
        <button class="btn3">${this.communicate}</button>
        <button class="btn2">${this.readmore}</button>
        </div>
        </div>
        </div>

        </div>
        </section>
        `;
    }
}

customElements.define('subs-contain',SubsContainer);
export default SubsContainer;