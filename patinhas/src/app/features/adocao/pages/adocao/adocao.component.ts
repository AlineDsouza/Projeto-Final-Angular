import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-adocao',
  templateUrl: './adocao.component.html',
  styleUrls: ['./adocao.component.scss']
})
export class AdocaoComponent implements OnInit{
 
  constructor(private localStorageService: LocalStorageService){

  }
  
  adocaoForm = new FormGroup({
    name : new FormControl('', [Validators.required]),
    adress: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    walk: new FormControl('', [Validators.required]),
    // question: new FormControl('', [Validators.required]),
    routine: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    const user = this.localStorageService.user;
    this.adocaoForm.patchValue({
      name: user.name,
      email : user.email
    });
  }

  sendForm(){
    console.log(this.adocaoForm.valid);
  }
}
