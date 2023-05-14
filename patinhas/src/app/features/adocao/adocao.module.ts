import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdocaoComponent } from './pages/adocao/adocao.component';



@NgModule({
  declarations: [
    AdocaoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AdocaoComponent
  ]
})
export class AdocaoModule { }
