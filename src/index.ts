export class KevinsComponent extends HTMLElement {
    constructor() {
        super();        
    }
    connectedCallback() {
        this.innerHTML = '<div>It works!</div>';
    }
}
