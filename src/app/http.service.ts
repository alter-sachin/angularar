import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class HttpService {

  getRequest(url: string): Promise<any> {
    return this.http.get(url).toPromise()
      .then(response => response.json() as any)
      .catch(this.handleError);
  }

  private handleError(error: Error): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) {
  }

}
