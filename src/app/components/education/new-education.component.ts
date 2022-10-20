import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {

  nombreEc : string = '';
  institucionEc: string = '';
  periodoEc: string = '';
  descripcionEc : string = '';
  logoEc: string = '';

  constructor(
    private educacion: EducacionService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Educacion(this.nombreEc, this.institucionEc, this.periodoEc, this.descripcionEc, this.logoEc);
    this.educacion.save(expe).subscribe(data=>{
      alert("Educación añandida");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    })
  }

}
