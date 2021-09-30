import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './productos/componentes/administrador/administrador.component';
import { ProductoComponent } from './productos/componentes/producto/producto.component';
import { VerproductoComponent } from './productos/componentes/verproducto/verproducto.component';
import { HomeComponent } from './productos/home/home.component';
import { PerrosygatosComponent } from './productos/componentes/perrosygatos/perrosygatos.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
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
    component: AdministradorComponent
  },
  {
    path:'perrosygatos',
    component: PerrosygatosComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule {
}
