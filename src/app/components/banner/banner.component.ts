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

  constructor(
    public personaService: PersonaService,
  ) { }
  
  isLogged = false;

 ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }
 
 }



