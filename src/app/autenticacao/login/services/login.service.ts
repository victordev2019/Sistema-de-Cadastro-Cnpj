import { environment as env } from './../../../../environments/environment';
import { Login } from './../models/login.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

  private readonly PATH: string = 'auth';

  constructor(private http: HttpClient) { }
  
  //Irá fazer a requisição no back end
  logar(login: Login): Observable<any>{
    return this.http.post(env.baseUrl + this.PATH, login);
  }
}
