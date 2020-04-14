import { environment as env } from './../../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { CadastroPf } from './../components/cadastrar-pf/models/cadastro-pf.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class CadastrarPfService {

  private readonly PATH: string = 'cadastrar-pf';
  
  constructor(private http : HttpClient) { }

  cadastrar(cadastroPf: CadastroPf): Observable<any>{
    return this.http.post(env.baseApiUrl + this.PATH, cadastroPf);
  }
}
