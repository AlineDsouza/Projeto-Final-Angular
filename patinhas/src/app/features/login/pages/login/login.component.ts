import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  titleLogin = 'Entre com seu login e senha';
  email = new FormControl ('', [Validators.email,Validators.required]);
  password = new FormControl ('', [Validators.required]);
  error = false;


  constructor(private userService: UsersService,
    private localStorageService: LocalStorageService,
    private router: Router){}

  ngOnInit(): void{

  }

  authenticate(){
  const user = this.userService.getUserByemailAndPassword(this.email.value!, this.password.value!);

  if(user){
    this.localStorageService.user=user;
    this.router.navigateByUrl('adocao-form');
  }else{
     this.error = true;
  }
  }
}
