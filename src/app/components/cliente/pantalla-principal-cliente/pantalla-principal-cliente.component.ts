import { Component, HostBinding } from '@angular/core';
import { ProductosService } from '../../../service/productos.service';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from '../../../service/carrito.service';
import { AuthService } from '../../../service/auth.service';
import { CargarScriptsService } from '../../../cargar-scripts.service';

@Component({
  selector: 'app-pantalla-principal-cliente',
  templateUrl: './pantalla-principal-cliente.component.html',
  styleUrl: './pantalla-principal-cliente.component.css'
})
export class PantallaPrincipalClienteComponent {
  @HostBinding ('class') classes = 'row';
  productos : any = [];


  constructor(private productosService:ProductosService, private activatedRoute : ActivatedRoute, private carritoService : CarritoService, private authService: AuthService, private _CargaScripts:CargarScriptsService){
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

onLogout() {
  this.authService.logout();
}
}
