import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {Headers, Http} from "@angular/http";
import {GeoData} from "./_models/geodata";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GeodataService {

  getGeoDatas(): Promise<any> {
    return this.http.get(environment.backendUrl+ 'geodata').
    toPromise()
      .then(response => response.json() as any)
      .catch(this.handleError);
  }

  saveGeoData(geoData: GeoData): Promise<any> {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.backendUrl+ 'geodata', geoData, {headers: headers})
      .toPromise()
      .then(response => response.json as any)
      .catch(this.handleError);
  }

  private handleError(error: Error): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) { }

}
