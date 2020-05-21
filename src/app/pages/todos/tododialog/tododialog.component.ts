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

  constructor(protected ref: NbDialogRef<TododialogComponent>) { }

  cancel() {
    this.ref.close();
  }

  submit() {
    if (this.heading.valid && this.body.valid) {
      const todo = { heading: this.heading.value, body: this.body.value };
      console.log(todo);
      this.ref.close(todo);
    }
    else {
      console.log('Invalid Data');
    }
  }

}
