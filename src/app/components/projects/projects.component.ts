import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  proj: Proyectos[] = []; 



  constructor(
    private proyectosService: ProyectosService,
    private tokenService: TokenService
  ) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
   
  }

  toggleAdd(){
    console.log("toggleAdd");
  }

  cargarProyecto():void{
    this.proyectosService.lista().subscribe(data => (this.proj = data));
  }

  delete(id?: number){
    if(id != undefined){
      this.proyectosService.delete(id).subscribe(data =>{
        this.cargarProyecto();
      }, err => {
        alert("No se pudo borrar el proyecto");
      }
      )
    }
  }
}

