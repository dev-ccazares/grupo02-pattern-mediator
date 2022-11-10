import { BaseComponent } from "./BaseComponent";

export class Component2 extends BaseComponent {
    public doC(): void {
        console.log('El componente 2 hace C.');
        this.mediator.notify(this, 'C');
    }

    public doD(): void {
        console.log('El componente 2 hace D.');
        this.mediator.notify(this, 'D');
    }
}