import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OroService } from '../oro.service';

@Component({
  selector: 'app-apuesta',
  templateUrl: './apuesta.component.html',
  styleUrls: ['./apuesta.component.css']
})
export class ApuestaComponent {
  title = 'adivinapuesta';

  aleatorio: number = this.numeroAleatorio();

  @Input () oro: number = 0;

  @Output()
  emiteOro = new EventEmitter<number>();

  onActualizarOro(){
    this.emiteOro.emit(this.oro);
  }
 
  oculto: number = this.numeroAleatorio();

  activado: boolean = true;

  deuda: number = 0;

  numeroAleatorio(): number{
    let aleatorio = Math.round(Math.random()*10);

    while(aleatorio < 1 || aleatorio > 10){
      aleatorio = Math.round(Math.random()*10);
    }
    
    return aleatorio;
  }

  activar(): void{
    if(this.activado == false && this.oro >= 200){
      // this.oro -= 200;
      this.oro = this._servicio.restarOro(this.oro, 200);
      
      this.activado = true;
      this.aleatorio = this.numeroAleatorio();
    }
  }

  desactivar(): void{
    if(this.activado == true){
      this.activado = false;
    }
  }

  botonArriba(): void{
    if(this.activado == true){
      if(this.aleatorio < 10){
        this.aleatorio += 1;
      }
    }
  }

  botonAbajo(): void{
    if(this.activado == true){
      if(this.aleatorio > 1){
        this.aleatorio -= 1;
      }
    }
  }

  elegir(): void{
    let diferencia = (this.oculto - this.aleatorio) * 100;

    if(this.activado == true){
      this.oro += Math.abs(diferencia);
      this.activado = false;
    }
  }

  pedirPrestamo(): void{
    this.oro += 200;
    this.deuda += 200;
  }

  pagarDeuda(): void{
    if(this.oro >= this.deuda){
      this.oro -= this.deuda;
      this.deuda = 0;
    } else {
      alert('No te alcanza');
    }
  }

  constructor(private _servicio: OroService){
    
  }
  
}
