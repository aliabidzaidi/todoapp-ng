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
  dateUpdated;
  dateAdded;
  heading;
  id;
  body: string;
  
  constructor(protected ref: NbDialogRef<ViewdialogComponent>) {
    console.log('View todo opened!!');
    console.log(this);

    console.log(this.body);
    console.log(this.heading);
    console.log(this.colorCode);
    console.log(this.dateAdded);
    console.log(this.dateUpdated);
    console.log(this.id);
  }
  ngOnInit(): void {
    console.log("ngOnInit called.");
    console.log(this.body);
    console.log(this.body);
    console.log(this.heading);
    console.log(this.colorCode);
    console.log(this.dateAdded);
    console.log(this.dateUpdated);
    console.log(this.id);
  }



  close() {
    this.ref.close();
    console.log(this.body);
  }

}
