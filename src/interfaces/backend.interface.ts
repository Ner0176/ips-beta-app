import IMapZone from "./map.interface";

export interface IAuthResponse {
    token: string,
    email: string,
}

export interface IAddFavourite {
    email: string,
    zone: IMapZone
}

export interface IFindFavourite {
    email: string,
    zoneName: string;
}