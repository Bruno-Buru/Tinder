import { CampoVariable } from "./CampoVariable"
import { PosibleValor } from "./PosibleValor"

export class  RespuestaACampoVariable{

    private campoVariable: CampoVariable
    private posibleValor: PosibleValor

    public setCampoVariable(unCampo:CampoVariable){
        this.campoVariable=unCampo
    }

    public getCampoVariable():CampoVariable{
        return this.campoVariable
    }

    public setPosibleValor(unValor:PosibleValor){
        this.posibleValor=unValor
    }

    public getPosibleValor():PosibleValor{
        return this.posibleValor
    }

}