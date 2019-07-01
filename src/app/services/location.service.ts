import { Injectable } from '@angular/core';

export const LOCATIONS : string = "locations";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  locations : string[] = [];

  addLocation(zipcode : string){
    this.locations.push(zipcode);
  }

  removeLocation(zipcode : string){
    let index = this.locations.indexOf(zipcode);
    if (index !== -1){
      this.locations.splice(index, 1);
    }
  }

  getLocations() : string[]{
    return this.locations;
  }
}
