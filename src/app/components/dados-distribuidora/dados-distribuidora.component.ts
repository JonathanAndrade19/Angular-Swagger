import { Component, OnInit } from '@angular/core';
import { dadosDistribuidora } from 'src/app/models/dadosDistribuidora.model';
import { DadosDistribuidoraService } from 'src/app/services/dados-distribuidora.service';

@Component({
  selector: 'app-dados-distribuidora',
  templateUrl: './dados-distribuidora.component.html',
  styleUrls: ['./dados-distribuidora.component.css']
})
export class DadosDistribuidoraComponent implements OnInit {

  dadosDistri: any;
  erro: any;
  constructor(private dadosDistribuidora: DadosDistribuidoraService) {
    this.getter();
   }

  ngOnInit(): void {
  }

  getter(){
    this.dadosDistribuidora.getDadosDistribuidora().subscribe(
      (data: dadosDistribuidora) => {
        this.dadosDistri = data;
        console.log('Os dados das Distribuidoras que recebemos', data);
        }, 
        (error: any) => {
          this.erro = error;
          console.log('Erro:', error);
        }
    );
  }
}
