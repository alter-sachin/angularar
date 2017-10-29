import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IngredientComponent} from './ingredient/ingredient.component';
import {SoundCloudComponent} from './soundcloud/soundcloud.component';
import {ArComponent} from './ar/ar.component';
import {RestaurantComponent} from './restaurant/restaurant.component';
import {RestaurantDetailComponent} from './restaurantdetail/restaurantdetail.component';
import {HomeComponent} from './home/home.component';

const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', component: RestaurantComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent},
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
