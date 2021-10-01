import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { SliderComponent } from './componentes/slider/slider.component';
import { VariedadComponent } from './componentes/variedad/variedad.component';
import { VerproductoComponent } from './componentes/verproducto/verproducto.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PerrosygatosComponent } from './componentes/perrosygatos/perrosygatos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';


@NgModule({
  declarations: [
    AdministradorComponent,
    ProductoComponent,
    SliderComponent,
    VariedadComponent,
    VerproductoComponent,
    HomeComponent,
    PerrosygatosComponent,
    ContactoComponent
  ],
  exports: [
    AdministradorComponent,
    ProductoComponent,
    SliderComponent,
    VariedadComponent,
    VerproductoComponent,
    HomeComponent,
    PerrosygatosComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class ProductosModule { }
