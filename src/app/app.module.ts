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
import {GeodataComponent} from './geodata/geodata.component';
import {UserComponent} from './user/user.component';
import {UserService} from './user.service';
import {GeodataService} from './geodata.service';
import {FoodItemService} from './fooditem.service';
import { ArComponent } from './ar/ar.component';
import { SoundcloudComponent } from './soundcloud/soundcloud.component';
import { YoutubeComponent } from './youtube/youtube.component';
import {AuthGuard} from "./_guards/auth.guard";
import {AuthService} from "./auth.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestaurantComponent,
    FooditemComponent,
    IngredientComponent,
    GeodataComponent,
    UserComponent,
    ArComponent,
    SoundcloudComponent,
    YoutubeComponent
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
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
