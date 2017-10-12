import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FooditemComponent } from './fooditem/fooditem.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {IngredientService} from "./ingredient.service";
import {HttpModule} from "@angular/http";
import { GeodataComponent } from './geodata/geodata.component';
import { UserComponent } from './user/user.component';
import {UserService} from "./user.service";
import {GeodataService} from "./geodata.service";
import {FoodItemService} from "./fooditem.service";
import { DronearComponent } from './dronear/dronear.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestaurantComponent,
    FooditemComponent,
    IngredientComponent,
    GeodataComponent,
    UserComponent,
    DronearComponent
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
    FoodItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
