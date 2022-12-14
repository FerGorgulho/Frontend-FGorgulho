import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-edit-exerience',
  templateUrl: './edit-exerience.component.html',
  styleUrls: ['./edit-exerience.component.css']
})
export class EditExerienceComponent implements OnInit {

  expLab: Experiencia = null;

  constructor(
    private experiencia: ExperienciaService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experiencia.detail(id).subscribe(data =>{
      this.expLab = data;
    }, err =>{
      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.experiencia.update(id, this.expLab).subscribe(data =>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    })
  }

}
