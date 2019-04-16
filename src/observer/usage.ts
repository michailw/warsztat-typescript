import StateNotifier from "./StateNotifier";
import LowerObserver from "./LowerObserver";
import EdgeObserver from "./EdgeObserver";

export default function() {
    const notifier = new StateNotifier();

    const lowerObserver = new LowerObserver();
    notifier.attach(lowerObserver);

    const edgeObserver = new EdgeObserver();
    notifier.attach(edgeObserver);

    notifier.someBusinessLogic();
    notifier.someBusinessLogic();

    notifier.detach(edgeObserver);

    notifier.someBusinessLogic();
}
