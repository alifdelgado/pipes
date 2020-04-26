import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'cApItAn AmÉrIcA';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI: number = Math.PI;
  porcentaje = 0.234;
  salario = 1234.5;
  fecha: Date = new Date();
  idioma = 'es';
  video = 'https://www.youtube.com/embed/yaI6-uI0XrQ';
  valorPromesa = new Promise((resolve) => {
    setTimeout(() => {
    resolve('llego la data');
    }, 4500);
  });
  heroe = {
    nombre: 'Logan',
    clave: 'wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };
}
