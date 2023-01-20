import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  dataPedidos = [
    {
      id: 1,
      nombre: 'Juan Perez',
      fecha: '2020-01-01',
      total: 1000,
      entregado: false
    },
    {
      id: 2,
      nombre: 'Maria Lopez',
      fecha: '2020-01-02',
      total: 2000,
      entregado: true
    },
    {
      id: 3,
      nombre: 'Pedro Martinez',
      fecha: '2020-01-03',
      total: 3000,
      entregado: true
    },
    {
      id: 4,
      nombre: 'Jose Gomez',
      fecha: '2020-01-04',
      total: 4000,
      entregado: false
    },
  ];
}
