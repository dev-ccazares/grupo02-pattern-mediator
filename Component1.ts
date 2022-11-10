import { BaseComponent } from "./BaseComponent";

export class Component1 extends BaseComponent {
    public doA(): void {
        console.log('El componente 1 hecha el agua en el parabrisas.');
        this.mediator.notify(this, 'A');
    }

    public doB(): void {
        console.log('El componente 1 prende direccionales en el tablero.');
        this.mediator.notify(this, 'B');
    }
}