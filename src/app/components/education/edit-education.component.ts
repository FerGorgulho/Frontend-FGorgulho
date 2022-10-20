import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {

  educac: Educacion = null;

  constructor(
    private educacion: EducacionService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacion.detail(id).subscribe(data =>{
      this.educac = data;
    }, err =>{
      alert("Error al modificar educación");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacion.update(id, this.educac).subscribe(data =>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar educación");
      this.router.navigate(['']);
    })
  }

}