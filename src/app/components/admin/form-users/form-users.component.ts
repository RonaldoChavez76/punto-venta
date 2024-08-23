import { Component, HostBinding } from '@angular/core';
import { Usuario } from '../../../models/Usuario';
import { AuthService } from '../../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CargarScriptsService } from '../../../cargar-scripts.service';

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrl: './form-users.component.css'
})
export class FormUsersComponent {

  @HostBinding('class') classes = "row";

  usuario : Usuario = {
    id:0,
    nombre : '',
    email: '',
    password: '',
    id_tipo_usuario: 0
  };

  edit : boolean = false;

  constructor(private authService : AuthService, private router:Router, private activatedRoute : ActivatedRoute, private _CargaScripts:CargarScriptsService){
    _CargaScripts.Carga(["menu/menu"]);} //, private router: Router, private activatedRoute : ActivatedRoute

  

  ngOnInit(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.authService.getUsuario(id).subscribe(
         resp => {
          console.log(resp)
           this.usuario = resp;
           this.edit = true;
         },
         err => console.error(err)
      )
    }

    

  }


  updateUsuarios() {
    // Validación: verificar que todos los campos estén llenos
    if (!this.usuario.nombre || !this.usuario.email || !this.usuario.password || !this.usuario.id_tipo_usuario) {
        alert("Todos los campos son obligatorios");
        return; // No continúa si algún campo está vacío
    }

    let number: number = Number(this.usuario.id);
    
    this.authService.updateUsuario(number, this.usuario).subscribe(
        resp => {
            console.log(resp);
            this.router.navigate(['/pantalla-principal']);
        },
        err => console.error(err)
    );
}



saveUsuarios() {
  // Validación: verificar que todos los campos estén llenos
  if (!this.usuario.nombre || !this.usuario.email || !this.usuario.password || !this.usuario.id_tipo_usuario) {
      alert("Todos los campos son obligatorios");
      return; // No continúa si algún campo está vacío
  }

  delete this.usuario.id;
  
  this.authService.saveUsuario(this.usuario).subscribe(
      resp => {
          console.log(resp);
          this.router.navigate(['/pantalla-principal']);
      },
      err => console.error(err)
  );
}

}
