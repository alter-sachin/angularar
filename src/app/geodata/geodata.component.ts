import { Component, OnInit } from '@angular/core';
import {GeoData} from "../_models/geodata";
import {GeodataService} from "../geodata.service";

@Component({
  selector: 'app-geodata',
  templateUrl: './geodata.component.html',
  styleUrls: ['./geodata.component.css']
})
export class GeoDataComponent implements OnInit {

  error = '';
  newGeoData: GeoData = new GeoData();

  constructor(private geoDataService: GeodataService) { }

  ngOnInit() {
  }

  submit() {
    this.geoDataService.saveGeoData(this.newGeoData).then(response => {
      console.log(response);
    });
  }

}
