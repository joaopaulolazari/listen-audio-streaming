import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import * as AudioActions from "../../app/audio/actions/audio";
import { Store } from "@ngrx/store";

/*
  Generated class for the AudioControlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

interface AppState {
    audio: any;
}

@Injectable()
export class AudioControlProvider {
    public audio: Observable<any>;
    public wifi: boolean = false;
    constructor(
        private store: Store<AppState>
    ) {
        let self = this;
        this.audio = this.store.select('audio');
        this.audio.subscribe((data) => {
            if (data.audio === '') {
                let audio = new Audio('http://stream.izap.com.br:443/98fm');
                self.store.dispatch(new AudioActions.Add(audio));
            }
        });
    }

    play() {
        let self = this;
        return new Promise((resolve, reject) => {
            this.audio.subscribe((data) => {
                if (data.audio !== '') {
                    data.audio.pause();
                }
                let audio = new Audio('http://stream.izap.com.br:443/98fm');
                self.store.dispatch(new AudioActions.Add(audio));
                self.audio = self.store.select('audio');
                self.audio.subscribe((data) => {
                    data.audio.play();
                    self.store.dispatch(new AudioActions.Play());
                });
                resolve();
            });
        })
    }

    pause() {
        let self = this;
        return new Promise((resolve) => {
            this.audio.subscribe((data) => {
                data.audio.pause();
                self.store.dispatch(new AudioActions.Pause());
                resolve();
            });
        });
    }

    isPlaying() {
        // TODO break in LOOP
        return new Promise((resolve) => {
            let check = true;
            this.audio.subscribe((data) => {
                check = ! data.isPlaying;
            });
            resolve(check);
        });
    }
}
