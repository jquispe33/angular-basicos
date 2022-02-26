import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


//Tarea
//Crear un modulo llamado ContadorModule
// declaraciones, exportaciones
import { ContadorModules } from './contador/contador.module';
import { HeroesModules } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HeroesModules,
    ContadorModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
