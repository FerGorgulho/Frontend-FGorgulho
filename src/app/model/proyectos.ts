export class Proyectos {
    id? : number;
    nombreP : string;
    periodoP: string;
    descripcionP : string;
    projImaP: string;
    projLinkP: string;

    constructor(nombreP: string, periodoP: string, descripcionP: string, projImaP: string, projLinkP: string){
        this.nombreP= nombreP;
        this.periodoP = periodoP;
        this.descripcionP = descripcionP;
        this.projImaP = projImaP;
        this.projLinkP = projLinkP;
    }
}