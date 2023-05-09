import { Injectable } from '@angular/core';
import { Pet } from 'src/app/features/pets/models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  
  pets: Array<Pet> = [
    {
      id: 1,
      name: 'Lua',
      description: 'Amável, adora pesssoas e outros pets',
      img: 'https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      name: 'Pingo',
      description: 'Adora dormir, criançãs  e passeios',
      img: 'https://images.pexels.com/photos/4588435/pexels-photo-4588435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      name: 'Flor',
      description: 'Adora pesssoas e  brincar na água ',
      img: 'https://images.pexels.com/photos/3299898/pexels-photo-3299898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ]

  constructor() { }
  getPets(){
    return this.pets;
  }

  getById(id: number){
    return this.pets.find((pets)=> pets.id === id)
  }
}
