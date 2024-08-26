import { Component, HostBinding } from '@angular/core';
import { ProductosService } from '../../../../service/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoService } from '../../../../service/carrito.service';


@Component({
  selector: 'app-pantpri',
  templateUrl: './pantpri.component.html',
  styleUrl: './pantpri.component.css'
})
export class PantpriComponent {
  @HostBinding ('class') classes = 'row';
  productos : any = [];


  constructor(private router: Router, private productosService:ProductosService, private activatedRoute : ActivatedRoute, private carritoService : CarritoService){
   }

   ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const idC = params.get('idC');
      if (idC) {
        this.getProductos(idC);
      } else {
        this.getProductos();
      }
    });
  }
  

  getProductos(idC?: string): void {
    if (idC) {
      this.productosService.getProductosPorCategoria(idC).subscribe(
        resp => this.productos = resp,
        err => console.log(err)
      );
    } else {
      this.productosService.getProductos().subscribe(
        resp => this.productos = resp,
        err => console.log(err)
      );
    }
  }
  

deleteProducto(id: string) {
  console.log(id);
  this.productosService.deleteProducto(id).subscribe(
    resp => {console.log(resp);
      this.getProductos();
    },
    err => console.log(err)
    )
}






////////////////////////////////////////////////
agregarAlCarrito(producto: any) {
  this.carritoService.agregarAlCarrito(producto);
}


}
