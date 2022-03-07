import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adivinapuesta';

  aleatorio: number = this.numeroAleatorio();

  oro: number = 0;

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
      this.oro -= 200;
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
  
}
