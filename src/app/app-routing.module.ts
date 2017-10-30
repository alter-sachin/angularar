import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IngredientComponent} from './ingredient/ingredient.component';
import {SoundCloudComponent} from './soundcloud/soundcloud.component';
import {ArComponent} from './ar/ar.component';
import {RestaurantComponent} from './restaurant/restaurant.component';
import {RestaurantDetailComponent} from './restaurantdetail/restaurantdetail.component';
import {DishDetailComponent} from './dishdetail/dishdetail.component';

const ROUTES: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', component: RestaurantComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent},
  {path: 'dishes/:id', component: DishDetailComponent},
  {path: 'ingredient', component: IngredientComponent},
  {path: 'soundcloud', component: SoundCloudComponent},
  {path: 'ar', component: ArComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
