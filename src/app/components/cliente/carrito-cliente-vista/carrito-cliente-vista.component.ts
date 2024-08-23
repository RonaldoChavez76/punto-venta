import { Component } from '@angular/core';
import { CarritoService } from '../../../service/carrito.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carrito-cliente-vista',
  templateUrl: './carrito-cliente-vista.component.html',
  styleUrl: './carrito-cliente-vista.component.css'
})
export class CarritoClienteVistaComponent {
  items$ = this.carritoService.items$;
  total: number = 0;

  constructor(private carritoService: CarritoService, private router:Router, private activatedRoute : ActivatedRoute) {
       // Calcula el total inicial al cargar el componente
       this.items$.subscribe(items => {
        this.total = this.calcularTotal(items);
      });
  }

  calcularTotal(items: any[]): number {
    return items.reduce((sum, item) => sum + (item.precio_unitario * item.cantidad), 0);
  }

  actualizarTotal() {
    this.items$.subscribe(items => {
      this.total = this.calcularTotal(items);
    });
  }

  eliminarDelCarrito(index: number) {
    this.carritoService.eliminarDelCarrito(index);
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
  }

  actualizarCantidad(id: number, cantidad: number) {
    this.carritoService.actualizarCantidadProducto(id, cantidad);
  }


  procederCompraClient() {
    const usuario = JSON.parse(localStorage.getItem('user') || '{}');
    const id_usuario = usuario.id;
  
    this.carritoService.items$.subscribe(items => {
      this.carritoService.saveProductsCart(items, id_usuario).subscribe(response => {
        console.log('Compra realizada', response);
        this.router.navigate(['/pantalla-principal-user']);
        this.vaciarCarrito();
      }, error => {
        console.error('Error al guardar los productos', error);
      });
    });
  }
  
}
