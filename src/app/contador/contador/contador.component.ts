import { Component } from '@angular/core';

@Component({
    selector:'app-contador',
    template: `
        <h1 class="title">{{titulo}}</h1>
        <h3>La base es: <strong>55</strong></h3>
        
        <button (click)="acumular(base)">+{{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(-base);">-{{base}}</button>   
    
    `
})

export class ContadorComponent{
  titulo:string = 'Contador App';
  numero:number = 55;
  base: number=5;

  acumular(valor:number){
    this.numero += valor;
  }

}