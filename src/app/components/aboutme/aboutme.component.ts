import { Component, OnInit } from '@angular/core';
import { AboutMe } from 'src/app/model/about-me';
import { AboutmeService } from 'src/app/services/aboutme.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  about: AboutMe[] = []; 

  constructor(
    private aboutmeService: AboutmeService,
    private tokenService: TokenService,
  ) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarDescripcion();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
   
  }

  cargarDescripcion():void{
    this.aboutmeService.lista().subscribe(data => (this.about = data));
  }

  delete(id?: number){
    if(id != undefined){
      this.aboutmeService.delete(id).subscribe(data =>{
        this.cargarDescripcion();
      }, err => {
        alert("No se pudo borrar la descripción");
      }
      )
    }
  }
}

