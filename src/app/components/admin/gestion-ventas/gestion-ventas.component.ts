import { Component } from '@angular/core';
import { CarritoService } from '../../../service/carrito.service';
import { CargarScriptsService } from '../../../cargar-scripts.service';

@Component({
  selector: 'app-gestion-ventas',
  templateUrl: './gestion-ventas.component.html',
  styleUrl: './gestion-ventas.component.css'
})
export class GestionVentasComponent {
  ventas: any[] = [];
  ventaFiltrada: any = null;
  idVentaBuscar: string = '';

  constructor(private carritoService: CarritoService,private _CargaScripts:CargarScriptsService){
    _CargaScripts.Carga(["menu/menu"]); }

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
