import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  datos = [
    {
      Apellido: 'Arcila',
      Casado: false,
      Dirección: 'Calle 35 #43 28',
      Nombre: 'Diego',
      Teléfono: 3859720,
    },
    {
      Apellido: 'Bueno',
      Casado: false,
      Dirección: 'CR 16A # 53 28',
      Nombre: 'Kevin',
      Teléfono: 31485579954,
    },
    {
      Apellido: 'Palomino',
      Casado: false,
      Dirección: 'CR 25 # 52 33',
      Noóre: 'Natalia',
      Teléfono: 32255945555,
    },
  ];
}
