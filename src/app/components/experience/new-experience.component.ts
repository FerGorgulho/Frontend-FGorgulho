import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {

    nombreE : string = '';
    dondeE: string = '';
    periodoE: string = '';
    descripcionE : string = '';
    logoE: string = '';

  constructor(
    private experiencia: ExperienciaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Experiencia(this.nombreE, this.dondeE, this.periodoE, this.descripcionE, this.logoE);
    this.experiencia.save(expe).subscribe(data=>{
      alert("Experiencia añandida");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    })
  }

}
