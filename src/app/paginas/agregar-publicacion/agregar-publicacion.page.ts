import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { Publicacion } from 'src/app/modelo/publicacion';
import { PublicacionService } from 'src/app/servicios/publicacion.service';
import { FormularioPublicacionComponent } from "../../componentes/formulario-publicacion/formulario-publicacion.component";
import { ListadoPublicacionesComponent } from "../../componentes/listado-publicaciones/listado-publicaciones.component";

@Component({
  selector: 'app-agregar-publicacion',
  templateUrl: './agregar-publicacion.page.html',
  styleUrls: ['./agregar-publicacion.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, FormularioPublicacionComponent, ListadoPublicacionesComponent]
})
export class AgregarPublicacionPage implements OnInit {
  publicaciones: Publicacion[] = [] // Almacena el listado publicaciones

  constructor(private publicacionService:PublicacionService) { }

  // Carga inicial de publicaciones desde el servicio
  ngOnInit() {
    this.publicaciones = this.publicacionService.getPublicaciones()
  }

  // Agregar una nueva publicación
  async agregarPublicacion(publicacion: Publicacion) {
    this.publicacionService.agregarPublicacion(publicacion)
    this.publicaciones = this.publicacionService.getPublicaciones()
  }

  // Elimina una publicación existente
  async eliminarPublicacion(publicacion: Publicacion) {
    this.publicacionService.eliminarPublicacion(publicacion)
    this.publicaciones = this.publicacionService.getPublicaciones()
  }

}
