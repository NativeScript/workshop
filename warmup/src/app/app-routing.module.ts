import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

// Lesson 1
import { ProfileComponent } from './profile/profile.component';

// Lesson 2
import { ColorComponent, BlueComponent, RedComponent, RGBComponent } from './color'

// Lesson 3
import { ServiceTestComponent } from './service-test/service-test.component';

import { CocktailsComponent } from './cocktail/cocktails/cocktails.component';
import { RecipeComponent } from './cocktail/recipe/recipe.component';

// Lesson 4
import { WizardProfileComponent } from './plugins/wizard-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  // { path: '', redirectTo: '/color', pathMatch: 'full' },
  // { path: '', redirectTo: '/service-test', pathMatch: 'full' },
  // { path: '', redirectTo: '/drinks', pathMatch: 'full' },
  // { path: '', redirectTo: '/plugins', pathMatch: 'full' },

    // Lesson 1
  { path: 'profile', component: ProfileComponent },

  // Lesson 2
  { path: 'color', children: [
    { path: '', component: ColorComponent },
    { path: 'blue', component: BlueComponent },
    //.. add red and rgb routes here
    
  ]},

  // Lesson 3
  { path: 'service-test', component: ServiceTestComponent },
  { path: 'drinks', children: [
    { path: '', component: CocktailsComponent },
    { path: 'recipe/:id', component: RecipeComponent },
  ]},

  // Lesson 4
  { path: 'plugins', component: WizardProfileComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
