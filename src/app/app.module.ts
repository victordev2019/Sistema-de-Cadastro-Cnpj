import { LoginRoutingModule } from './autenticacao/login/login-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginModule, CadastroPjModule, CadastroPjRoutingModule } from './autenticacao';
import { AppRoutingModule } from './app-routing.module';





@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    LoginRoutingModule,
    CadastroPjModule,
    CadastroPjRoutingModule,
    AppRoutingModule
  ],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
