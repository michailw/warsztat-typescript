import Notifier from "./Notifier";
import Observer from "./Observer";

export default class StateNotifier implements Notifier {
    public state: number = 0;

    private observers: Observer[] = [];

    /**
     * The subscription management methods.
     */
    public attach(observer: Observer): void {
        console.log('StateNotifier: dołączyłem obserwatora');
        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        this.observers.splice(observerIndex, 1);
        console.log('StateNotifier: odłączyłem obserwatora');
    }

    public notify(): void {
        console.log('StateNotifier: powiadamiam obserwatorów...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    public someBusinessLogic(): void {
        console.log('\nStateNotifier: przeliczam swój stan.');
        this.state = Math.floor(Math.random() * (10 + 1));

        console.log(`StateNotifier: Mój stan zmienił się na liczbę: ${this.state}`);
        this.notify();
    }
}
