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
      description: 'Popular, amigável e inteligente. Excelente companheira e possue uma personalidade afetuosa.',
      img: 'https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      name: 'Pingo',
      description: ' Enérgico e amigável, adora criançãs  e passeios',
      img: 'https://images.pexels.com/photos/4588435/pexels-photo-4588435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      name: 'Flor',
      description: 'Adora pesssoas e  brincar na água ',
      img: 'https://images.pexels.com/photos/3299898/pexels-photo-3299898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      name: 'Peach',
      description: 'Ama brincar com outros pets',
      img: 'https://images.pexels.com/photos/16623449/pexels-photo-16623449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 5,
      name: 'Sasha',
      description: 'Companhia adorável, com um temperamento doce ',
      img: 'https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 6,
      name: 'Tico e Teco',
      description: 'Irmãos inseparáveis. Pequenos, porém cheios de personalidade',
      img: 'https://images.pexels.com/photos/4000092/pexels-photo-4000092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 7,
      name: 'Nic',
      description: 'Gosta de gatos, pesssoas e  brincar na água ',
      img: 'https://images.pexels.com/photos/16652365/pexels-photo-16652365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 8,
      name: 'Jabuticaba',
      description: 'Ama frutas e sonecas longas',
      img: 'https://images.pexels.com/photos/16652415/pexels-photo-16652415.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 9,
      name: 'Batman',
      description: 'Porte pequeno, confiante e corajoso',
      img: 'https://images.pexels.com/photos/6959131/pexels-photo-6959131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 10,
      name: 'Rock',
      description: 'Adora pesssoas e  brincar na água ',
      img: 'https://images.pexels.com/photos/3299896/pexels-photo-3299896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 11,
      name: 'Jimi',
      description: 'Adora pesssoas e  brincar na água ',
      img: 'https://images.pexels.com/photos/2579504/pexels-photo-2579504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 12,
      name: 'Xena',
      description: 'Carinhosa, ama passear, leal e adora outros pets',
      img: 'https://images.pexels.com/photos/9862782/pexels-photo-9862782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 13,
      name: 'Tio',
      description: 'Ama sonecas, brincar com amigos e é companheiro',
      img: 'https://images.pexels.com/photos/1557178/pexels-photo-1557178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 14,
      name: 'Hanah',
      description: 'Protetora, amorosa e cheia de amor ',
      img: 'https://images.pexels.com/photos/3090873/pexels-photo-3090873.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
    },
    {
      id: 15,
      name: 'Azeitona',
      description: 'Ama pesssoas e  brincar na água ',
      img: 'https://images.pexels.com/photos/3361714/pexels-photo-3361714.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
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
