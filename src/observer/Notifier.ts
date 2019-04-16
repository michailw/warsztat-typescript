import Observer from "./Observer";

export default interface Notifier {
    attach(observer: Observer): void;

    detach(observer: Observer): void;

    notify(): void;
}
