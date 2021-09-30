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

  id: string | null = ""
  producto : any;

  constructor(
    private _route: ActivatedRoute,
    private productoService : ProductService,
  ) { } 
  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.productoService.getProductbyid(this.id).subscribe(resp=>{
    
    this.producto = resp;
    console.log(this.producto);
  }
  )
}
}