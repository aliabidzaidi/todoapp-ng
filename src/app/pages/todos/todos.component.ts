import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../sdk/services/api/todo.service';
import { NbDialogService } from '@nebular/theme';
import { TododialogComponent } from './tododialog/tododialog.component';
import { Todo } from '../../../sdk/services/models/Todo';

@Component({
  selector: 'ngx-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['./todos.component.scss'],
})

export class TodosComponent implements OnInit {
  constructor(private todoService: TodoService, private dialogService: NbDialogService) { }

  todoList: [];

  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList() {
    this.todoService.getTodos().subscribe(
      (response) => {
        // console.log(response);
        this.todoList = response.data;
      },
      (error) => {
        // console.log(error);
      },
    );
  }

  open() {
    let newTodo;
    this.dialogService.open(TododialogComponent)
      .onClose.subscribe(todo => {
        newTodo = new Todo(null, todo.heading, todo.body, 'success');
        // console.log(newTodo);

        this.todoService.addTodo(newTodo).subscribe(
          (response) => {
            // console.log(response);
            // Show toast

            // refresh todoList on page

          },
          (error) => {
            // console.log(error);
          },
        );
      });

  }

}
