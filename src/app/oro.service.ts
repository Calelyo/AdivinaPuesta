import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OroService {

  oroValidoCompra(oro: number): boolean{
    return oro > 0;
  }

  oroValidoVenta(oro: number): boolean{
    return oro >= 0;
  }

  restarOro(oroActual: number, aRestar: number): number{
    if(this.oroValidoCompra(oroActual) && this.oroValidoCompra(aRestar)){
      // oroActual -= aRestar;
      return oroActual - aRestar;
    } else {
      return oroActual;
    }
  }

  sumarOro(oroActual: number, aRestar: number){
    if(this.oroValidoVenta(oroActual) && this.oroValidoVenta(aRestar)){
      return oroActual + aRestar;
    } else {
      return oroActual;
    }
  }

  constructor() { 

  }
}
