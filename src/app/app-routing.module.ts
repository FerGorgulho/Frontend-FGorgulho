import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutmeComponent } from './components/aboutme/edit-aboutme.component';
import { NewAboutMeComponent } from './components/aboutme/new-about-me.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditExerienceComponent } from './components/experience/edit-exerience.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NewProjectComponent } from './components/projects/new-project.component';


const routes: Routes = [

  { path: '', component: PortfolioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienceComponent},
  { path: 'nuevaeduc', component: NewEducationComponent},
  { path: 'nuevoproj', component: NewProjectComponent},
  { path: 'nuevadesc', component: NewAboutMeComponent},
  { path: 'editexp/:id', component: EditExerienceComponent},
  { path: 'editeduc/:id', component: EditEducationComponent},
  { path: 'editdesc/:id', component: EditAboutmeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
