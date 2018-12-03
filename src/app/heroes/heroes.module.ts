import { NgModule } from '@angular/core';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './pages/heroes/heroes.component';

@NgModule({
    declarations: [
        HeroesComponent
    ],
    imports: [
        HeroesRoutingModule
      ],
})

export class HeroesModule { }

