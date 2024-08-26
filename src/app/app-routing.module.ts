import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';
import { PantallaPrincipalComponent } from './components/admin/pantalla-principal/pantalla-principal.component';
import { PagosComponent } from './components/admin/pagos/pagos.component';
import { InicioSesionComponent } from './components/admin/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './components/admin/registro/registro.component';
import { ProductsFormComponent } from './components/admin/products-form/products-form.component';
import { PantpriComponent } from './components/admin/productos/pantpri/pantpri.component';
import { CarritoComponent } from './components/admin/carrito/carrito.component';
import { CarritoVistaComponent } from './components/admin/carrito-vista/carrito-vista.component';
import { PantallaPrincipalClienteComponent } from './components/cliente/pantalla-principal-cliente/pantalla-principal-cliente.component';
import { PantallaPrincipalEmComponent } from './components/empleado/pantalla-principal-em/pantalla-principal-em.component';
import { AgregarProductosComponent } from './components/empleado/agregar-productos/agregar-productos.component';
import { PantallaProductosComponent } from './components/empleado/pantalla-productos/pantalla-productos.component';
import { ProductosClientComponent } from './components/cliente/productos-client/productos-client.component';
import { PantallaPrincipalInvComponent } from './components/invitados/pantalla-principal-inv/pantalla-principal-inv.component';
import { CarritoClienteComponent } from './components/cliente/carrito-cliente/carrito-cliente.component';
import { CarritoClienteVistaComponent } from './components/cliente/carrito-cliente-vista/carrito-cliente-vista.component';
import { FormUsersComponent } from './components/admin/form-users/form-users.component';
import { ViewUsersComponent } from './components/admin/view-users/view-users.component';
import { HistorialComprasComponent } from './components/cliente/historial-compras/historial-compras.component';
import { GestionVentasComponent } from './components/admin/gestion-ventas/gestion-ventas.component';
import { UserProfileComponent } from './components/admin/user-profile/user-profile.component';
import { UserProfileCliComponent } from './components/cliente/user-profile-cli/user-profile-cli.component';
import { GestionVentasEmComponent } from './components/empleado/gestion-ventas-em/gestion-ventas-em.component';
import { UserProfileEmComponent } from './components/empleado/user-profile-em/user-profile-em.component';
import { PantallaPrincipalProvComponent } from './components/proveedor/pantalla-principal-prov/pantalla-principal-prov.component';
import { ProductosProvComponent } from './components/proveedor/productos-prov/productos-prov.component';
import { UserProfileProvComponent } from './components/proveedor/user-profile-prov/user-profile-prov.component';

const routes: Routes = [
  // Rutas públicas
  {
    path: '',
    redirectTo: '/pantalla-principal-inv',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: InicioSesionComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  // Rutas admin
  {
    path: 'pantalla-principal',
    component: PantallaPrincipalComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 1 }
  },
  {
    path: 'pantalla-principal/:idC',
    component: PantallaPrincipalComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 1 }
  },
  {
    path: 'form-edit/edit/:id',
    component: ProductsFormComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 1 }
  },
  {
    path: 'pagos',
    component: PagosComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 1 }
  },
  {
    path: 'Form-products',
    component: ProductsFormComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 1 }
  },
  {
    path: 'carrito',
    component: CarritoComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 1 }
  },
  {
    path: 'carrito-vista',
    component: CarritoVistaComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 1 }
  },
  {
    path: 'Form-users',
    component: FormUsersComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 1 }
  },
  {
    path: 'users',
    component: ViewUsersComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 1 }
  },
  {
    path: 'edit-user/:id',
    component: FormUsersComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 1 }
  },
  {
    path: 'pantpri',
    component: PantpriComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 1 }
  },
  {
    path: 'pantpri/:idC',
    component: PantpriComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 1 }
  },
  {
    path: 'perfil',
    component: UserProfileComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 1 }
  },
  {
    path: 'historial-compras',
    component: HistorialComprasComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 4 }
  },
  {
    path: 'gestion-ventas',
    component: GestionVentasComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 1 }
  },
  // Rutas cliente
  {
    path: 'pantalla-principal-user',
    component: PantallaPrincipalClienteComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 4 }
  },
  {
    path: 'productos-user',
    component: ProductosClientComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 4 }
  },
  {
    path: 'productos-user/:idC',
    component: ProductosClientComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 4 }
  },
  {
    path: 'carrito-user',
    component: CarritoClienteComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 4 }
  },
  {
    path: 'carrito-vista-user',
    component: CarritoClienteVistaComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 4 }
  },
  {
    path: 'perfil-user',
    component: UserProfileCliComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 4 }
  },
  // Rutas empleado
  {
    path: 'pantalla-principal-em',
    component: PantallaPrincipalEmComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 2 }
  },
  {
    path: 'agregar-product',
    component: AgregarProductosComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 2 }
  },
  {
    path: 'form-products/edit/:id',
    component: AgregarProductosComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 2 }
  },
  {
    path: 'perfil-em',
    component: UserProfileEmComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 2 }
  },
  {
    path: 'productos',
    component: PantallaProductosComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 2 }
  },
  {
    path: 'productos/:idC',
    component: PantallaProductosComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 2 }
  },
  {
    path: 'gestion-ventas-em',
    component: GestionVentasEmComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 2 }
  },
  // Rutas proveedor
  {
    path: 'pantalla-principal-prov',
    component: PantallaPrincipalProvComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 3 }
  },
  {
    path: 'productos-prov',
    component: ProductosProvComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 3 }
  },
  {
    path: 'productos-prov/:idC',
    component: ProductosProvComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 3 }
  },
  {
    path: 'perfil-prov',
    component: UserProfileProvComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 3 }
  },
  // Rutas invitados
  {
    path: 'pantalla-principal-inv',
    component: PantallaPrincipalInvComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
