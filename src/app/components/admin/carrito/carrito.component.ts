import { Component } from '@angular/core';
import { CarritoService } from '../../../service/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

  items$ = this.carritoService.items$;

  constructor(private carritoService: CarritoService) {}

  eliminarDelCarrito(index: number) {
    this.carritoService.eliminarDelCarrito(index);
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
  }

  actualizarCantidad(id: number, cantidad: number) {
    this.carritoService.actualizarCantidadProducto(id, cantidad);
  }
}
