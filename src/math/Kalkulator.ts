export default class Kalkulator {
    private mnozenie(
        liczbaA: number,
        liczbaB: number
    ): number {
        return liczbaA * liczbaB;
    }

    potega(
        podstawa: number,
        wykladnik: number
    ): number {
        // return Math.pow(podstawa, wykladnik);
        if (wykladnik === 0) {
            return 1;
        }

        let wynik = podstawa;
        for (let i = 1; i < wykladnik; i++) {
            wynik = this.mnozenie(wynik, podstawa);
        }
        return wynik;
    }
}
