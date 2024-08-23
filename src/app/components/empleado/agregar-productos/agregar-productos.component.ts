import { Component, OnInit, HostBinding } from '@angular/core';
import { Producto } from '../../../models/Producto';
import { ProductosService } from '../../../service/productos.service';
import{ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrl: './agregar-productos.component.css'
})
export class AgregarProductosComponent {
  @HostBinding('class') classes = "row";

  producto: Producto = {
    id:0,
    nombre : '',
    stock: '',
    precio_unitario: '',
    imagen: '',
    created_at: new Date(),
    id_categoria: ''
  };
  
  edit : boolean = false;
  errorMessage: string = ''; // Variable para el mensaje de error
  
  constructor(private productosService : ProductosService, private router:Router, private activatedRoute : ActivatedRoute){} //, private router: Router, private activatedRoute : ActivatedRoute

  

  ngOnInit(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.productosService.getProducto(id).subscribe(
         resp => {
          console.log(resp)
           this.producto = resp;
           this.edit = true;
         },
         err => console.error(err)
      )
    }

    

  }


  validateForm(): boolean {
    if (!this.producto.nombre || !this.producto.stock || !this.producto.precio_unitario || !this.producto.imagen || !this.producto.id_categoria) {
      this.errorMessage = 'Todos los campos son obligatorios';
      return false;
    }
    return true;
  }

  saveNewProducto() {
    if (this.validateForm()) {
      delete this.producto.created_at;
      delete this.producto.id;

      this.productosService.saveProductos(this.producto).subscribe(
        resp => {
          console.log(resp);
          this.router.navigate(['/pantalla-principal']);
        },
        err => console.error(err)
      );
    }
  }

  updateProducto() {
    // Validación: verificar que todos los campos estén llenos
    if (!this.producto.nombre || !this.producto.stock || !this.producto.precio_unitario || !this.producto.id_categoria || !this.producto.imagen) {
        alert("Todos los campos son obligatorios");
        return; // No continúa si algún campo está vacío
    }

    let number: number = Number(this.producto.id);
    
    this.productosService.updateProducto(number, this.producto).subscribe(
        resp => {
            console.log(resp);
            this.router.navigate(['/pantalla-principal']);
        },
        err => console.error(err)
    );
}

}
