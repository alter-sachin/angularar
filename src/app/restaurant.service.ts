import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpService} from './http.service';

@Injectable()
export class RestaurantService {

  getRestaurants(): Promise<any> {
    const url = environment.backendUrl + 'restaurants';
    return this.httpService.getRequest(url);
  }

  getRestaurant(id: number): Promise<any> {
    const url = environment.backendUrl + 'restaurants/' + id;
    return this.httpService.getRequest(url);
  }

  constructor(private httpService: HttpService) {
  }

}
