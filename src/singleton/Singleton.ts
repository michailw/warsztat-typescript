/**
 * Klasa Singleton definiuje metodę `getInstance` która pozwala
 * na dostęp do unikalnej i jedynej instancji tej klasy.
 */
export default class Singleton {
    private static instance: Singleton;

    /**
     * Konstruktor klas typu singleton powinien być zawsze prywatny,
     * aby nie dopuścić do utworzenia więcej niż jednej instancji klasy
     */
    private constructor() { }

    /**
     * Metoda statyczna kontroluje dostęp do instancji klasy singleton
     */
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    /**
     * Reszta rzeczy, którymi ma się zająć klasa
     */
    public someBusinessLogic() {
        // ...
    }
}
