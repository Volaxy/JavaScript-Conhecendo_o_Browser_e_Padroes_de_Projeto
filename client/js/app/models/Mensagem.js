class Message {
    // The "=" set a default value if aren't value in the parameter
    constructor(text = "") {
        this._text = text;
    }

    get text() {
        return this._text;
    }

    set text(text) {
        this._text = text;
    }
}