import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {IngredientComponent} from './ingredient/ingredient.component';

const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ingredient', component: IngredientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
