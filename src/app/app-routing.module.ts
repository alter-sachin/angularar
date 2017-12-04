import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IngredientComponent} from './ingredient/ingredient.component';
import {SoundCloudComponent} from './soundcloud/soundcloud.component';
import {ArComponent} from './ar/ar.component';
import {RestaurantComponent} from './restaurant/restaurant.component';
import {RestaurantDetailComponent} from './restaurantdetail/restaurantdetail.component';
import {DishDetailComponent} from './dishdetail/dishdetail.component';
import {HomeComponent} from './home/home.component';

const ROUTES: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'search', component: RestaurantComponent, pathMatch: 'full'},
  {path: 'restaurants/:id', component: RestaurantDetailComponent, pathMatch: 'full'},
  {path: 'dishes/:id', component: DishDetailComponent, pathMatch: 'full'},
  {path: 'ingredient', component: IngredientComponent, pathMatch: 'full'},
  {path: 'soundcloud', component: SoundCloudComponent, pathMatch: 'full'},
  {path: 'ar', component: ArComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
