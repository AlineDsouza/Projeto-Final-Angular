import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatosComponent } from './components/contatos/contatos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ContatosComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ContactComponent
  ]
})
export class ContactModule { }
