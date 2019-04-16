import {DeGrasso, TelePizza, PizzaFactory, PizzaMargerita} from "./AbstractFact"

export default function (){

    let pizzeria = new TelePizza();
    // let pizzeria = new DeGrasso();

    let pizza = zamowMargerite(pizzeria);

    console.log(pizza.nazwa());
}

function zamowMargerite(factory: PizzaFactory) : PizzaMargerita {
    return factory.stworzMargerite();
}