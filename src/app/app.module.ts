import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// System modules
import { HeroesModule } from './heroes/heroes.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    AppRoutingModule,
<<<<<<< HEAD
=======
    HeroesModule,
    SharedModule
>>>>>>> 8b84ced35eae95c4aaa19933eeb85fc2bebca261
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
