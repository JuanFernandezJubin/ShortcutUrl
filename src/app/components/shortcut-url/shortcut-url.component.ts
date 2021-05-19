import { Component, OnInit } from '@angular/core';
import { ShortcutService } from 'src/app/services/shortcut.service';

@Component({
  selector: 'app-shortcut-url',
  templateUrl: './shortcut-url.component.html',
  styleUrls: ['./shortcut-url.component.css']
})
export class ShortcutUrlComponent implements OnInit {

  public nombreUrl: string = '';
  public urlShort: string = '';
  public urlProcesada: boolean = false;
  public loading: boolean = false;
  public mostrarError: boolean = false;
  public textError : string = '';
    
  constructor(private _shortcutService: ShortcutService) { }

  ngOnInit(): void {
  }

  procesarURL() {

    if(this.nombreUrl === '') {
      this.handleError('Por favor ingrese una url!');
      return;
    }

    this.urlProcesada = false;
    this.loading = true;
    setTimeout(() =>{
      this.obtenerUrlShort();
    },1400)
  }

  obtenerUrlShort(){
    this._shortcutService.getUrlShort(this.nombreUrl).subscribe(data => {
      console.log(data);
      this.urlProcesada = true;
      this.urlShort = data.link;
      this.loading = false;
    } , err =>{
      this.loading = false;
      this.nombreUrl = '';
      if(err.error.description === 'The value provided is invalid.'){
        this.handleError('La url es inválida.')
      }
    });
  }

  handleError(value: string){
    this.mostrarError = true;
    this.textError = value;
    setTimeout(() =>{
      this.mostrarError = false;
    },3000);
  } 

}
