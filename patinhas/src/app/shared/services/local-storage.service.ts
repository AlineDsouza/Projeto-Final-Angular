import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public get user(): User{
    const current_user = localStorage.getItem('current_user');
    if(!current_user){
      throw new Error('Usuário não encontrado!');
    }
    return JSON.parse(current_user);
  }

  public set user(value:User){
    localStorage.setItem('current_user', JSON.stringify(value));
  }

  public clearCurrentUser(){
    localStorage.removeItem('current_user');
  }
}
