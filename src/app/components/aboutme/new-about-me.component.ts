import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutMe } from 'src/app/model/about-me';
import { AboutmeService } from 'src/app/services/aboutme.service';

@Component({
  selector: 'app-new-about-me',
  templateUrl: './new-about-me.component.html',
  styleUrls: ['./new-about-me.component.css']
})
export class NewAboutMeComponent implements OnInit {

  nombreA : string = '';
  descripcionA : string = '';
  imgA: string = '';

  constructor(
    private aboutMe: AboutmeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new AboutMe(this.nombreA, this.descripcionA, this.imgA);
    this.aboutMe.save(expe).subscribe(data=>{
      alert("Descripción añandida");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    })
  }
}
