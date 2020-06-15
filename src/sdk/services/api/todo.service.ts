import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoreConfig } from '../core.config';


@Injectable({
  providedIn: 'root',
})
export class TodoService {

  constructor(private http: HttpClient) { }

  public getTodos(pageIndex, pageSize): Observable<any> {
    const url = CoreConfig.getPath() + `/todos`;

    let query = {};
    query["page"] = pageIndex;
    query["limit"] = pageSize;
    return this.http.get(url, { params: query });
  }

  public addTodo(todo): Observable<any> {
    const url = CoreConfig.getPath() + `/todos/add`;

    return this.http.post(url, todo);
  }

  public editTodo(todo): Observable<any> {
    console.log('reached edit todo service');
    const url = CoreConfig.getPath() + `/todo/` + todo.id;

    return this.http.put(url, todo);
  }

  public deleteTodo(todoId): Observable<any> {
    const url = CoreConfig.getPath() + `/todo/` + todoId;

    return this.http.delete(url);
  }
}
