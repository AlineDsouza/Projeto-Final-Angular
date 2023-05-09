import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPetComponent } from './components/lista-pet/lista-pet.component';
import { PetsComponent } from './pages/pets/pets.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MeConhecaComponent } from './pages/me-conheca/me-conheca.component';



@NgModule({
  declarations: [
    ListaPetComponent,
    PetsComponent,
    MeConhecaComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    PetsComponent
  ]
})
export class PetsModule { }
