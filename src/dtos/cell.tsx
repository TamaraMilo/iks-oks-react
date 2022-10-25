import { Coordinates } from "./coordinates";

export class CellModel{
    coordinates: Coordinates;
    played: boolean;
    simbol: string;
    selected: boolean;
    constructor(x: number, y: number)
    {
        this.coordinates = new Coordinates(x,y);
        this.played = false;
        this.simbol = "";
        this.selected = false;
    }
}