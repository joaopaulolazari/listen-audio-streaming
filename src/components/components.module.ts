import { NgModule } from '@angular/core';
import { ListenRadioComponent } from './listen-radio/listen-radio';
import {IonicModule} from "ionic-angular";
@NgModule({
	declarations: [ListenRadioComponent],
	imports: [
        IonicModule
    ],
	exports: [ListenRadioComponent]
})
export class ComponentsModule {}
