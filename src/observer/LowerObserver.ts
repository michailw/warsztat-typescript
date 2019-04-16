import Observer from "./Observer";
import Notifier from "./Notifier";

export default class LowerObserver implements Observer {
    private counter: number = 0;

    public update(notifier: Notifier): void {
        if (++this.counter < 3) {
            console.log("LowerObserver - reakcja na event | counter: " + this.counter);
        }
    }
}
