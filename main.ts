import { Component1 } from "./Component1";
import { Component2 } from "./Component2";
import { ConcreteMediator } from "./ConcreteMediator";

const c1 = new Component1();
const c2 = new Component2();
new ConcreteMediator(c1, c2);

console.log('El cliente activa la operación A.');
c1.doA();

console.log('');
console.log('El cliente activa la operación D.');
c2.doD();