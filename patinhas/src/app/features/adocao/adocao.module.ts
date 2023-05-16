import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdocaoComponent } from './pages/adocao/adocao.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReturnComponent } from './pages/return/return.component';



@NgModule({
  declarations: [
    AdocaoComponent,
    ReturnComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    AdocaoComponent,
    ReturnComponent
  ]
})
export class AdocaoModule { }
