import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'viewdialog',
  templateUrl: './viewdialog.component.html',
  styleUrls: ['./viewdialog.component.scss']
})
export class ViewdialogComponent implements OnInit {

  colorCode;
  heading;
  body: string;

  constructor(protected ref: NbDialogRef<ViewdialogComponent>) {
  }
  ngOnInit(): void {
  }

  close() {
    this.ref.close();
  }

}
