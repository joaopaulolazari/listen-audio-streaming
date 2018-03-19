import {AudioActions, AudioActionTypes} from "../actions/audio";

export const ADD = 'ADD';
export const RESET = 'RESET';
export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';

export function audioReducer(state: any = {audio: '', isPlaying: false}, action: AudioActions) {
    switch (action.type) {
        case AudioActionTypes.ADD:
            state.audio = action.payload;
            return state;

        case AudioActionTypes.PLAY:
            state.isPlaying = true;
            return state;

        case AudioActionTypes.PAUSE:
            state.isPlaying = false;
            return state;

        case AudioActionTypes.RESET:
            return {audio: '', isPlaying: false};

        default:
            return state;
    }
}
