import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { VerproductoComponent } from './componentes/verproducto/verproducto.component';
import { HomeComponent } from './home/home.component';
import { PerrosygatosComponent } from './componentes/perrosygatos/perrosygatos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { LoginGuard } from '../shared/guards/LoginGuard';
import { AdminGuard } from '../shared/guards/AdminGuard';
import { CommonModule } from '@angular/common';


const routes: Routes = [
{
    path: '',
    component: HomeComponent,
},
    {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
    },
    {
        path: 'producto',
        component: ProductoComponent
    },
    {
        path:'verproducto/:id',
        component: VerproductoComponent
    },
    {
        path:'administrador',
        component: AdministradorComponent,
        canActivate: [LoginGuard, AdminGuard]
        
    },
    {
        path:'perrosygatos',
        component: PerrosygatosComponent
    }, 
    {
        path: 'contacto',
        component: ContactoComponent,
        pathMatch: 'full'
    },
            
]

@NgModule({
    imports: [
    RouterModule.forChild(routes),
    CommonModule
    ],
    exports: [
    RouterModule,
    CommonModule
    ],
    providers: [
        LoginGuard,
        AdminGuard
    ]

})
export class ProductoRoutingModule {
}
