import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoreConfig } from '../core.config';


@Injectable({
  providedIn: 'root',
})
export class CovidService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    const url = CoreConfig.getVirusApiPath() + `/all`;

    return this.http.get(url);
  }

}
