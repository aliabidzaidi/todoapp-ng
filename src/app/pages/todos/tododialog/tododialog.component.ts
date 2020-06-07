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
  colorCode: string = '';


  todoColors = ["primary", "warning", "success", "danger", "info"];

  constructor(protected ref: NbDialogRef<TododialogComponent>) {
    // this.todoColors[0] += ' color-selected';
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
    //reset todoColors to remove
    this.colorCode = color.split(' ')[0];
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


