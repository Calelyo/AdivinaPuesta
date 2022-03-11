import { Component, OnInit, Input, Output } from '@angular/core';
import { ApuestaComponent } from './apuesta/apuesta.component';
import { variablesGlobales } from './common/variablesGlobales';
import { OroService } from './oro.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit{

  // oro: number = variablesGlobales.oro;
  // @Input() oro: number = 0;

  oro: number = 0;

  coso: number = this._servicio.getCoso();

  procesarMiOutput(oro: number){
    this.oro = oro;
  }

  restarCoso(){
    this._servicio.restarCoso(100);
    this.coso -= 100;
  }

  sumarCoso(){
    this._servicio.sumarCoso(100);
    this.coso += 100;
  }

  comprar(): void{
    this.oro -= 100;
  }

  constructor(private _servicio:OroService) {
    // this.coso = _servicio.getCoso();
 }

  ngOnInit(): void {
  }

}
