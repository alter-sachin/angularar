import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpService} from './http.service';

@Injectable()
export class SoundCloudService {

  search(query: String): Promise<any> {
    return this.httpService.getRequest(environment.backendUrl + 'soundcloud/search' + '?q=' + query);
  }

  download(id: number): Promise<any> {
    return this.httpService.getRequest(environment.backendUrl + 'soundcloud/download' + '?id=' + id);
  }

  constructor(private httpService: HttpService) {
  }

}
