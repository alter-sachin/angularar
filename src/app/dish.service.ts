import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {environment} from '../environments/environment';

@Injectable()
export class DishService {

  getDish(id: number): Promise<any> {
    const url = environment.backendUrl + 'dishes/' + id;
    return this.httpService.getRequest(url);
  }

  constructor(private httpService: HttpService) {
  }

}
