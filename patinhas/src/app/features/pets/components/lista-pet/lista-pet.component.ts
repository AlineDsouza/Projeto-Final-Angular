import { Component } from '@angular/core';
import { Pet } from '../../models/pet.model';
import { PetsService } from 'src/app/shared/services/pets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pet',
  templateUrl: './lista-pet.component.html',
  styleUrls: ['./lista-pet.component.scss']
})
export class ListaPetComponent {

  pets: Array<Pet> = this.listPetsService.getPets();
  
  constructor(
    private listPetsService: PetsService,
    private router: Router){}

    navigateToKnowMe(petId: number){
      this.router.navigateByUrl(`me-conheca/${petId}`);
    }
}

