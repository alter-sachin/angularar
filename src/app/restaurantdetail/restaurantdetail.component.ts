import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RestaurantService} from '../restaurant.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Restaurant} from '../_models/restaurant';

@Component({
  selector: 'app-restaurantdetail',
  templateUrl: './restaurantdetail.component.html',
  styleUrls: ['./restaurantDetail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  @Input() restaurant: Restaurant;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.navigated = true;
        this.restaurantService.getRestaurant(id)
          .then(restaurant => this.restaurant = restaurant);
      } else {
        this.navigated = false;
        this.restaurant = new Restaurant();
      }
    });
  }

  goBack(): void {
    if (this.navigated) {
      window.history.back();
    }
  }

}
