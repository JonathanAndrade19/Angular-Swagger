import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseMunicipioService {

  constructor(private http: HttpClient) { }

  public getBaseMunicipio(municipio: string): Observable<any> {
    return this.http.get(`https://combustivelapp.herokuapp.com/api/combustivel/media-de-preco/${municipio}`);
  }

}
