export class User {
  private nombre:string;
  private indice: number;
  private sexo: string;

  constructor(nombre: string, indice: number, sexo: string){
    this.nombre=nombre;
    this.indice=indice;
    this.sexo=sexo;
  }

  public getNombre(): string{
    return this.nombre;
  }

  public getIndice(): number{
    return this.indice;
  }

  public getSexo(){
    return this.sexo;
  }
}
