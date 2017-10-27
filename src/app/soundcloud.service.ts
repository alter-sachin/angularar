import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../environments/environment';

@Injectable()
export class SoundCloudService {

  search(query: String): Promise<any> {
    return this.http.get(environment.backendUrl + 'soundcloud/search' + '?q=' + query).toPromise()
      .then(response => response.json() as any)
      .catch(this.handleError);
  }

  download(id: number): Promise<any> {
    return this.http.get(environment.backendUrl + 'soundcloud/download' + '?id=' + id).toPromise()
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
