import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { OroService } from './oro.service';
import { FotosService } from './fotos.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit{
  // @ViewChild('asListaNumeros', {static:false}) listaNum: any;

  @ViewChild('asListaFotos', {static: true}) listaFotos: any;
  
  oro: number = 0;

  fotos: any [] = this._servicioFotos.fotos;
  fotos2: any [] = []

  // coso: number = this._servicioOro.getCoso();

  recibirOro(oro: number){
    this.oro = oro;
  }

  restarCien(): void{
    this.oro = this._servicioOro.restarOro(this.oro, 100);
  }
  
  sumarCien(): void{
    this.oro = this._servicioOro.sumarOro(this.oro, 100);
    // console.log(this._servicioFotos.fotos[0].nombre)
    // console.log(this.fotos[0].nombre)
  }

  

  // mostrarFotos(): void{
  //   let listaFotos = this.listaFotos.nativeElement;

  //   // let contenedorDeFotos = this.Renderer2.createElement("div")
  //   // this.Renderer2.addClass(contenedorDeFotos, "contenedorDeFotos")
  //   // this.Renderer2.appendChild(listaFotos, contenedorDeFotos)


  //   for(let foto of this.fotos){
  //     let elementoLista = this.Renderer2.createElement('li');
  //     this.Renderer2.addClass(elementoLista, 'elementoLista')
  //     this.Renderer2.appendChild(listaFotos, elementoLista)

  //     let div = this.Renderer2.createElement('div')
  //     this.Renderer2.addClass(div, 'divElementoLista')
  //     this.Renderer2.setAttribute(div, 'id' , 'claseID' + foto.id)
  //     // this.Renderer2.addClass(div, 'claseID' + foto.id)
  //     this.Renderer2.appendChild(elementoLista, div)


  //     let elementoImagen = this.Renderer2.createElement('img')
  //     this.Renderer2.addClass(elementoImagen, "foto");
  //     this.Renderer2.addClass(elementoImagen, 'bloqueado')
  //     // this.Renderer2.setAttribute(elementoImagen, 'id', 'idImagen')
  //     // this.Renderer2.addClass(elementoImagen, 'claseID' + foto.id)
  //     this.Renderer2.setAttribute(elementoImagen, 'src', foto.link)
  //     this.Renderer2.appendChild(div, elementoImagen)

      
  //     let nombreFoto = this.Renderer2.createElement('span')
  //     let textoNombre = this.Renderer2.createText(foto.nombre)
  //     this.Renderer2.addClass(nombreFoto, 'nombreFoto')
  //     this.Renderer2.addClass(nombreFoto, 'pieDeFoto')
  //     this.Renderer2.appendChild(nombreFoto, textoNombre)
  //     this.Renderer2.appendChild(div, nombreFoto)

  //     let botonDetalles = this.Renderer2.createElement('button');
  //     let textoDetalles = this.Renderer2.createText('Detalles')
  //     this.Renderer2.addClass(botonDetalles, 'botonDetalles');
  //     this.Renderer2.addClass(botonDetalles, 'pieDeFoto')
  //     this.Renderer2.appendChild(botonDetalles, textoDetalles)
  //     this.Renderer2.appendChild(div, botonDetalles)

  //     let botonComprar = this.Renderer2.createElement('button');
  //     let textoComprar = this.Renderer2.createText('Comprar')
  //     this.Renderer2.addClass(botonComprar, 'botonComprar');
  //     this.Renderer2.addClass(botonComprar, 'pieDeFoto')
  //     // this.Renderer2.addClass(botonComprar, 'claseID' + foto.id)

  //     this.Renderer2.listen(botonComprar, 'click', this.desbloquearImagen)
  //     // botonComprar.addEventListener('click', this.desbloquearImagen)
  //     // this.Renderer2.listen(botonComprar, 'click', this.jaja)
  //     // this.Renderer2.setAttribute(botonComprar, 'click', 'jaja()')
  //     // this.Renderer2.setAttribute(botonComprar, 'click', 'desbloquearImagen()')
  //     // this.Renderer2.setProperty(botonComprar, '(click)', this.desbloquearImagen())
  //     // this.Renderer2.setAttribute(botonComprar, 'id', 'botComprar')
  //     this.Renderer2.appendChild(botonComprar, textoComprar)
  //     this.Renderer2.appendChild(div, botonComprar)

  //   }

  // }
  
  desbloquearImagen(indice: number): void{
    let imagenesBloqueadas = document.getElementsByClassName('foto')
    let idFoto: number = Number(imagenesBloqueadas[indice].id[6])-1

    console.log(idFoto)
    if(idFoto == indice){
      console.log(imagenesBloqueadas[indice])
      console.log(indice)
      imagenesBloqueadas[indice].className = 'foto'
    }
    
    // ¿ARRAY SOBRE 'imagenesBloqueadas O SOBRE this.fotos?'
    
    // EJEMPLO
    // Array.from(elementoImagen).forEach(function (elemento) {
    //   console.log(elemento)
    // });
    
    
  }
  
  constructor(private Renderer2: Renderer2, private _servicioOro:OroService, private _servicioFotos:FotosService) {

  }

  ngOnInit(): void {
  }

  // Este es el metodo que se ejecuta al final (ngOnInit a la inversa)
  ngAfterViewInit(): void {
    // this.mostrarFotos();
    // for(let foto of this.fotos){
    //   this.fotos2.push(foto)
    // }
  }

}
