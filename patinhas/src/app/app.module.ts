import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './features/home/home.module';
import { LoginModule } from './features/login/login.module';
import { ContactModule } from './features/contact/contact.module';
import { PetsModule } from './features/pets/pets.module';
import { SharedModule } from "./shared/shared.module";
import { AdocaoModule } from './features/adocao/adocao.module';



@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModule,
        LoginModule,
        ContactModule,
        PetsModule,
        SharedModule,
        AdocaoModule
       
    ]
})
export class AppModule { }
