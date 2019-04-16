import { Creator, ConcreteCreator1, ConcreteCreator2 } from "./FactoryMethod"

export default function (){
    var creator = new ConcreteCreator1();
    // var creator = new ConcreteCreator2();

    var product = creator.stworz();
    console.log(product.getProductName());

    // console.log(creator.metodaKreatora());
}