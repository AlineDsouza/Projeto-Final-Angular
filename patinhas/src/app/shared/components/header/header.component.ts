import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor(private router: Router,
      private localStorageService: LocalStorageService
      ){}

      user?: User;

    ngOnInit(): void {
      try {
        this.user = this.localStorageService.user;
      } catch (error) {
        console.error(error)
      }
    }

    navigateByUrl(url: string){
      this.router.navigateByUrl(url);
    }

    logOut(){
      this.localStorageService.clearCurrentUser();
      this.user=undefined;
    }
}
