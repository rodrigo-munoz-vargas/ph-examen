import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { ListadoPublicacionesComponent } from "../../componentes/listado-publicaciones/listado-publicaciones.component";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonFab, IonFabButton, IonIcon, RouterModule, ListadoPublicacionesComponent]
})
export class InicioPage implements OnInit {

  constructor() {
    addIcons({ add });
   }

  ngOnInit() {
  }

}
