export class Experiencia {
    id? : number;
    nombreE : string;
    dondeE: string;
    periodoE: string;
    descripcionE : string;
    logoE: string;

    constructor(nombreE: string, dondeE: string, periodoE: string, descripcionE: string, logoE: string){
        this.nombreE = nombreE;
        this.dondeE = dondeE;
        this.periodoE = periodoE;
        this.descripcionE = descripcionE;
        this.logoE = logoE;
    }
}





