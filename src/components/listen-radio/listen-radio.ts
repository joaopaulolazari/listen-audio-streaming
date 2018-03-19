import { Component, Input } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {AudioControlProvider} from "../../providers/audio-control/audio-control";
import {ToastProvider} from "../../providers/toast/toast";

/**
 * Generated class for the ListenRadioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
interface AppState {
    audio: any;
}

@Component({
    selector: 'listen-radio',
    templateUrl: 'listen-radio.html',
    inputs: ['fontSize', 'color']
})
export class ListenRadioComponent {
    @Input()
    set fontSize(fontSize: String) {
        this.fontSizeComponent = fontSize;
    }
    set color(color: String) {
        this.colorComponent = color;
    }

    audio: Observable<any>;
    fontSizeComponent: String = '40px';
    colorComponent: String = 'dark';
    constructor(
        private store: Store<AppState>,
        private audioControlProvider: AudioControlProvider,
        private toastProvider: ToastProvider
    ) {
        this.audio = this.store.select('audio');
    }

    play() {
        this.audioControlProvider.play().then(() => {
            console.log('play OK');
        }, () => {
            this.toastProvider.showToastMessageWithCloseButton('Você não está conectado a uma rede Wifi.')
        });
    }

    pause() {
        this.audioControlProvider.pause().then(() => {
            console.log('pause OK');
        });
    }

    checkPlaying() {
        let check = true;
        this.audio.subscribe((data) => {
            check = ! data.isPlaying;
        });
        return check;
    }

    checkPause() {
        let check = true;
        this.audio.subscribe((data) => {
            check = data.isPlaying;
        });
        return check;
    }
}
