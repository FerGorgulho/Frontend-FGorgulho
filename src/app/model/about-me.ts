export class AboutMe {
    id? : number;
    nombreA : string;
    descripcionA : string;
    imgA: string;

    constructor(nombreA: string, descripcionA: string, imgA: string){
        this.nombreA = nombreA;
        this.descripcionA = descripcionA;
        this.imgA = imgA;
    }
}

