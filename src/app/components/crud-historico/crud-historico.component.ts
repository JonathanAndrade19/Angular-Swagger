import { Historico } from './../../models/placeholder.model';
import { HistoricoService } from './../../services/historico.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-historico',
  templateUrl: './crud-historico.component.html',
  styleUrls: ['./crud-historico.component.css']
})
export class CrudHistoricoComponent implements OnInit {
  
  historico: any;
  erro: any;
  constructor(private crudHitorico: HistoricoService) { 
    this.getter();
  }

  ngOnInit(): void {
  }

  getter(){
    this.crudHitorico.getHitorico().subscribe(
      (data: Historico) => {
      this.historico = data;
      console.log('O historico que recebemos', data);
      }, 
      (error: any) => {
        this.erro = error;
        console.log('Erro:', error);
      }
    );
  }
}
