import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
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
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonFab, IonFabButton, IonIcon, RouterModule, ListadoPublicacionesComponent]
})
export class InicioPage implements OnInit {

  publicacionService:PublicacionService
  publicaciones:Publicacion[] = []

  constructor(publicacionService:PublicacionService) {
    this.publicacionService = publicacionService
    addIcons({ add })
   }

  ngOnInit() {
    if( this.publicacionService != undefined) {
      this.publicaciones = this.publicacionService.getPublicaciones()
    }
  }

}
