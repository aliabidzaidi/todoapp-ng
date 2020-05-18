import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoreConfig } from '../core.config';


@Injectable({
  providedIn: 'root',
})
export class TodoService {

  constructor(private http: HttpClient) { }

  public getTodos(): Observable<any> {
    const url = CoreConfig.getPath() + `/todos`;

    return this.http.get(url);
  }

  public addTodo(todo): Observable<any> {
    const url = CoreConfig.getPath() + `/todos/add`;

    return this.http.post(url, todo);
  }
}
