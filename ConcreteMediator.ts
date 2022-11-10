import {IMediator} from './IMediator';
import { Component1 } from './Component1';
import { Component2 } from './Component2';

export class ConcreteMediator implements IMediator {
    private component1: Component1;

    private component2: Component2;

    constructor(c1: Component1, c2: Component2) {
        this.component1 = c1;
        this.component1.setMediator(this);
        this.component2 = c2;
        this.component2.setMediator(this);
    }

    public notify(sender: object, event: string): void {
        if (event === 'A') {
            console.log('El mediador reacciona a hechar agua en el parabrisas y activa las siguientes operaciones:');
            this.component2.doC();
        }

        if (event === 'D') {
            console.log('El mediador reacciona a direccionales en el externos y activa las siguientes operaciones:');
            this.component1.doB();
        }
    }
}