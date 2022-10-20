import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  nombreP : string = '';
  periodoP: string = '';
  descripcionP : string = '';
  projImaP: string = '';
  projLinkP: string = '';

  constructor(
    private proyectos: ProyectosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Proyectos(this.nombreP, this.periodoP, this.descripcionP, this.projImaP, this.projLinkP);
    this.proyectos.save(expe).subscribe(data=>{
      alert("Proyecto añandido");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    })
  }

}
