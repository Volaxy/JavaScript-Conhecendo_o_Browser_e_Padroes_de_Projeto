class Negotiation {
    constructor(date, quantity, value) {
        this._date = date;
        this._quantity = quantity;
        this._value = value;

        Object.freeze(this); // It onlye shallow freeze
    }

    // GETTERS AND SETTERS
    // When the property has a "get" method, assigning a value directly by the object such as "n1.date" is invalid
    get date() {
        return new Date(this._date.getTime());
    }
    
    get quantity() {
        return this._quantity;
    }

    get value() {
        return this._value;
    }

    // Functions inside objects are called "methods"
    volume() {
        return this._quantity * this._value;
    }
}

const n1 = new Negotiation(new Date(), 2, 1000);

console.log(n1.volume());
console.log(n1.date);
console.log(n1.quantity);
console.log(n1.value);