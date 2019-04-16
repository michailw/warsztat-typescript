import Observer from "./Observer";
import Notifier from "./Notifier";

export default class EdgeObserver implements Observer {
    private counter: number = 0;

    public update(notifier: Notifier): void {
        if (this.counter === 0 || this.counter >= 2) {
            console.log("EdgeObserver - reakcja na event | counter: " + this.counter);
        }
        this.counter++;
    }
}
