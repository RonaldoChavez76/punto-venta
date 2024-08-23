import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private itemsSubject = new BehaviorSubject<any[]>(this.getCarritoFromStorage());
  items$ = this.itemsSubject.asObservable();


   API_URI = 'https://srv-ronaldo-production.up.railway.app/api/carrito'
  constructor(private http: HttpClient) { }

  saveProductsCart(items: any[], id_usuario: number) {
    const data = { items, id_usuario };
    return this.http.post(`${this.API_URI}/crear/`, data);
  }

  private getCarritoFromStorage(): any[] {
    const carrito = localStorage.getItem('carrito');
    return carrito ? JSON.parse(carrito) : [];
  }

  private saveCarritoToStorage(items: any[]): void {
    localStorage.setItem('carrito', JSON.stringify(items));
  }

  agregarAlCarrito(producto: any) {
    const items = this.itemsSubject.value;
    
    // Buscar si el producto ya existe en el carrito
    const itemExistente = items.find(item => item.id === producto.id);
    
    if (itemExistente) {
      // Si existe, aumentar la cantidad
      itemExistente.cantidad += 1;
    } else {
      // Si no existe, agregarlo con cantidad 1
      items.push({ ...producto, cantidad: 1 });
    }
    
    this.itemsSubject.next(items);
    this.saveCarritoToStorage(items);
  }

  eliminarDelCarrito(index: number) {
    const items = this.itemsSubject.value;
    items.splice(index, 1);
    this.itemsSubject.next(items);
    this.saveCarritoToStorage(items);
  }

  vaciarCarrito() {
    this.itemsSubject.next([]);
    localStorage.removeItem('carrito');
  }

  actualizarCantidadProducto(id: number, cantidad: number) {
    const items = this.itemsSubject.value;
    const item = items.find(item => item.id === id);

    if (item) {
      item.cantidad = cantidad;
      if (item.cantidad <= 0) {
        this.eliminarDelCarrito(items.indexOf(item));
      } else {
        this.itemsSubject.next(items);
        this.saveCarritoToStorage(items);
      }
    }
  }

  //Historial de compras
  getVentasPorUsuario(id_usuario: number) {
    return this.http.get(`${this.API_URI}/ventas-us/${id_usuario}`);
  }
  
  
  //Obtener todas las ventas
  getAllVentas() {
    return this.http.get(`${this.API_URI}/ventas`);
  }
  
  getVentaPorId(id_venta: number) {
    return this.http.get(`${this.API_URI}/ventas/${id_venta}`);
  }
  
}
