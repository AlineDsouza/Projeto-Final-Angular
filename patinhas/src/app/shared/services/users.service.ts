import { Injectable } from '@angular/core';
import { User } from '../models/user.model';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<User>=[
    {
      id: 1,
      name: 'Alice',
      email: 'alice@email.com',
      password: '123',
      birthdate:'01/01/1998'
    },
    {
      id: 2,
      name: 'Lúcio',
      email: 'lucio@email.com',
      password: '321',
      birthdate:'02/02/2002'
    },
    {
      id: 3,
      name: 'João',
      email: 'joao@email.com',
      password: '0101',
      birthdate:'03/03/2003'
    },
  ];


  constructor() { }

  getUsers(){
    return this.users;
  }

  getUserByemailAndPassword(email: string, password:string){
    return this.users.find((user)=> user.email === email && user.password === password)
  }

}
