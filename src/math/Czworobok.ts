import Figura from "./FiguraInterface";

export default class Czworobok implements Figura {
    private boki: Array<number>;

    constructor(
        bokA: number,
        bokB: number,
        bokC: number,
        bokD: number
    ) {
        this.boki = [
            bokA,
            bokB,
            bokC,
            bokD
        ];
    }

    liczPole(): number {
        return 0;
    }

    liczObwod(): number {
        let obwod: number = 0;
        for (let bok of this.boki) {
            obwod += bok;
        }
        return obwod;
    }

    protected getBoki(): Array<number> {
        return this.boki;
    }
}
