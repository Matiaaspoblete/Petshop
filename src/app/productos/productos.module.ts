import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { SliderComponent } from './componentes/slider/slider.component';
import { VariedadComponent } from './componentes/variedad/variedad.component';
import { VerproductoComponent } from './componentes/verproducto/verproducto.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PerrosygatosComponent } from './componentes/perrosygatos/perrosygatos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ComentariosComponent } from './componentes/comentarios/comentarios.component';
import { ProductoRoutingModule } from './productos-routing.module';

@NgModule({
  declarations: [
    AdministradorComponent,
    ProductoComponent,
    SliderComponent,
    VariedadComponent,
    VerproductoComponent,
    HomeComponent,
    PerrosygatosComponent,
    ContactoComponent,
    ComentariosComponent,
  ],
  exports: [
    AdministradorComponent,
    ProductoComponent,
    SliderComponent,
    VariedadComponent,
    VerproductoComponent,
    HomeComponent,
    PerrosygatosComponent,
    ContactoComponent,
    ComentariosComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductoRoutingModule
  ]
})
export class ProductosModule { }
