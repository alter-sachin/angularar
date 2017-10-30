import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DishService} from '../dish.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Dish} from '../_models/dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishDetailComponent implements OnInit {

  @Input() dish: Dish;
  @Output() close = new EventEmitter();
  error: any;

  constructor(private dishService: DishService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      const id = +params['id'];
      this.dishService.getDish(id)
        .then(dish => this.dish = dish);
    });
  }

}
