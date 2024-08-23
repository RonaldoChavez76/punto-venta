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

  ngOnInit(){
    this.getProductos();  //Carga los productos al iniciar la página
    this.getProductosCat();
  }



  getProductos(){
    this.productosService.getProductos().subscribe(
      resp => {
        this.productos = resp
      },//console.log(resp),
      err => console.log(err)
    );
  }
    getProductosCat(){
      const idC = this.activatedRoute.snapshot.paramMap.get('idC');
      if(idC){
      this.productosService.getProductosPorCategoria(idC).subscribe(
        resp => {
          this.productos = resp
        },//console.log(resp),
        err => console.log(err)
      )}
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
