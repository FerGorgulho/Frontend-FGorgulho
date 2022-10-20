import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider, InterceptorService } from './services/interceptor.service';
import { FormsModule } from '@angular/forms';
import { NewAboutMeComponent } from './components/aboutme/new-about-me.component';
import { EditAboutmeComponent } from './components/aboutme/edit-aboutme.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { NewProjectComponent } from './components/projects/new-project.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { EditExerienceComponent } from './components/experience/edit-exerience.component';
import { EditProyectoComponent } from './components/projects/edit-proyecto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutmeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    LanguagesComponent,
    ProjectsComponent,
    FooterComponent,
    LoginComponent,
    PortfolioComponent,
    NewAboutMeComponent,
    EditAboutmeComponent,
    EditProyectoComponent,
    EditExerienceComponent,
    EditEducationComponent,
    NewProjectComponent,
    NewEducationComponent,
    NewExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ 
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
