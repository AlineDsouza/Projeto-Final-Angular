import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';
import { LoginComponent } from './features/login/pages/login/login.component';
import { ContactComponent } from './features/contact/pages/contact/contact.component';
import { PetsComponent } from './features/pets/pages/pets/pets.component';
import { MeConhecaComponent } from './features/pets/pages/me-conheca/me-conheca.component';



const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'pets', component: PetsComponent},
  {path: 'me-conheca/:petId', component: MeConhecaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
