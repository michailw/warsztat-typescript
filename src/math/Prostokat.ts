import Czworobok from "./Czworobok";

export default class Prostokat extends Czworobok{
    constructor(
        bokA: number,
        bokB: number
    ) {
        super(bokA, bokB, bokA, bokB);
    }

    liczPole(): number {
        const boki = this.getBoki();
        return boki[0] * boki[1];
    }
}
