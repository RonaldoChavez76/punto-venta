import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../../service/carrito.service';
import { CargarScriptsService } from '../../../cargar-scripts.service';

@Component({
  selector: 'app-historial-compras',
  templateUrl: './historial-compras.component.html',
  styleUrls: ['./historial-compras.component.css']
})
export class HistorialComprasComponent implements OnInit {
  ventas: any = []; // Cambiar 'any[]' a 'any' si es un objeto

  constructor(private carritoService: CarritoService, private _CargaScripts:CargarScriptsService){
    _CargaScripts.Carga(["menu/menu"]); }

  ngOnInit(): void {
    const usuario = JSON.parse(localStorage.getItem('user') || '{}');
    this.carritoService.getVentasPorUsuario(usuario.id).subscribe(
      (data: any) => { // Cambiar 'any[]' a 'any'
        this.ventas = data.ventas; // Ajusta esto según la estructura de la respuesta
      },
      (error) => {
        console.error('Error al obtener las ventas', error);
      }
    );
  }
}
