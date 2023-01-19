class NegotiationController {
    constructor() {
        const $ = document.querySelector.bind(document); // When the "querySelector" is called, the context of the "this" is the "NegotiationController" object, the "bind" associate the "document" object to the "this" of the function
        
        this._$inputDate = $("#date");
        this._$inputQuantity = $("#quantity");
        this._$inputValue = $("#value");
    }

    add(event) {
        event.preventDefault();

        const formatedDate = new Date(...this._$inputDate.value
            .split("-")
            .map((value, index) => index == 1 ? value - 1 : value)); // Decrement the month value because of the Index Array logic

        const negotiation = new Negotiation(formatedDate, this._$inputQuantity.value, this._$inputValue.value);

        console.log(negotiation);
    }
}

const negotiationController = new NegotiationController();