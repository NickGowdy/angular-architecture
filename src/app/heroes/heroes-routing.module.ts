import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './pages/heroes/heroes.component';

const routes: Routes = [
    { path: 'heroes', component: HeroesComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule],
    exports: [RouterModule]
})
export class HeroesRoutingModule { }

export const routingComponents = [ HeroesComponent ];
