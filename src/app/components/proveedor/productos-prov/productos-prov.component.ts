import { Component, HostBinding } from '@angular/core';
import { ProductosService } from '../../../service/productos.service';
import { ActivatedRoute } from '@angular/router';
import { CargarScriptsService } from '../../../cargar-scripts.service';

@Component({
  selector: 'app-productos-prov',
  templateUrl: './productos-prov.component.html',
  styleUrl: './productos-prov.component.css'
})
export class ProductosProvComponent {
  @HostBinding ('class') classes = 'row';
  productos : any = [];


  constructor(private productosService:ProductosService, private activatedRoute : ActivatedRoute, private _CargaScripts:CargarScriptsService){
    _CargaScripts.Carga(["menu/menu"]);}

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

}
