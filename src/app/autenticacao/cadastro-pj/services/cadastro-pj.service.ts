import { environment as env } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { CadastroPj } from './../components/cadastrar-pj/models/cadastro-pj.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CadastroPjService {

  //variável string onde salva os dados no servidor
  private readonly PATH: string =   'cadastrar-pj';

  constructor(private http : HttpClient) { }

  //método para fazer a requisição post no servidor
  cadastrar(cadastroPj: CadastroPj): Observable<any>{
    return this.http.post(env.baseApiUrl + this.PATH, cadastroPj);
  }
}
