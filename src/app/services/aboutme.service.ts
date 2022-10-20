import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutMe } from '../model/about-me';

@Injectable({
  providedIn: 'root'
})
export class AboutmeService {

  expURL = 'https://backendfg.herokuapp.com/about/';

  constructor(
    private httpClient: HttpClient
    ) { }

  public lista(): Observable<AboutMe[]>{
    return this.httpClient.get<AboutMe[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<AboutMe>{
    return this.httpClient.get<AboutMe>(this.expURL + `detail/${id}`);
  } 

  public save(aboutMe: AboutMe): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', aboutMe);
  }

  public update(id: number, aboutMe: AboutMe): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, aboutMe);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}

