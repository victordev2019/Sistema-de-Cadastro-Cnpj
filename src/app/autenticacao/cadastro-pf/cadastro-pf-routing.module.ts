import { NgModule } from '@angular/core';
import { CadastrarPfComponent } from './components/cadastrar-pf/cadastrar-pf.component';
import { Routes, RouterModule } from '@angular/router';
import { CadastroPfComponent } from './components';
export const CadastroPfRoutes: Routes = [
    {
        path: 'cadastro-pf',
        component:CadastroPfComponent,
        children: [
            {
                path: '',
                component: CadastrarPfComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(CadastroPfRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class CadastroPfRoutingModule {

}