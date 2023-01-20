class View {
    constructor(reference) {
        this._reference = reference;
    }

    template() {
        throw new Error("The template method must be implemented");
    }

    update(model) {
        this._reference.innerHTML = this.template(model);
    }
}