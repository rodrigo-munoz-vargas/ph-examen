import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonModal, IonButton } from '@ionic/angular/standalone';
import { IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { ListadoPublicacionesComponent } from "../../componentes/listado-publicaciones/listado-publicaciones.component";
import { PublicacionService } from 'src/app/servicios/publicacion.service';
import { Publicacion } from 'src/app/modelo/publicacion';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonButton, IonModal, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonFab, IonFabButton, IonIcon, RouterModule, ListadoPublicacionesComponent]
})
export class InicioPage implements OnInit {

  publicacionService:PublicacionService
  publicaciones:Publicacion[] = []
  isModalOpen = false;
  publicacionAEliminar?: Publicacion;

  constructor(publicacionService:PublicacionService) {
    this.publicacionService = publicacionService
    addIcons({add});
   }

  async ngOnInit() {
    await this.publicacionService.cargarPublicaciones();
    this.publicaciones = this.publicacionService.getPublicaciones();
  }
  
  async ionViewWillEnter() {  // Se ejecuta cada vez que se entra a la página
  this.publicaciones = await this.publicacionService.getPublicaciones()
  }

  // Elimina una publicación existente
  async eliminarPublicacion(publicacion: Publicacion) {
    this.publicacionService.eliminarPublicacion(publicacion)
    this.publicaciones = this.publicacionService.getPublicaciones()
  }
  
  abrirModalConfirmacion(publicacion: Publicacion) {
    this.publicacionAEliminar = publicacion;
    this.isModalOpen = true;
  }

// Este método confirma la eliminación
  confirmarEliminacion() {
    if (this.publicacionAEliminar) {
      this.eliminarPublicacion(this.publicacionAEliminar); // Usa tu método existente
      this.isModalOpen = false;
    }
  }
}
