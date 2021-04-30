import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosDistribuidoraService {

  constructor(private http: HttpClient) { }

  public getDadosDistribuidora(): Observable<any>{
    return this.http.get(`https://combustivelapp.herokuapp.com/api/combustivel/dados-agrupados-por-distribuidora`)
  }
}
