import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/Usuario';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  API_URI = 'https://srv-ronaldo-production.up.railway.app/api/usuario'; //Servidor Back end
  constructor(private http: HttpClient, private router : Router) {}

  
  getUsuarios() {
    return this.http.get(`${this.API_URI}`);
  }

  getUsuariosByTipoUsuario(tipoUsuarioId: string) {
    return this.http.get(`${this.API_URI}/tipo_usuario/${tipoUsuarioId}`);
  }

  saveUsuario(usuario: Usuario) {
    return this.http.post(`${this.API_URI}/`, usuario);
  }

  getUsuario(id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  deleteUsuario(id: string) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }

  updateUsuario(id: string | number, updateUsuario: Usuario) {
    return this.http.put(`${this.API_URI}/${id}`, updateUsuario);
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.API_URI}/login`, { email, password })
      .subscribe({
        next: (user) => {
          localStorage.setItem('user', JSON.stringify(user));
          this.redirectUser(user.tipo_usuario);
        },
        error: (err) => {
          console.error('Login failed', err);
          window.alert('Usuario o contraseña incorrectos');
        }
      });
  }

  redirectUser(tipoUsuario: any) {
    switch (tipoUsuario) {
      case '1':
      case 1:
        console.log('Redirigiendo a /pantalla-principal');
        this.router.navigate(['/pantalla-principal']);
        break;
      case '2':
      case 2:
        this.router.navigate(['/pantalla-principal-em']);
        break;
      case '3':
      case 3:
        this.router.navigate(['/pantalla-principal-prov']);
        break;
      case '4':
      case 4:
        this.router.navigate(['/pantalla-principal-user']);
        break;
      default:
        this.router.navigate(['/login']);
        break;
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}