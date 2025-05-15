import { Component, Input, OnInit } from '@angular/core';
import { IonList, IonItem, IonLabel,IonThumbnail } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { Publicacion } from 'src/app/modelo/publicacion';

@Component({
  selector: 'app-listado-publicaciones',
  templateUrl: './listado-publicaciones.component.html',
  styleUrls: ['./listado-publicaciones.component.scss'],
  standalone: true,
  imports: [IonLabel, IonList, IonItem, IonThumbnail, CommonModule]
})
export class ListadoPublicacionesComponent  implements OnInit {

  @Input() publicaciones: Publicacion[] = []

  constructor() { }

  ngOnInit() {}

}
