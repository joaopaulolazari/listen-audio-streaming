import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AudioControlProvider } from '../providers/audio-control/audio-control';
import { ToastProvider } from '../providers/toast/toast';
import { audioReducer } from "./audio/reducers/audio";
import {StoreModule} from "@ngrx/store";
import {ComponentsModule} from "../components/components.module";

@NgModule({
    declarations: [
        MyApp,
        HomePage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        ComponentsModule,
        StoreModule.forRoot({
            audio: audioReducer,
        }),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {
            provide: ErrorHandler,
            useClass: IonicErrorHandler
        },
        AudioControlProvider,
        ToastProvider
    ]
})
export class AppModule {}
