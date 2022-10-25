

export class Coordinates
{
    x:number;
    y:number
    constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
    }   
    index(): number
    {
        return this.x*3 + this.y;
    }
}