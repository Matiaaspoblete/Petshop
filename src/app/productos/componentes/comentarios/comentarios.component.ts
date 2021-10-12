import { Component, OnInit } from '@angular/core';
import { ComentarioService } from '../../services/comentario.service';
import { Comentario } from '../../interfaces/comentario';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  comentario : Comentario[] = [];
  model: Comentario = {id:'', nombre: '', comentario:''};


  constructor(
    private comentarioService : ComentarioService
  ) { }

  ngOnInit(): void {

    this.getProducts();

}
getProducts(){
  this.comentarioService.getComentario().subscribe(resp=>{
    console.log(resp);

  this.comentario = resp;

}
)
  
}
onSubmit() {
  console.log(this.model);
  this.comentarioService.addComentario(this.model).subscribe((response: Comentario)=> this.getProducts());
  
}


}
