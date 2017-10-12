export class GeoData {
  id: String;
  description: String;
  createDate: Date;
  geoitems: [{
    title: String;
    description: String;
    position: {
      lat: Number;
      lng: Number;
    }
  }]
}
