class cardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});

    }

    build() {}    
    
    styles() {}
}

customElements.define('card-news', cardNews);