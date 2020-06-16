import { Component, OnInit, TemplateRef } from '@angular/core';
import { TodoService } from '../../../sdk/services/api/todo.service';
import { NbDialogService, NbToastrService, NbComponentStatus } from '@nebular/theme';
import { TododialogComponent } from './tododialog/tododialog.component';
import { Todo } from '../../../sdk/services/models/Todo';
import { ViewdialogComponent } from './viewdialog/viewdialog.component';

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
          newTodo = new Todo(null, todo.heading, todo.body, todo.colorCode);

          this.todoService.addTodo(newTodo).subscribe(
            (response) => {
              this.toastrService.success(`Todo "${todo.heading}" Added Successfully`, 'Success');

              // refresh todoList on page
              this.todoList = [];
              this.getTodoList();
            },
            (error) => {
              this.toastrService.danger(`Todo "${todo.heading}" failed to Add, please try again or contact support`, 'Error');
            },
          );
          this.loading = false;
        }

      });

  }

  viewTodo(todo) {
    // console.log('View Todo clicked =>', todo);
    this.dialogService.open(ViewdialogComponent, { context: todo });
  }


  editTodo(todo) {
    todo.isEdit = true;
    this.dialogService.open(TododialogComponent, { context: todo }).onClose.subscribe(
      todo => {
        // console.log(todo);
        if (todo != null) {
          //call edit api & update todoList
          this.todoService.editTodo(todo).subscribe(
            (response) => {
              this.loading = true;
              this.toastrService.success(`Todo "${todo.heading}" Edit Successful`, 'Success');
              this.todoList = [];
              this.getTodoList();
              this.loading = false;
            },
            (error) => {
              this.toastrService.danger(`Todo "${todo.heading}" failed to Edit, please try again or contact support`, 'Error');
              this.loading = false;
            },
          );
        }
      },
    );
  }

  openDeleteDialog(deleteDialog: TemplateRef<any>, todo) {
    // console.log(todo);
    this.dialogService.open(deleteDialog, { context: todo }).onClose.subscribe(
      data => {
        if (data != null) {
          this.todoService.deleteTodo(data.id).subscribe(
            (response) => {
              // console.log(response);
              this.loading = true;
              this.toastrService.success(`Todo: "${data.heading}", is deleted`, 'Todo Deleted Successfully');
              this.todoList = [];
              this.getTodoList();
              this.loading = false;
            },
            (error) => {
              // console.log(error);
              this.toastrService.danger(`Todo: "${data.heading}" failed to delete, please try again or contact support`, 'Error');
              this.loading = false;
            },
          );
        }
      },
    );
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
