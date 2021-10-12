import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comentario } from '../interfaces/comentario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) { }


  getComentario (): Observable<Comentario[]>{
    return this.http.get<Comentario[]>('https://616302e6c4833800173007e8.mockapi.io/comentario');
  }

  addComentario (comentario: Comentario): Observable<Comentario>{
    return this.http.post<Comentario>('https://616302e6c4833800173007e8.mockapi.io/comentario', comentario);

  }
}
