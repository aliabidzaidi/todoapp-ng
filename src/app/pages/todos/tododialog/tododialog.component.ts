import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-todo-dialog',
  templateUrl: './tododialog.component.html',
  styleUrls: ['./tododialog.component.scss'],
})
export class TododialogComponent implements OnInit {
  input_heading = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]);
  input_body = new FormControl('', [Validators.required, Validators.minLength(0), Validators.maxLength(500)]);
  colorCode: string = '';
  todoColors = ['primary', 'warning', 'success', 'danger', 'info'];
  isEdit: boolean;
  body: string;
  heading: string;
  id = '';

  constructor(protected ref: NbDialogRef<TododialogComponent>) {
    // this.todoColors[0] += ' color-selected';
  }
  ngOnInit(): void {
    console.log(this);
    if (this.isEdit) {
      this.input_heading.setValue(this.heading);
      this.input_body.setValue(this.body);
      this.id;
    }
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    if (this.input_heading.valid && this.input_body.valid) {
      const todo = { id: this.id, heading: this.input_heading.value, body: this.input_body.value, colorCode: this.colorCode };
      // console.log(todo);
      this.ref.close(todo);
    }
    else {
      // console.log('Invalid Data');
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


