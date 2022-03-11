import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OroService {

  coso: number = 630;

  restarCoso(cuanto: number){
    this.coso -= cuanto;
    console.log('Comprado con ' + cuanto);
    console.log('Quedan ' + this.coso + ' de coso');
  }

  sumarCoso(cuanto: number){
    this.coso += cuanto;
    console.log('Comprado con ' + cuanto);
    console.log('Quedan ' + this.coso + ' de coso');
  }

  getCoso(){
    return this.coso;
  }

  constructor() { 
    console.log('Servicio de oro ' + this.coso)
  }
}
