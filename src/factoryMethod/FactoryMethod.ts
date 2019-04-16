/**
 * Głównym celem tej klasy jest dostarczenie abstrakcyjnej metody, 
 * którą będą musiały zaimplementować wszystkie klasy dziedziczące,
 * będące konkretnymi implementacjami.
 */
export abstract class Creator {
  
    /** tu definiujemy abstrakcyjną metodę, która zostanie uzupełniona przez klasy dziedziczące */
    public abstract stworz(): Product;

    /**
     * Oprócz abstrakcyjnej metody wytwarzającej możemy też tworzyć metody ogólne, dostępne potem we wszystkich klasach dziedziczących od Creatora.
     */
    public metodaKreatora(): string {
        // jesteśmy wewnątrz klasy rozszerzającej creatora, tak więc powinniśmy mieć dostęp do implementacji stwórz().
        const product = this.stworz();
        return ` Wykonuję operację na : ${product.getProductName()}`;
        }
}

/**
 * Rozszerzając klasę abstrakcyjną musimy dostarczyć implementację metody stwórz()
 */
export class ConcreteCreator1 extends Creator {
    /**
     * Jako typ zwracany nadal wskazujemy interfejs!
     */
    public stworz(): Product {
        return new ConcreteProduct1();
    }
}

/**
 * Powtórka z Creatora1
 */
export class ConcreteCreator2 extends Creator {
    public stworz(): Product {
        return new ConcreteProduct2();
    }
}

/**
 * The Product interface declares the operations that all concrete products must
 * implement.
 */
interface Product {
    getProductName(): string;
}

/**
 * Concrete Products provide various implementations of the Product interface.
 */
class ConcreteProduct1 implements Product {
    public getProductName(): string {
        return 'Produkt 1';
    }
}

class ConcreteProduct2 implements Product {
    public getProductName(): string {
        return 'Produkt 2';
    }
}