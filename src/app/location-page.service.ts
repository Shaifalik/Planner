import { Injectable } from '@angular/core';
import {Location} from './location';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LocationPageService {
  private locationList: Array<Location>;

  constructor(private _http: Http) { }

  getLocations(): Observable<Location[]> {
    return this._http
    .get('../../assets/APIS/Location.json')
    .map((response: Response) => <Location[]> response.json());
  }

  post(url: string, model: any): Observable <any> {
    let formData: FormData = new FormData();
    formData.append('id', model.id);
    formData.append('applicationName', model.applicationName);
    return this._http.post(url, formData)
        .map((response: Response) => {
            return response;
        });
}

}
