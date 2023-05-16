import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Adocao } from '../../../../shared/models/adocao.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adocao',
  templateUrl: './adocao.component.html',
  styleUrls: ['./adocao.component.scss']
})
export class AdocaoComponent implements OnInit{
 
  constructor(private localStorageService: LocalStorageService,
    private router: Router){

  }
  
  titleForm = 'Preencha o formulário de adoção';
  ourMission = 'Na nossa organização de adoção responsável, temos uma missão clara e apaixonada: salvar vidas e promover o bem-estar dos animais de estimação. Estamos comprometidos em encontrar lares amorosos e permanentes para aqueles que mais precisam, garantindo que cada animal tenha a oportunidade de viver uma vida plena e feliz.';
  card = 'Obrigado por visitar nosso site de adoção responsável. Estamos ansiosos para ajudá-lo a encontrar o companheiro perfeito e testemunhar a alegria que a adoção traz tanto para você quanto para o animal adotado. ';

  adocaoForm = new FormGroup({
    name : new FormControl('', [Validators.required]),
    adress: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    walk: new FormControl('', [Validators.required]),
    averageWage: new FormControl('', [Validators.required]),
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
    const user = this.localStorageService.user;
    const adocao = this.adocaoForm.value as Adocao;
    this.localStorageService.addAdocaoForm(user.id,adocao);
    this.router.navigateByUrl('return-contact');
  }
}

