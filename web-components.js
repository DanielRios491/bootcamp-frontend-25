class CardComponent extends HTMLElement {
    static observedAttributes = ["color", "size"];

    constructor() {
        super();
    }

    connectedCallback() {
        console.log("Custom element added to page.");

        const textCard = document.createElement("h2");
        textCard.setAttribute("class", "text-card");
        const text = this.getAttribute("data-text");
        textCard.textContent = text;
        textCard.style.width = "fit-content";
        textCard.style.background = "red";
        textCard.style.margin = "0";
        textCard.style.width = "auto";
        textCard.style.padding = "1rem";
        textCard.style.textAlign = "center";
        textCard.style.color = "white";


        let imgUrl = "/default.jpg";

        const imgCard = document.createElement("img");
        imgCard.src = imgUrl;
        imgCard.style.width = "10rem";
        imgCard.style.borderRadius = "0.5rem";

        const name = document.createElement("h1");
        name.setAttribute("class", "text-name");
        name.style.color = "white";
        name.style.margin = "0";
        name.textContent = "Ash Ketchup";

        const body =document.createElement("div");
        body.style.display = "flex";
        body.style.flexDirection = "column";
        body.style.alignItems = "center";
        body.style.padding = "1rem";
        body.style.gap = "1rem";
        
        body.style.background = "black"
        body.appendChild(imgCard);
        body.appendChild(name)

        let logoUrl = "/logo.png";
        
        const logoJala = document.createElement("img");
        logoJala.src = logoUrl;
        logoJala.style.width = "13rem";

        this.appendChild(logoJala);
        this.appendChild(body);
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