export class Car {

    public tires : Tires;
    public engine : Engine;


    /** trudne do pracowania z - komponenty są zapisane wewnątrz */
    // constructor(){
    //     this.tires = new SportTires();
    //     this.engine = new SportEngine();
    // }

    /**
     * Przy pracy z odpowiednim DI frameworkiem mozemy skonfigurowac kod tak, że parametry 
     * konstruktora zostaną `wstrzyknięte` np. - `@inject tires, @inject engine`
     * to z jakiej implementacji mają być wstrzykiwane, definiujemy zależnie od frameworka
     * 
     */
    constructor(tires: Tires, engine: Engine){
        this.tires = tires;
        this.engine = engine;
    }


}

interface Tires {
    name(): string
}

export class SportTires implements Tires {
    name(){return "sport";}
}
export class TerrainTires implements Tires {
    name(){return "terrain";}
}

interface Engine {
    name(): string
}

export class SportEngine implements Engine {
    name(){return "sport";}
}
export class EconomicEngine implements Engine {
    name(){return "economic";}
}