import { Coordinates } from "./coordinates";

export interface CellModel {
  coordinates?: Coordinates;
  played: boolean;
  simbol: string;
  selected: boolean;
}
