import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantallaPrincipalComponent } from './components/admin/pantalla-principal/pantalla-principal.component';
import { PagosComponent } from './components/admin/pagos/pagos.component';
import { InicioSesionComponent } from './components/admin/inicio-sesion/inicio-sesion.component';
import { CargarScriptsService } from './cargar-scripts.service';
import { RegistroComponent } from './components/admin/registro/registro.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductosService } from './service/productos.service';
import { ProductsFormComponent } from './components/admin/products-form/products-form.component';
import { PantpriComponent } from './components/admin/productos/pantpri/pantpri.component';
import { CarritoComponent } from './components/admin/carrito/carrito.component';
import { CarritoVistaComponent } from './components/admin/carrito-vista/carrito-vista.component';
import { PantallaPrincipalClienteComponent } from './components/cliente/pantalla-principal-cliente/pantalla-principal-cliente.component';
import { PantallaPrincipalEmComponent } from './components/empleado/pantalla-principal-em/pantalla-principal-em.component';
import { PantallaProductosComponent } from './components/empleado/pantalla-productos/pantalla-productos.component';
import { AgregarProductosComponent } from './components/empleado/agregar-productos/agregar-productos.component';
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



@NgModule({
  declarations: [
    AppComponent,
    PantallaPrincipalComponent,
    PagosComponent,
    InicioSesionComponent,
    RegistroComponent,
    ProductsFormComponent,
    PantpriComponent,
    CarritoComponent,
    CarritoVistaComponent,
    PantallaPrincipalClienteComponent,
    PantallaPrincipalEmComponent,
    PantallaProductosComponent,
    AgregarProductosComponent,
    ProductosClientComponent,
    PantallaPrincipalInvComponent,
    CarritoClienteComponent,
    CarritoClienteVistaComponent,
    FormUsersComponent,
    ViewUsersComponent,
    HistorialComprasComponent,
    GestionVentasComponent,
    UserProfileComponent,
    UserProfileCliComponent,
    GestionVentasEmComponent,
    UserProfileEmComponent,
    PantallaPrincipalProvComponent,
    ProductosProvComponent,
    UserProfileProvComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CargarScriptsService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
