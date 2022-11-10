import { BaseComponent } from "./BaseComponent";

export class Component2 extends BaseComponent {
    public doC(): void {
        console.log('El componente 2 hace mover los limpia parabrisas.');
        this.mediator.notify(this, 'C');
    }

    public doD(): void {
        console.log('El componente 2 prende los direccionales externos.');
        this.mediator.notify(this, 'D');
    }
}