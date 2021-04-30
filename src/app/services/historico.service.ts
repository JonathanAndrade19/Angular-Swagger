import { HttpClient } from '@angular/common/http';
import { Historico } from './../models/placeholder.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {


  constructor(private http: HttpClient) { }

  public getHitorico(): Observable<any> {
    return this.http.get(`https://combustivelapp.herokuapp.com/api/historico`);
  }
}
