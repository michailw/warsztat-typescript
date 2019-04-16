import Notifier from "./Notifier";

export default interface Observer {
    update(subject: Notifier): void;
}
