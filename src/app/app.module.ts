import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApuestaComponent } from './apuesta/apuesta.component';

import { OroService } from './oro.service';

@NgModule({
  declarations: [
    AppComponent,
    ApuestaComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    OroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
