import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetsService } from 'src/app/shared/services/pets.service';
import { Pet } from '../../models/pet.model';

@Component({
  templateUrl: './me-conheca.component.html',
  styleUrls: ['./me-conheca.component.scss']
})
export class MeConhecaComponent implements OnInit {
  
  pet?: Pet;

  constructor(
    private activedRoute: ActivatedRoute, private petsService: PetsService) { }

    ngOnInit(): void {
      this.activedRoute.params.subscribe((params) =>{
        const id = parseInt(params['petId']);
        this.pet = this.petsService.getById(id);
        console.log(this.pet);
      })
    }
}
