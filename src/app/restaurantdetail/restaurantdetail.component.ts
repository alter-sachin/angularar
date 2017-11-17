import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RestaurantService} from '../restaurant.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Restaurant} from '../_models/restaurant';
import {Dish} from '../_models/dish';

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
  activeDish: Dish;
  modelUrl = 'https://s3.ap-south-1.amazonaws.com/proghackersarmodels/restaurant_sample_donut_v1/scene.gltf';

  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      console.log('I am here' + 'params[id]' + params['id']);
      if (params['id'] !== undefined) {
        const id = params['id'];
        this.navigated = true;
        this.restaurantService.getRestaurant(id)
          .then(restaurant => {
              this.restaurant = restaurant;
              console.log(restaurant);
              this.activeDish = this.restaurant.menu[0];
              console.log(this.activeDish);
            }
          );
      } else {
        this.navigated = false;
        this.restaurant = new Restaurant();
      }
    });
  }

  goToDish(dish: Dish): void {
    const link = ['/dishes', dish.id];
    this.router.navigate(link);
  }

  goBack(): void {
    if (this.navigated) {
      window.history.back();
    }
  }

  loadDish(dish: Dish): void {
    this.activeDish = dish;
    const sceneAl = document.querySelector('a-scene');
    const entityAl = document.querySelector('a-entity');
    entityAl.setAttribute('gltf-model-next', 'src: url(' + dish.modelLocation + ');');
  }

}
