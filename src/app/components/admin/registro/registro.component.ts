import { Component, HostBinding } from '@angular/core';
import { Usuario } from '../../../models/Usuario';
import { AuthService } from '../../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  @HostBinding('class') classes = "row";

  usuario: Usuario = {
    id: 0,
    nombre: '',
    email: '',
    password: '',
    id_tipo_usuario: 0
  };

  edit: boolean = false;
  errorMessage: string = ''; // Variable para el mensaje de error

  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {}

  validateForm(): boolean {
    if (!this.usuario.nombre || !this.usuario.email || !this.usuario.password) {
      this.errorMessage = 'Todos los campos son obligatorios';
      return false;
    }
    return true;
  }

  saveNewUsuario() {
    if (this.validateForm()) {
      this.usuario.id_tipo_usuario = 4; // Asigna el tipo de usuario predeterminado
      delete this.usuario.id;

      this.authService.saveUsuario(this.usuario).subscribe(
        resp => {
          console.log(resp);
          this.router.navigate(['/login']);
        },
        err => console.error(err)
      );
    }
  }
}
