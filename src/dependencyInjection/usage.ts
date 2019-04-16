import { Car, SportEngine, EconomicEngine, SportTires } from "./DependencyInjection";

export default function(){

    // let c = new Car();
    var c = new Car(new SportTires(), new EconomicEngine());

    console.log(`Car engine is : ${c.engine.name()} and its tires are ${c.tires.name()}`)

}