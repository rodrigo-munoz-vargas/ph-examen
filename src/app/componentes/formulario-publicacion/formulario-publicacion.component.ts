import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Publicacion } from 'src/app/modelo/publicacion';
import { IonHeader, IonToolbar, IonButtons, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput, IonButton, IonBackButton, IonIcon, IonText } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-publicacion',
  templateUrl: './formulario-publicacion.component.html',
  styleUrls: ['./formulario-publicacion.component.scss'],
  standalone: true,
  imports: [IonText, IonText, CommonModule, IonIcon, IonBackButton, IonHeader, IonToolbar, IonButtons, IonTitle, IonCard, IonCardHeader, IonButton, IonCardTitle, IonCardContent, IonItem, IonInput, IonButton, FormsModule]
})
export class FormularioPublicacionComponent {
  // Objeto que almacena los datos de la publicacion, vinculado con los campos del formulario
  publicacion: Publicacion = {
    descripcion: '',
    titulo: ''
  };

  // Evento que permite comunicar al componente padre cuando se agrega una nueva publicacion
  @Output() publicacionAgregada = new EventEmitter<Publicacion>();

  constructor() { }

  agregarPublicacion() {
    // Emite el evento con los datos de la publicacion actual
    this.publicacionAgregada.emit(this.publicacion);
    this.publicacion = {
      descripcion: '',
      titulo: ''
    };
  }

}
