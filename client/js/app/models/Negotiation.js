class Negotiation {
    constructor(date, quantity, value) {
        this._date = date;
        this._quantity = quantity;
        this._value = value;

        Object.freeze(this);
    }

    // GETTERS AND SETTERS
    get date() {
        return new Date(this._date.getTime());
    }
    
    get quantity() {
        return this._quantity;
    }

    get value() {
        return this._value;
    }

    volume() {
        return this._quantity * this._value;
    }
}