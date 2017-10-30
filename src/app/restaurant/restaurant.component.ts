import {Component, OnInit} from '@angular/core';
import {RestaurantService} from '../restaurant.service';
import {Restaurant} from '../_models/restaurant';
import {Router} from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  public restaurants: Restaurant[] = [];

  public selectedId: number;

  constructor(private restaurantService: RestaurantService,
              private router: Router) {
  }

  ngOnInit() {
    this.restaurantService.getRestaurants().then(response => {
      console.log(response);
      this.restaurants = <Array<Restaurant>>response;
    });
  }

  goToRestaurant(): void {
    console.log(this.selectedId);
    const link = ['/restaurants', this.selectedId];
    this.router.navigate(link);
  }

}
