import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  persona: persona = new persona("","","");
  
  nombre = 'Fernanda';
  apellido = 'Gorgulho';
  ocupation = 'Developer, Fullstack, Freelancer, Designer';

  //pers: persona[] = [];
  //pers: any;

  constructor(
    public personaService: PersonaService,
  //  private tokenService: TokenService
  ) { }
  
  isLogged = false;

 ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }


// ngOnInit(): void {
//  this.cargarPersona();
//  if(this.tokenService.getToken()){
//    this.isLogged=true;
//  }else{
//    this.isLogged=false;
//  }
 
 }


//cargarPersona():void{
//  this.personaService.getPersona().subscribe(data => (this.pers = data));
//  console.log(this.pers);
//}

//delete(id?: number){
//  if(id != undefined){
//    this.personaService.delete(id).subscribe(data =>{
//      this.cargarPersona();
//    }, err => {
//      alert("No se pudo borrar la persona");
//    }
//    )
//  }
//}

//}
