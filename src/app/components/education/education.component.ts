import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {


  educ: Educacion[] = []; 

  constructor(
    private educacionService: EducacionService,
    private tokenService: TokenService
  ) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
   
  }


  cargarEducacion():void{
    this.educacionService.lista().subscribe(data => (this.educ = data));
  }

  delete(id?: number){
    if(id != undefined){
      this.educacionService.delete(id).subscribe(data =>{
        this.cargarEducacion();
      }, err => {
        alert("No se pudo borrar la educación");
      }
      )
    }
  }
}
