import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us-content',
  templateUrl: './about-us-content.component.html',
  styleUrls: ['./about-us-content.component.scss']
})
export class AboutUsContentComponent {

  aboutUs = 'Somos uma organização dedicada a promover a adoção de animais de forma responsável, garantindo que eles encontrem lares amorosos e permanentes. Aqui, acreditamos na importância da adoção responsável. Valorizamos cada candidato a adotante, garantindo que o animal e o adotante sejam uma combinação perfeita. Nosso objetivo é criar laços duradouros e felizes entre animais e suas novas famílias.';

  ourMission = 'Na nossa organização de adoção responsável, temos uma missão clara e apaixonada: salvar vidas e promover o bem-estar dos animais de estimação. Estamos comprometidos em encontrar lares amorosos e permanentes para aqueles que mais precisam, garantindo que cada animal tenha a oportunidade de viver uma vida plena e feliz.';
  
  card = 'Obrigado por visitar nosso site de adoção responsável. Estamos ansiosos para ajudá-lo a encontrar o companheiro perfeito e testemunhar a alegria que a adoção traz tanto para você quanto para o animal adotado. ';
}
