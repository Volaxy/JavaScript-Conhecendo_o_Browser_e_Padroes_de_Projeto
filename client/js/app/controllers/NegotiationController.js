class NegotiationController {
    constructor() {
        const $ = document.querySelector.bind(document);
        
        this._$inputDate = $("#date");
        this._$inputQuantity = $("#quantity");
        this._$inputValue = $("#value");

        this._negotiationsList = new NegotiationsList();
    }

    add(event) {
        event.preventDefault();

        const negotiation = new Negotiation(DateHelper.textToDate(this._$inputDate.value), this._$inputQuantity.value, this._$inputValue.value);
        this._negotiationsList.addNegotiation(negotiation);

        this._clearForm();

        console.log(this._negotiationsList.negotiations);
    }

    _clearForm() {
        this._$inputDate.value = "";
        this._$inputQuantity.value = 1;
        this._$inputValue.value = 0.0;

        this._$inputDate.focus();
    }
}

const negotiationController = new NegotiationController();