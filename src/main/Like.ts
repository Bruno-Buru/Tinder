import { Perfil } from "./Perfil"

export class Like{

    private quienLoDio:Perfil
    private quienLoRecibio:Perfil
    private timeStamp:Date

    public setQuienLoDio(elQueLoDa:Perfil){
        this.quienLoDio=elQueLoDa
    }

    public getQuienLoDio():Perfil{
        return this.quienLoDio
    }

    public setQuienLoRecibio(elQueLoRecibio:Perfil){
        this.quienLoRecibio=elQueLoRecibio
    }

    public getQuienLoRecibio():Perfil{
        return this.quienLoRecibio
    }

    public setTimeStamp(unTime:Date){
        this.timeStamp=unTime
    }

    public getTimeStamp():Date{
        return this.timeStamp
    }

}