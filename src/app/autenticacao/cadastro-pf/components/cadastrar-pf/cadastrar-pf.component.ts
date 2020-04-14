import { CadastrarPfService } from './../../services/cadastrar-pf.service';
import { CadastroPf } from './models/cadastro-pf.model';
import { CnpjValidator } from './../../../../shared/validators/cnpj.validator';
import { CpfValidator } from './../../../../shared/validators/cpf.validator';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-pf',
  templateUrl: './cadastrar-pf.component.html',
  styleUrls: ['./cadastrar-pf.component.css']
})
export class CadastrarPfComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private cadastrarPfService: CadastrarPfService
    
  ) { }

  ngOnInit() {
    this.gerarForm();
  }

  gerarForm(){
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      cpf: ['', [Validators.required, CpfValidator]],
      cnpj: ['', [Validators.required, CnpjValidator]]
    });
  }

  cadastrarPf(){
    if(this.form.invalid){
      return;
    }
    const cadastroPf: CadastroPf = this.form.value;
    this.cadastrarPfService.cadastrar(cadastroPf)
    .subscribe(
      data => {
        const msg: string = "Realize o login para acessar o sistema.";
        this.snackBar.open(msg, "Sucesso", { duration:5000 });
        this.router.navigate(['/login']);
      },
      err => {
        let msg: string = "Tente novamente em instantes.";
        if(err.status == 400){
          msg = err.error.errors.join(' ');
        }
        this.snackBar.open(msg, "Erro", { duration: 5000 });
      }
    );

    return false;
  }

}
