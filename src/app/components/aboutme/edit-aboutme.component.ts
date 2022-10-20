import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutMe } from 'src/app/model/about-me';
import { AboutmeService } from 'src/app/services/aboutme.service';

@Component({
  selector: 'app-edit-aboutme',
  templateUrl: './edit-aboutme.component.html',
  styleUrls: ['./edit-aboutme.component.css']
})
export class EditAboutmeComponent implements OnInit {

  about: AboutMe = null;

  constructor(
    private aboutMe: AboutmeService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.aboutMe.detail(id).subscribe(data =>{
      this.about = data;
    }, err =>{
      alert("Error al modificar descripción");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.aboutMe.update(id, this.about).subscribe(data =>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar la descripción");
      this.router.navigate(['']);
    })
  }

}
