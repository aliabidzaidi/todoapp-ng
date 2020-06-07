import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'viewdialog',
  templateUrl: './viewdialog.component.html',
  styleUrls: ['./viewdialog.component.scss']
})
export class ViewdialogComponent {
  body;
  colorCode;
  dateUpdated;
  dateAdded;
  heading;
  id;

  constructor(protected ref: NbDialogRef<ViewdialogComponent>) {
    console.log('View todo opened!!');
    console.log(this);
    // console.log(this.ref.body);
    // console.log(this.ref.heading);
    // console.log(this.ref.colorCode);
    // console.log(this.ref.dateAdded);
    // console.log(this.ref.dateUpdated);
    // console.log(this.ref.id);
  }


  close() {
    this.ref.close();
  }

}
