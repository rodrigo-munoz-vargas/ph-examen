import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonList, IonItem, IonLabel,IonThumbnail, IonButton, IonIcon } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { Publicacion } from 'src/app/modelo/publicacion';
import { PublicacionComponent } from '../publicacion/publicacion.component';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons'

@Component({
  selector: 'app-listado-publicaciones',
  templateUrl: './listado-publicaciones.component.html',
  styleUrls: ['./listado-publicaciones.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, PublicacionComponent, IonList, IonItem, CommonModule,FormsModule]
})
export class ListadoPublicacionesComponent {
  @Input() publicaciones: Publicacion[] = [] // Array de publicaciones (entrada)
  @Output() publicacionEliminada = new EventEmitter<Publicacion>() // Evento de salida para eliminar

  constructor() { 
    addIcons({
      trashOutline // Añade icono de basura
    })
  }

  eliminarPublicacion(publicacion: Publicacion) {
    this.publicacionEliminada.emit(publicacion); // Emite evento con publicacion a eliminar
  }

}
