export default class Output {
    private data: Array<string> = [];

    push(message: string) {
        this.data.push(message);
    }

    flush() {
        const data = this.data.join("<br>");
        this.data.length = 0;
        return data;
    }
}
