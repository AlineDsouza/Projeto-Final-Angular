import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { EntrarComponent } from './components/entrar/entrar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    EntrarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
