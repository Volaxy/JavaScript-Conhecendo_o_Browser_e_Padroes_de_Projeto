class NegotiationsList {
    constructor() {
        this._negotiations = [];
    }

    addNegotiation(negotiation) {
        this._negotiations.push(negotiation);
    }

    get negotiations() {
        return this._negotiations;
    }
}