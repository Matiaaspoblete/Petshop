import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  public form: FormGroup;
  producto : Producto[] = [];
  model: any = { nombre: '', precio:'', descripcion: '', imagen: ''};
  id: string =  "";


  constructor( private productoService : ProductService , private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      user: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),

        ]
      ],
      precio: [
        null,
        [
          Validators.required,
          Validators.min(0),
          Validators.maxLength(10),
        ]
      ],
      descripcion: [
          null,
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(70),
        ]
      ]

    })
  }

  ngOnInit(): void {
  this.getProducts();
}

getProducts(){
  this.productoService.getProducto().subscribe(resp=>{
    console.log(resp);

  this.producto = resp;

}
)
  
}


onSubmit() {
  console.log(this.model);
  this.productoService.addProducto(this.model).subscribe((response: Producto)=> this.getProducts());
  
}

onEdit() {

  this.productoService.editProducto(this.id,this.model).subscribe((response: Producto)=> console.log(response));
  
}

onDelete(tests:string) {
  console.log("test",tests);
  this.productoService.deleteProducto(tests).subscribe((response: Producto)=> this.getProducts()
  );
}

}

