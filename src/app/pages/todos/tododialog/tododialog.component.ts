import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'ngx-todo-dialog',
  templateUrl: './tododialog.component.html',
  styleUrls: ['./tododialog.component.scss'],
})
export class TododialogComponent {
  heading = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]);
  body = new FormControl('', [Validators.required, Validators.minLength(0), Validators.maxLength(500)]);
  colorCode: string = 'blue';

  todoColors = ["blue", "red", "yellow", "purple", "green", "orange", "gray"];

  constructor(protected ref: NbDialogRef<TododialogComponent>) {
    this.todoColors[0] += ' color-selected';
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    if (this.heading.valid && this.body.valid) {
      const todo = { heading: this.heading.value, body: this.body.value, colorCode: this.colorCode };
      console.log(todo);
      this.ref.close(todo);
    }
    else {
      console.log('Invalid Data');
    }
  }

  changeColor(color) {
    this.todoColors = this.todoColors.map(function (a) {
      a = a.split(' ')[0];
      if (a === color) {
        // this.colorCode = a;
        a = a + ' color-selected';
      }
      return a;
    });
  }

}


