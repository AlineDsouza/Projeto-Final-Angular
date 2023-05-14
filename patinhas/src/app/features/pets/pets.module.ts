import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPetComponent } from './components/lista-pet/lista-pet.component';
import { PetsComponent } from './pages/pets/pets.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MeConhecaComponent } from './pages/me-conheca/me-conheca.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListaPetComponent,
    PetsComponent,
    MeConhecaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    PetsComponent
  ]
})
export class PetsModule { }
