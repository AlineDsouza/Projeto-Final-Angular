import { Component } from '@angular/core';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(){}

  email= 'patinhas@email.org';
  telefone = '88';
  
  title =  "Dúvidas? Entre em contato conosco";
  textContact = "Estamos felizes em saber que você está interessado em entrar em contato conosco. Se você tiver alguma dúvida, sugestão, comentário ou se quiser saber mais sobre nosso trabalho de adoção responsável, por favor,entre em contato o mais breve possível.";
  
}
  
