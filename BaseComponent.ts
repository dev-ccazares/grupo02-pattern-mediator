import {IMediator} from './IMediator';

export class BaseComponent {
    protected mediator: IMediator;

    constructor(mediator?: IMediator) {
        this.mediator = mediator!;
    }

    public setMediator(mediator: IMediator): void {
        this.mediator = mediator;
    }
}