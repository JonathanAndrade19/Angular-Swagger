import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompraVendaService {

  constructor(private http: HttpClient) { }

  public getCompraVenda(): Observable<any>{
    return this.http.get(`https://combustivelapp.herokuapp.com/api/combustivel/valor-media-compra-venda-municipio`);
  }
}
