import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Usuario } from '../interfaces/usuario';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url : string = "https://6174ac9b08834f0017c709cc.mockapi.io/usuarios";
  constructor(private http: HttpClient) { }

  login(usuario:string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}/?name=${usuario}`);
  }

  addUsuario (usuario: Usuario): Observable<Usuario>{
    usuario.password = btoa(usuario.password);
    return this.http.post<Usuario>(this.url , usuario );
  }
}