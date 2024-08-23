import { Component, HostBinding } from '@angular/core';
import { ProductosService } from '../../../service/productos.service';
import { ActivatedRoute } from '@angular/router';
import { CargarScriptsService } from '../../../cargar-scripts.service';

@Component({
  selector: 'app-pantalla-principal-inv',
  templateUrl: './pantalla-principal-inv.component.html',
  styleUrl: './pantalla-principal-inv.component.css'
})
export class PantallaPrincipalInvComponent {
  @HostBinding ('class') classes = 'row';
  productos : any = [];


  constructor(private productosService:ProductosService, private activatedRoute : ActivatedRoute,private _CargaScripts:CargarScriptsService){
    _CargaScripts.Carga(["menu/menu"]);}

  ngOnInit(){
    this.getProductsTop();
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

getProductsTop(){
  this.productosService.getProductosTop().subscribe(
    resp => {
      this.productos = resp
    },//console.log(resp),
    err => console.log(err)
  );
}
}
