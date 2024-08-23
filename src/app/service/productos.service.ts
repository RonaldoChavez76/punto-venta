import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/Producto';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  //API_URI = 'http://localhost:3000/productos'; //Servidor json
  API_URI = 'https://srv-ronaldo-production.up.railway.app/api/productos'; //Servidor Back end
  constructor(private http: HttpClient) {}

    getProductos(){
     return this.http.get(`${this.API_URI}`);
    }

    getProducto(id:string){
      return this.http.get(`${this.API_URI}/${id}`);
    }

    saveUsuario(usuario : Usuario){
      return this.http.post(`${this.API_URI}/crear/`, usuario);
    }
  

    saveProductos(producto : Producto){
      return this.http.post(`${this.API_URI}`, producto);
    }

    deleteProducto(id: string){
      return this.http.delete(`${this.API_URI}/${id}`);
      }
      
      updateProducto(id:string|number, updateProducto:Producto){
      return this.http.put(`${this.API_URI}/${id}`, updateProducto);
      }
      //Obtener productos de su categria
      getProductosPorCategoria(idC: string){
        return this.http.get(`${this.API_URI}/categoria/${idC}`);
      }

      getProductosTop(){
        return this.http.get(`${this.API_URI}/top/`);
      }

      
}
