import {Injectable} from '@angular/core';
import { map } from 'rxjs/operators';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {
    Iris,
    ProbabilityPrediction,
    SVCParameters,
    SVCResult
} from "./types";

const SERVER_URL: string = 'api/';

@Injectable()
export class IrisService {

    constructor(private http: Http) {
    }

    public trainModel(svcParameters: SVCParameters): Observable<SVCResult> {
        return this.http.post(`${SERVER_URL}train`, svcParameters).
        pipe(
            map((res) => res.json())
        );
    }

    public predictIris(iris: Iris): Observable<ProbabilityPrediction[]> {
        return this.http.post(`${SERVER_URL}predict`, iris).
        pipe(
            map((res) => res.json())
            );
    }

    public trainModelMLP(): Observable<SVCResult> {
        return this.http.post(`${SERVER_URL}trainMLP`,'')
        .pipe(
            map((res) => res.json())
            );
    }

    public predictIrisMLP(iris: Iris): Observable<ProbabilityPrediction[]> {
        return this.http.post(`${SERVER_URL}predictMLP`, iris).
        pipe(
            map((res) => res.json())
            );
    }
}
