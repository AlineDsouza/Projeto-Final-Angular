import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-adocao',
  templateUrl: './adocao.component.html',
  styleUrls: ['./adocao.component.scss']
})
export class AdocaoComponent {

  adocaoForm = new FormGroup({
  name : new FormControl('', [Validators.required]),
  adress: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required]),
  walk: new FormControl('', [Validators.required]),
  // question: new FormControl('', [Validators.required]),
  routine: new FormControl('', [Validators.required]),
  });

  sendForm(){
    console.log(this.adocaoForm.valid);
  }
}
