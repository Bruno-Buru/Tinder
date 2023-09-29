import { PosibleValor } from "./PosibleValor"

export class CampoVariable{

    private nombre:string
    private posiblesValores:PosibleValor[]
    private campoObligatorio:boolean

    constructor(){
        this.posiblesValores=[]
    }

    public getPosiblesValore():PosibleValor[]{
        return this.posiblesValores
    }

    public setNombre(unNombre:string){
        this.nombre=unNombre
    }
    
    public getNombre():string{
        return this.nombre
    }

    public setcampoObligatorio(unCampo:boolean){
        this.campoObligatorio=unCampo
    }

    public getCampoObligatorio():boolean{
        return this.campoObligatorio
    }

    public agregarPosiblesValor(unValor:PosibleValor){
        this.posiblesValores.push(unValor)
    }

    public cantDePosiblesValores(){
        return this.posiblesValores.length
    }

}