import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-perrosygatos',
  templateUrl: './perrosygatos.component.html',
  styleUrls: ['./perrosygatos.component.css']
})
export class PerrosygatosComponent implements OnInit {
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
