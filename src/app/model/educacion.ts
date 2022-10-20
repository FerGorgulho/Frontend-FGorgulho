export class Educacion {
    id? : number;
    nombreEc : string;
    institucionEc: string;
    periodoEc: string;
    descripcionEc : string;
    logoEc: string;

    constructor(nombreEc: string, institucionEc: string, periodoEc: string, descripcionEc: string, logoEc: string){
        this.nombreEc = nombreEc;
        this.institucionEc = institucionEc;
        this.periodoEc = periodoEc;
        this.descripcionEc = descripcionEc;
        this.logoEc = logoEc;
    }
}