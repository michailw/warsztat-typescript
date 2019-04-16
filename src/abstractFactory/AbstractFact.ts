/**
 * Nasza fabryka definiuje zbior zwracanych produktow
 */
export interface PizzaFactory {
    stworzMargerite(): PizzaMargerita;
    stworzSerowa(): PizzaSerowa;
}

/**
 * Implementacje fabryki implementują konkretne obiekty zwracane (tu mamy do czynienia z wzorcem factoryMethod)
 */
export class DeGrasso implements PizzaFactory {
    public stworzMargerite(): PizzaMargerita {
        return new DeGrassoMargerita();
    }

    public stworzSerowa(): PizzaSerowa {
        return new DeGrassoSerowa();
    }
}

/**
 * To samo dla drugiej z fabryk
 */
export class TelePizza implements PizzaFactory {
    public stworzMargerite(): PizzaMargerita {
        return new TelePizzaMargerita();
    }

    public stworzSerowa(): PizzaSerowa {
        return new TelePizzaSerowa();
    }
}

/**
 * Zgodnie z factory method musimy dostarczyc interfejs
 */
export interface PizzaMargerita {
    nazwa(): string
}

export class DeGrassoMargerita implements PizzaMargerita {

    nazwa() : string {
        return "Margerita w Degrasso";
    }
}

class TelePizzaMargerita implements PizzaMargerita {
    nazwa(): string{
        return" Margerita w TelePizzy";
    }
}


export interface PizzaSerowa {
    nazwa(): string
}

export class DeGrassoSerowa implements PizzaSerowa {

    nazwa() : string {
        return "Serowa w Degrasso";
    }

}

export class TelePizzaSerowa implements PizzaSerowa {

    nazwa() : string {
        return "Serowa w Telepizzy";
    }
}