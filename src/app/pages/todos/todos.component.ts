import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../sdk/services/api/todo.service';
import { NbDialogService, NbToastrService, NbComponentStatus } from '@nebular/theme';
import { TododialogComponent } from './tododialog/tododialog.component';
import { Todo } from '../../../sdk/services/models/Todo';

@Component({
  selector: 'ngx-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['./todos.component.scss'],
})

export class TodosComponent implements OnInit {
  constructor(
    private todoService: TodoService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService) { }

  loading = false;
  todoList: [];
  todoCount = 0;
  pageIndex = 1;
  pageSize = 8;
  private index: number = 0;

  ngOnInit(): void {
    this.getTodoList();

  }

  getTodoList() {
    this.todoService.getTodos(this.pageIndex, this.pageSize).subscribe(
      (response) => {
      // console.log(response);
        this.todoList = response.data;
        this.todoCount = response.count;
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
        if (todo != null) {
          this.loading = true;
        // console.log(todo);
          newTodo = new Todo(null, todo.heading, todo.body, todo.colorCode);
          // console.log(newTodo);

          this.todoService.addTodo(newTodo).subscribe(
            (response) => {
              this.toastrService.success('Success', 'Todo Added Successfully');
              // console.log(response);
              // console.log('success add');
              // Show toast success

              // refresh todoList on page
              this.todoList = [];
              this.getTodoList();
            },
            (error) => {
            // console.log(error);
            // console.log('failed add');
              this.toastrService.danger('Error', 'Todo Failed to Add, please try again or contact support');

              // Show toast failure
              // console.log(error);
            },
          );

          this.loading = false;
        }

      });

  }

  onPageChange(pageNumber): void {
    this.pageIndex = pageNumber;
    this.getTodoList();
  }

  onPageSizeChange(pageSize): void {
    this.pageIndex = 1;
    this.pageSize = pageSize;
    this.getTodoList();
  }

}
