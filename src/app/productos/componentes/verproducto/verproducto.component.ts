import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto';
import {switchMap, tap} from "rxjs/operators";

@Component({  
  selector: 'app-verproducto',
  templateUrl: './verproducto.component.html',
  styleUrls: ['./verproducto.component.css']
})
export class VerproductoComponent implements OnInit {

  producto! : Producto;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productoService : ProductService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) =>  this.productoService.getProducto()),
        tap(console.log)
      )
      .subscribe(producto => {
        this.productoService = producto;
      });
  }

}