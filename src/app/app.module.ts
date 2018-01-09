import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RestaurantComponent} from './restaurant/restaurant.component';
import {FooditemComponent} from './fooditem/fooditem.component';
import {IngredientComponent} from './ingredient/ingredient.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {IngredientService} from './ingredient.service';
import {HttpModule} from '@angular/http';
import {UserComponent} from './user/user.component';
import {UserService} from './user.service';
import {GeodataService} from './geodata.service';
import {FoodItemService} from './fooditem.service';
import {ArComponent} from './ar/ar.component';
import {SoundCloudComponent} from './soundcloud/soundcloud.component';
import {YoutubeComponent} from './youtube/youtube.component';
import {AuthGuard} from './_guards/auth.guard';
import {AuthService} from './auth.service';
import {SoundCloudService} from './soundcloud.service';
import {RestaurantDetailComponent} from './restaurantdetail/restaurantdetail.component';
import {RestaurantService} from './restaurant.service';
import {HttpService} from './http.service';
import {DishDetailComponent} from './dishdetail/dishdetail.component';
import {IngredientdetailComponent} from './ingredientdetail/ingredientdetail.component';
import {DishService} from "./dish.service";
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestaurantComponent,
    FooditemComponent,
    IngredientComponent,
    UserComponent,
    ArComponent,
    SoundCloudComponent,
    YoutubeComponent,
    RestaurantDetailComponent,
    DishDetailComponent,
    IngredientdetailComponent,
    CartComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    IngredientService,
    UserService,
    GeodataService,
    FoodItemService,
    AuthGuard,
    DishService,
    AuthService,
    SoundCloudService,
    RestaurantService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
