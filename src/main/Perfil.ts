import { Dominio } from "./Dominio"
import { RespuestaACampoVariable } from "./RespuestaACampoVariable"
import { TipoDePerfil } from "./TipoDePerfil"

export class Perfil{

    private nombre:string
    private descripcion:string
    private foto:string
    private dominio:Dominio
    private tipoDePerfil:TipoDePerfil
    private coleccionDeRespuestas:RespuestaACampoVariable[]


    constructor(){
        this.coleccionDeRespuestas=[]
    }

    public getColeccionDeRespuestas():RespuestaACampoVariable[]{
        return this.coleccionDeRespuestas
    }
    
    
    

    public setNombre(unNombre:string){
        this.nombre=unNombre
    }
    
    public getNombre():string{
        return this.nombre
    }

    public setDescripcion(unaDescripcion:string){
        this.descripcion=unaDescripcion
    }

    public getDescripcion():string{
        return this.descripcion
    }

    public setFoto(unaFoto:string){
        this.foto=unaFoto
    }

    public getFoto():string{
        return this.foto
    }

    public setDominio(unDominio:Dominio){
        this.dominio=unDominio
    }

    public getDominio():Dominio{
        return this.dominio
    }

    public setTipoDePerfil(unTipoDePerfil:TipoDePerfil){
        this.tipoDePerfil=unTipoDePerfil
    }

    public getTipoDePerfil():TipoDePerfil{
        return this.tipoDePerfil
    }

    public agregarColeccionDeRespuestas(unaRespuesta:RespuestaACampoVariable){
        this.coleccionDeRespuestas.push(unaRespuesta)
    }
   
    public cantDeRespuestas(){
        return this.coleccionDeRespuestas.length
    }



}