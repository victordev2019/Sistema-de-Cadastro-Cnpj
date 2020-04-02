import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarPjComponent } from './components';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CadastroPjComponent } from '../login/components/cadastro-pj.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule
    ],
    declarations: [
        CadastrarPjComponent,
        CadastroPjComponent
    ]
})
export class CadastroPjModule{}