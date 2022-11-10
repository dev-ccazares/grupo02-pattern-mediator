import { BaseComponent } from "./BaseComponent";

export class Component1 extends BaseComponent {
    public doA(): void {
        console.log('El componente 1 hace A.');
        this.mediator.notify(this, 'A');
    }

    public doB(): void {
        console.log('El componente 1 hace B.');
        this.mediator.notify(this, 'B');
    }
}