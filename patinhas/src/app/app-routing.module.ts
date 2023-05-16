import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';
import { LoginComponent } from './features/login/pages/login/login.component';
import { ContactComponent } from './features/contact/pages/contact/contact.component';
import { PetsComponent } from './features/pets/pages/pets/pets.component';
import { MeConhecaComponent } from './features/pets/pages/me-conheca/me-conheca.component';
import { AdocaoComponent } from './features/adocao/pages/adocao/adocao.component';
import { ReturnComponent } from './features/adocao/pages/return/return.component';
import { RegisterComponent } from './features/login/pages/register/register.component';


const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'pets', component: PetsComponent},
  {path: 'me-conheca/:petId', component: MeConhecaComponent},
  {path: 'adocao-form', component: AdocaoComponent },
  {path: 'return-contact', component: ReturnComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
