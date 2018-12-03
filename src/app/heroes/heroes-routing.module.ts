import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './pages/heroes/heroes.component';

  /* we need to do RouterModule.forRoot(routes) so our roots are accessible
        in our entire app.
        We need to export RouterModule so it's accessible in app.module.ts
    */
    //
const routes: Routes = [
    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
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
