import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Users} from '../interfaces/usuarios';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  constructor(private http:HttpClient) { 

    
  }
  // metodo para traer la informacion de la api// 
getUsers(){
  return this.http.get<Users>('https://randomuser.me/api/?seed=nahuel?&results=20')
}

}
