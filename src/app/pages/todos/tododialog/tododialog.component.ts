import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-todo-dialog',
  templateUrl: './tododialog.component.html',
  styleUrls: ['./tododialog.component.scss'],
})
export class TododialogComponent {
  heading = new FormControl('');
  body = new FormControl('');

  constructor(protected ref: NbDialogRef<TododialogComponent>) { }

  cancel() {
    this.ref.close();
  }

  submit() {
    const todo = {heading: this.heading.value, body: this.body.value};
    this.ref.close(todo);
  }

}
