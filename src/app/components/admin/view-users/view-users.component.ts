import { Component, HostBinding } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { ActivatedRoute } from '@angular/router';
import { CargarScriptsService } from '../../../cargar-scripts.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent {
  @HostBinding('class') classes = 'row';
  usuarios: any = [];
  tipoUsuarioId: string = '';

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private _CargaScripts: CargarScriptsService
  ) {
    _CargaScripts.Carga(["menu/menu"]);
  }

  ngOnInit() {
    this.getUsuarios();  //Carga los usuarios al iniciar la página
  }

  getUsuarios() {
    this.authService.getUsuarios().subscribe(
      resp => {
        this.usuarios = resp;
      },
      err => console.log(err)
    );
  }

  searchByTipoUsuario() {
    if (this.tipoUsuarioId) {
      this.authService.getUsuariosByTipoUsuario(this.tipoUsuarioId).subscribe(
        resp => {
          this.usuarios = resp;
        },
        err => console.log(err)
      );
    } else {
      this.getUsuarios(); // Si no se proporciona un tipo de usuario, muestra todos los usuarios
    }
  }

  deleteUsuario(id: string) {
    console.log(id);
    this.authService.deleteUsuario(id).subscribe(
      resp => {
        console.log(resp);
        this.getUsuarios();
      },
      err => console.log(err)
    );
  }
}
