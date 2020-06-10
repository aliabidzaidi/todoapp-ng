import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import {
  NbCardModule, NbButtonModule, NbIconModule, NbDialogModule, NbInputModule,
  NbSpinnerModule, NbToastrModule, NbActionsModule,
} from '@nebular/theme';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TododialogComponent } from './tododialog/tododialog.component';
import { ViewdialogComponent } from './viewdialog/viewdialog.component';

@NgModule({
  declarations: [TodosComponent, TododialogComponent, ViewdialogComponent],
  imports: [
    CommonModule,
    NzPaginationModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    NbDialogModule.forRoot(),
    ReactiveFormsModule,
    ReactiveFormsModule,
    NbSpinnerModule,
    NbToastrModule,
    NbActionsModule,
    FormsModule,
  ],
  entryComponents: [
    TododialogComponent,
    ViewdialogComponent,
  ],
})
export class TodosModule { }
