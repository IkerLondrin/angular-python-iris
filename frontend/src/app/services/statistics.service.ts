import {Injectable} from '@angular/core';
import { map } from 'rxjs/operators';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

const SERVER_URL: string = 'api/';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: Http) { }

  public getDataIris(): Observable<any> {
    return this.http.get(`${SERVER_URL}visualizacionIris`).
    pipe(
        map((res) => res.json())
    );
}
}
