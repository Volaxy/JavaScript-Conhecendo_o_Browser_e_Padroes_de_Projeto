class NegotiationsView extends View {
    constructor(reference) {
        super(reference);
    }
    
    template(negotiationsList) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>QUANTITY</th>
                        <th>VALUE</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                    ${
                        negotiationsList.negotiations.map(negotiation => `
                            <tr>
                                <td>${DateHelper.dateToText(negotiation.date)}</td>
                                <td>${negotiation.quantity}</td>
                                <td>${negotiation.value}</td>
                                <td>${negotiation.volume()}</td>
                            </tr>
                        `).join("")
                    }
                </tbody>

                <tfoot>
                    <td colspan="3"></td>
                    <td>${negotiationsList.negotiations.reduce((total, negotiation) => total + negotiation.volume(), 0)}</td>
                </tfoot>
            </table>
        `;
    }
}