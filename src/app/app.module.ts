import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing Modules
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';

// System modules
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
