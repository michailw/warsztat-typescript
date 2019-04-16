import Standard from "./Standard";
import BadClass from "./BadClass";

export default class Adapter implements Standard {
    private badInstance: BadClass;

    constructor(badInstance: BadClass) {
        this.badInstance = badInstance;
    }

    public standardMethod(): string {
        return this.badInstance.strangeFunction().split('').reverse().join('');
    }
}
