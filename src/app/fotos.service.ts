import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  // id: number;

  // link: string;

  // nombre: string;

  // descripcion: string;

  // costo: number;
  
  // id: number;
  // link: string;
  // nombre: string;
  // descripcion: string;
  // costo: number;
  fotos: {
    id: number;
    link: string;
    nombre: string;
    descripcion: string;
    costo: number;
    comprado: boolean
  }[] = 
      [
        {id: 1, link: "assets/img/0.jpg", nombre: "La Planta", descripcion: "descripcion1", costo: 100, comprado: false},
        {id: 2, link: "assets/img/1.jpg", nombre: "Pinturas", descripcion: "descripcion2", costo: 150, comprado: false},
        {id: 3, link: "assets/img/2.jpg", nombre: "Fueguito", descripcion: "descripcion3", costo: 100, comprado: false},
        {id: 4, link: "assets/img/3.jpg", nombre: "De Espaldas", descripcion: "descripcion4", costo: 100, comprado: false},
        {id: 5, link: "assets/img/4.jpg", nombre: "La Mano", descripcion: "descripcion5", costo: 100, comprado: false},
        {id: 6, link: "assets/img/5.jpg", nombre: "Flores", descripcion: "descripcion6", costo: 100, comprado: false}
      ]

  // [] = {
  //   id: 1, link: "link1", nombre: "nombre1", descripcion: "descripcion1", costo: 100, comprado: false
  // 1, "link1", "nombre1", "descripcion1", 100, false
  // }
  // [2, "link2", "nombre2", "descripcion2", 100, false],
  // [3, "link3", "nombre3", "descripcion3", 100, false],
  // [4, "link4", "nombre4", "descripcion4", 100, false],
  // [5, "link5", "nombre5", "descripcion5", 100, false],
  // [6, "link6", "nombre6", "descripcion6", 100, false]

  // constructor(id: number, link: string, nombre: string, descripcion: string, costo: number) {
  //   this.id = id;
  //   this.link = link;
  //   this.nombre = nombre;
  //   this.descripcion = descripcion;
  //   this.costo = costo;
  // }

  constructor(){

  }

  // fotos: FotosService [] = new FotosService<>
}
