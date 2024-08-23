import { Component } from '@angular/core';
import { CarritoService } from '../../../service/carrito.service';

@Component({
  selector: 'app-gestion-ventas-em',
  templateUrl: './gestion-ventas-em.component.html',
  styleUrl: './gestion-ventas-em.component.css'
})
export class GestionVentasEmComponent {
  ventas: any[] = [];
  ventaFiltrada: any = null;
  idVentaBuscar: string = '';

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.carritoService.getAllVentas().subscribe(
      (data: any) => {
        this.ventas = data;
      },
      (error) => {
        console.error('Error al obtener las ventas', error);
      }
    );
  }


  buscarVentaPorId(): void {
    if (this.idVentaBuscar) {
      this.carritoService.getVentaPorId(+this.idVentaBuscar).subscribe(
        (data: any) => {
          this.ventaFiltrada = data;
        },
        (error) => {
          console.error('Venta no encontrada', error);
          this.ventaFiltrada = null;
        }
      );
    }
  }
}
