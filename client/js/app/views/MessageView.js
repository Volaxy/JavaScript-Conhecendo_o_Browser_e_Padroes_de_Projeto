class MessageView extends View {
    constructor(reference) {
        super(reference);
    }

    template(message) {
        return message.text ? `<p class="alert alert-info">${message.text}</p>` : "<p></p>";
    }
}