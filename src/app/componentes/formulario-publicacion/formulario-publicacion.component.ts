import { Component, EventEmitter, Output } from '@angular/core';
import { Publicacion } from 'src/app/modelo/publicacion';
import { IonHeader, IonToolbar, IonButtons, IonTitle, IonCard, IonCardContent, IonItem, IonInput, IonButton, IonBackButton, IonIcon, IonText, IonImg } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { addIcons } from 'ionicons';
import { cameraOutline } from 'ionicons/icons';

@Component({
  selector: 'app-formulario-publicacion',
  templateUrl: './formulario-publicacion.component.html',
  styleUrls: ['./formulario-publicacion.component.scss'],
  standalone: true,
  imports: [IonImg, IonText, CommonModule, IonIcon, IonBackButton, IonHeader, IonToolbar, IonButtons, IonTitle, IonCard, IonButton, IonCardContent, IonItem, IonInput, IonButton, FormsModule]
})
export class FormularioPublicacionComponent {
  // Objeto que almacena los datos de la publicacion, vinculado con los campos del formulario
  publicacion: Publicacion = {
    descripcion: '',
    titulo: '',
    foto: undefined
  };

  // Evento que permite comunicar al componente padre cuando se agrega una nueva publicacion
  @Output() publicacionAgregada = new EventEmitter<Publicacion>();

  async tomarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera
      })
      
      this.publicacion.foto = image.base64String
    } catch (error) {
      console.error('Error al tomar foto:', error)
    }
  }

  constructor() { 
    addIcons({
    cameraOutline
  });
  }

  agregarPublicacion() {
    // Emite el evento con los datos de la publicacion actual
    this.publicacionAgregada.emit(this.publicacion)
    this.publicacion = {
      descripcion: '',
      titulo: ''
    };
  }

}
