import Standard from "./Standard";
import BadClass from "./BadClass";
import Adapter from "./Adapter";

export default function() {
    function clientCode(target: Standard) {
        return target.standardMethod();
    }

    const badClassInstance = new BadClass();
    console.log("BadClass ma bardzo dziwny interfejs: " + badClassInstance.strangeFunction());

    const adapter = new Adapter(badClassInstance);
    console.log(
        clientCode(adapter)
    );
}
