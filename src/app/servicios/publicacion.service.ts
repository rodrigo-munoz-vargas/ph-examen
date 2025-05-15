import { Injectable } from '@angular/core';
import { Publicacion } from '../modelo/publicacion';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  constructor() { }

  getPlatillos():Publicacion[] {
    return [
      {titulo: "Porotos con riendas", descripcion: "desc 1", foto: "https://img-global.cpcdn.com/recipes/105771a9e774923b/1200x630cq70/photo.jpg"},
      {titulo: "Pastel de Choclo", descripcion: "desc 2", foto: "https://www.cocina-chilena.com/base/stock/Recipe/pastel-de-choclo-chileno/pastel-de-choclo-chileno_web.jpg.webp"},
      {titulo: "Humitas", descripcion: "desc 3", foto: "https://cocinachilena.cl/wp-content/uploads/2019/02/Humitas-receta-chilena-6-scaled.jpg"}
    ]
  }
}
