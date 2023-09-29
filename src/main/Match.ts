import { Like } from "./Like"

export class Match{

    private likes:Like[]
    private timeStamp:Date

    constructor(){
        this.likes=[]
    }

    public getLikes():Like[]{
        return this.likes
    }

    public setTimeStamp(unTime:Date){
        this.timeStamp=unTime
    }

    public getTimeStamp():Date{
        return this.timeStamp
    }

    public agregarLikes(unLike:Like){
        this.likes.push(unLike)
    }

    public cantDeLikes(){
        return this.likes.length
    }

}