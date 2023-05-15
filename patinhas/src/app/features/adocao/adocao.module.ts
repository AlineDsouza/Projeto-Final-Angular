import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdocaoComponent } from './pages/adocao/adocao.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdocaoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    AdocaoComponent
  ]
})
export class AdocaoModule { }
