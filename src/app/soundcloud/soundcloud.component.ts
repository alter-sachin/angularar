import {Component, OnInit} from '@angular/core';
import {SoundCloudService} from '../soundcloud.service';
import {Track} from '../_models/track';

@Component({
  selector: 'app-soundcloud',
  templateUrl: './soundcloud.component.html',
  styleUrls: ['./soundcloud.component.css']
})
export class SoundcloudComponent implements OnInit {

  error = '';
  query = '';
  public searchedTracks: Track[] = [];

  constructor(private soundcloudService: SoundCloudService) {
  }

  search() {
    this.searchedTracks = [];
    this.soundcloudService.search(this.query).then(response => {
      console.log(response);
      this.searchedTracks = <Array<Track>>response;
    });
  }

  download(track: Track) {
    this.soundcloudService.download(track.id).then(response => {
      console.log(response);

    });
  }

  ngOnInit() {
  }

}
