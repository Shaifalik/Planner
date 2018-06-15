import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Location } from '../party-pojo/Location';

@Injectable()
export class LocationPageService {
  private headers = new Headers({ 'Content-Type': 'application/text' });

  constructor(private _http: Http) { }

  getLocations(): Observable<Location[]> {
    return this._http
      .get('../../assets/APIS/Location.json')
      .map((response: Response) => <Location[]>response.json());
  }

  post(url: string, model: any): Observable<any> {
    let formData: FormData = new FormData();
    formData.append('id', model.id);
    formData.append('applicationName', model.applicationName);
    return this._http.post(url, formData)
      .map((response: Response) => {
        return response;
      });
  }

  getLocationDetails() {
    return this._http.get('http://localhost:18080/hello').map((response: Response) => response.text());
  }

  postLocationList(model: Array<Location>) {
    return this._http.post('http://localhost:18080/setLocationsList', model).map((response: Response) => response.text());
  }

}
