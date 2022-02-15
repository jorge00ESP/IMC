import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  @Input('nombre') nombre:string;
  @Input('sexo') sexo:string;
  @Input('altura') altura:number;
  @Input('peso') peso:number;

  @Output() usuarioOutput=new EventEmitter<User>();

  private alturaFin: number=0;
  public indice: number=0;
  public usuario?: User;

  constructor() {
    this.nombre="";
    this.sexo="";
    this.altura=150;
    this.peso=50;
   }

  ngOnInit(): void {

  }

  public calcular(){

    this.alturaFin=(this.altura/100)*(this.altura/100);
    this.indice=this.peso/this.alturaFin;

    this.usuario=new User(this.nombre, this.indice, this.sexo);
    this.usuarioOutput.emit(this.usuario);

    console.log("Usuario enviado"+" "+this.usuario.getNombre());
    console.log(this.usuario+" desde la calculadora");
  }

  public valores(numero:number, buleano:boolean){
    if(buleano){
      this.peso=this.peso+numero;
    }else if(!buleano){
      this.altura=this.altura+numero;
    }
  }

  public reset(){
    this.peso=50;
    this.altura=150;
  }

  onKey(event: any) {
    const inputValue = event.target.value;
    this.nombre=inputValue;
  }

}
