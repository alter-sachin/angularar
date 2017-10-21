import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Ingredient} from './_models/ingredient';
import {environment} from '../environments/environment';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class IngredientService {

  getIngredients(): Promise<any> {
    return this.http.get(environment.backendUrl + 'ingredient').toPromise()
      .then(response => response.json() as any)
      .catch(this.handleError);
  }

  saveIngredient(ingredient: Ingredient): Promise<any> {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.backendUrl + 'ingredient', ingredient, {headers: headers})
      .toPromise()
      .then(response => response.json as any)
      .catch(this.handleError);
  }

  private handleError(error: Error): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) {
  }

}
