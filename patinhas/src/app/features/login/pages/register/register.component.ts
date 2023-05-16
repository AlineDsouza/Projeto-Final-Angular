import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 constructor(
  private localStorageService: LocalStorageService){

 }
  ngOnInit(): void {
   
  }

 titleForm = 'Bem-vindo(a) '; 
 subtitleForm = 'Preecha com seus dados para criar sua conta';

 registerForm = new FormGroup({
  name : new FormControl('', [Validators.required]),
  birthdate : new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required]),
  password: new FormControl('',[Validators.required])
 });

/** 
saveNewUser(){
 const newUser =
} 
 */

}