class DateHelper {
    static textToDate(text) {
        if(!/\d{4}-\d{2}-\d{2}/.test(text)) throw new Error("Must be in the format: yyyy-mm-dd");

        return new Date(...text.split("-")
            .map((value, index) => index == 1 ? value - 1 : value));
    }

    static dateToText(date) {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
}