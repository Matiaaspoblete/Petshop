import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/producto.service';
import { Producto } from '../interfaces/producto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  producto : Producto[] = [];

  constructor(
    private productoService : ProductService,
  ) { }

  ngOnInit(): void {
    this.productoService.getProducto().subscribe(resp=>{
      console.log(resp);
    
    this.producto = resp;
  }
  )
}
}