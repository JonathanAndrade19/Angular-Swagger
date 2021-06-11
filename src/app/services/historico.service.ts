import { HttpClient } from '@angular/common/http';
import { Historico } from './../models/placeholder.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MethodsEnum } from '../enum/enum';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  constructor(private http: HttpClient) { }

  public getHitorico(): Observable<any> {
    return this.http.get(`https://combustivelapp.herokuapp.com/api/historico`);
  }

  public postPutHistorico(payload: Historico, method: string): Observable<Historico> {
    if (MethodsEnum.PUT === method) {
       return this.http.put<Historico>(`https://combustivelapp.herokuapp.com/api/historico`, payload);
    }
    return this.http.post<Historico>(`https://combustivelapp.herokuapp.com/api/historico`, payload);
  }

  public deleteHistorico(id: number): Observable<any>{
    return this.http.delete(`https://combustivelapp.herokuapp.com/api/historico/${id}`);
  }

  public getByIdHistorico(id: number): Observable<any>{
    return this.http.get(`https://combustivelapp.herokuapp.com/api/historico/${id}`);
  }

}
