class CardComponent extends HTMLElement {
    static observedAttributes = ["color", "size"];

    constructor() {
        super();
    }

    connectedCallback() {
        console.log("Custom element added to page.");

        const textCard = document.createElement("h1");
        textCard.setAttribute("class", "text-card");
        const text = this.getAttribute("data-text");
        textCard.textContent = text;

        let imgUrl = "/default.jpg";

        const imgCard = document.createElement("img");
        imgCard.src = imgUrl;
        imgCard.style.width = "10rem";

        const body =document.createElement("div");
        body.style.display = "flex";
        body.style.flexDirection = "column";
        body.appendChild(imgCard);

        let logoUrl = "/logo.png";
        
        const logoJala = document.createElement("img");
        logoJala.src = logoUrl;
        logoJala.style.width = "10rem";

        this.appendChild(logoJala);
        this.appendChild(imgCard);
        this.appendChild(textCard);
        this.style.border = "solid 0.3rem";
        this.style.display = "flex";
        this.style.flexDirection = "column";
        this.style.width = "fit-content";
    }

    disconnectedCallback() {
        console.log("Custom element removed from page.");
    }

    connectedMoveCallback() {
        console.log("Custom element moved with moveBefore()");
    }

    adoptedCallback() {
        console.log("Custom element moved to new page.");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed.`);
    }
}

customElements.define('card-component', CardComponent);