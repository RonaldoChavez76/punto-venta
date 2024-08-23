import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../../../models/Usuario';
import { CargarScriptsService } from '../../../cargar-scripts.service';

@Component({
  selector: 'app-user-profile-em',
  templateUrl: './user-profile-em.component.html',
  styleUrl: './user-profile-em.component.css'
})
export class UserProfileEmComponent implements OnInit {
  usuario: Usuario = {
    id: 0,
    nombre: '',
    email: '',
    password: '',
    id_tipo_usuario: 0
  };

  constructor(private authService: AuthService, private router: Router, private _CargaScripts: CargarScriptsService) {
    _CargaScripts.Carga(["menu/menu"]);
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.authService.getUsuario(user.id).subscribe(
      (data: any) => {
        this.usuario = data;
      },
      (error) => {
        console.error('Error al obtener los datos del usuario', error);
      }
    );
  }

  updateUsuario(): void {
    if (this.usuario.id !== undefined) {
      this.authService.updateUsuario(this.usuario.id, this.usuario).subscribe(
        (res: any) => {
          console.log('Usuario actualizado con éxito', res);
          this.router.navigate(['/pantalla-principal-em']); // Redirige a la página deseada
        },
        (error) => {
          console.error('Error al actualizar el usuario', error);
        }
      );
    } else {
      console.error('El ID del usuario es undefined. No se puede actualizar el usuario.');
    }
  }

  onLogout() {
    this.authService.logout();
  }
}
