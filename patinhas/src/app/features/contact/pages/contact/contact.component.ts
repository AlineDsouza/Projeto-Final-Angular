import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(
    private router: Router
  ){}

  email= 'patinhas@email.org';
  telefone = '0012345678';
  
  title =  "Dúvidas? Entre em contato conosco";
  textContact = "Estamos felizes em saber que você está interessado em entrar em contato conosco. Se você tiver alguma dúvida, sugestão, comentário ou se quiser saber mais sobre nosso trabalho de adoção responsável, por favor,entre em contato o mais breve possível.";
  
  
    navigateByUrl(){
      this.router.navigateByUrl('/adocao-form');
  }
}
  
