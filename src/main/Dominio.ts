import { CampoVariable } from "./CampoVariable"
import { TipoDePerfil } from "./TipoDePerfil"
import { TipoDeVinculacion } from "./TipoDeVinculacion.enum"

export class Dominio{

    private nombre:string
    private tipoDeVinculacion:TipoDeVinculacion
    private cantDeParticipantes:number
    private tipoDePerfiles:TipoDePerfil[]
    private camposVariable:CampoVariable[]
    

    constructor(){
        this.tipoDePerfiles=[]
        this.camposVariable=[]
    }

    public getTipoDePerfiles():TipoDePerfil[]{
        return this.tipoDePerfiles
    }

    public getCamposVariables():CampoVariable[]{
        return this.camposVariable
    }

    public setNombre(unNombre:string){
        this.nombre=unNombre
    }
    
    public getNombre():string{
        return this.nombre
    }

    public setTipoDeVinculacion(unaVinculacion:TipoDeVinculacion){
        this.tipoDeVinculacion=unaVinculacion
    }

    public getTipoDeVinculacion():TipoDeVinculacion{
        return this.tipoDeVinculacion
    }

    public setCantDeParticipantes(unParticipante:number){
        this.cantDeParticipantes=unParticipante
    }

    public getCantDeParticipantes():number{
        return this.cantDeParticipantes
    }
    
    public agregarTipoDePerfil(unPerfil:TipoDePerfil){
        this.tipoDePerfiles.push(unPerfil)
    }

    public cantTipoDePerfil(){
        return this.tipoDePerfiles.length
    }

    public agregarCampoVariable(unCampo:CampoVariable){
        this.camposVariable.push(unCampo)
    }

    public cantCamposVariables(){
        return this.camposVariable.length
    }
}