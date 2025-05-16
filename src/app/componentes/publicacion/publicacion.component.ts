import { Component, Input, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/modelo/publicacion';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class PublicacionComponent {
  @Input() publicacion: Publicacion // Propiedad de entrada para recibir datos

  constructor() { 
    this.publicacion = {} as Publicacion; // Inicializa la propiedad publicacion
  }

}
