export default interface IMapZone {
  name: string;
  UIName: string;
  image: string;
  description: string;
  area: IArea[];
}

interface IArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

export const IconDirection = {
  north: "arrow-up",
  northe: "arrow-up-right",
  northw: "arrow-up-left",
  east: "arrow-right",
  west: "arrow-left",
  south: "arrow-down",
  southe: "arrow-down-right",
  southw: "arrow-down-left" 
}

export interface IRoute {
  route: IPoint[];
  floor: number;
}

export interface IUserPos {
  pos: IPoint;
  floor: number;
}

export interface IPoint {
  x: number;
  y: number;
}

export interface IInstructions {
  distance: number;
  direction: string;
  point: IPoint;
}