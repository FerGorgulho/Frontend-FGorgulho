import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  projecto: Proyectos = null;

  constructor(
    private proyectos: ProyectosService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectos.detail(id).subscribe(data =>{
      this.projecto = data;
    }, err =>{
      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectos.update(id, this.projecto).subscribe(data =>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    })
  }
}
