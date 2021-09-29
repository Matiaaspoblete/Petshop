import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto : Producto[] = [];

  constructor(
    private productoService : ProductService,
  ) {}

  ngOnInit(): void {
    this.productoService.getProducto().subscribe(resp=>{
      console.log(resp);
    
    this.producto = resp;
  }
  )
}
}
