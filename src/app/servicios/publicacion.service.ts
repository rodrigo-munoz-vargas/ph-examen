import { Injectable } from '@angular/core';
import { Publicacion } from '../modelo/publicacion';
import { Preferences } from '@capacitor/preferences';

// Servicio para manejar publicaciones con persistencia local
@Injectable({
  providedIn: 'root' // Disponible en toda la app
})
export class PublicacionService {
  publicaciones: Publicacion[] = [] // Almacena publicaciones en memoria

  constructor() {
    this.cargarPublicaciones(); // Carga publicaciones al iniciar
   }

  async cargarPublicaciones() {
    const { value } = await Preferences.get({ key: 'publicaciones' })
    console.log('Datos cargados:', value)
    if (value !== null) {
      this.publicaciones = JSON.parse(value)
    }
  }

  // Guarda publicaciones en almacenamiento
  async guardarPublicaciones() {
    console.log('Guardando:', this.publicaciones)
    await Preferences.set({
      key: 'publicaciones',
      value: JSON.stringify(this.publicaciones),
    });
  }

  getPublicaciones():Publicacion[] {
    return this.publicaciones;
  }

  // Añade nueva publicación
  async agregarPublicacion(publicacion: Publicacion) {
    publicacion.id = this.publicaciones.length + 1;
    this.publicaciones.push(publicacion);
    await this.guardarPublicaciones();
  }

  // Elimina una publicación por ID
  async eliminarPublicacion(publicacion: Publicacion) {
    this.publicaciones = this.publicaciones.filter(p => p.id !== publicacion.id);
    await this.guardarPublicaciones();
  }

  // Borra las publicaciones
  async borrarCitas() {
    this.publicaciones = [];
    await this.guardarPublicaciones();
  }
}
