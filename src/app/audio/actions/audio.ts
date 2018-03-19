import { Action } from '@ngrx/store';

export enum AudioActionTypes {
    ADD = '[Audio] Add',
    PLAY = '[Audio] Play',
    PAUSE = '[Audio] Pause',
    RESET = '[Audio] Reset'
}

export class Add implements Action {
    readonly type = AudioActionTypes.ADD;

    constructor(public payload: object) {}
}

export class Play implements Action {
    readonly type = AudioActionTypes.PLAY;
}

export class Pause implements Action {
    readonly type = AudioActionTypes.PAUSE;
}

export class Reset implements Action {
    readonly type = AudioActionTypes.RESET;
}

export type AudioActions = Add | Reset | Play | Pause;
