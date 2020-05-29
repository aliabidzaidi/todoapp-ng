import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NbCardModule, NbButtonModule, NbIconModule, NbDialogModule, NbInputModule, NbSpinnerModule, NbToastrModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { TododialogComponent } from './tododialog/tododialog.component';

@NgModule({
  declarations: [TodosComponent, TododialogComponent],
  imports: [
    CommonModule,
    NzPaginationModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    NbDialogModule.forChild(),
    ReactiveFormsModule,
    ReactiveFormsModule,
    NbSpinnerModule,
    NbToastrModule
  ],
  entryComponents: [
    TododialogComponent,
  ],
})
export class TodosModule { }
