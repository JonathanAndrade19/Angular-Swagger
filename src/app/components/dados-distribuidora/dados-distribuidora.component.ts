import { Component, OnInit } from '@angular/core';
import { dadosDistribuidora } from 'src/app/models/dadosDistribuidora.model';
import { DadosDistribuidoraService } from 'src/app/services/dados-distribuidora.service';

@Component({
  selector: 'app-dados-distribuidora',
  templateUrl: './dados-distribuidora.component.html',
  styleUrls: ['./dados-distribuidora.component.css']
})
export class DadosDistribuidoraComponent implements OnInit {
    
  public page: number;
  public count: number;
  public tableSize: number;
  public tableSizes: Array<any> = [];
  public loading: boolean;

  public dadosDistri: any;
  public erro: any;
  constructor(private dadosDistribuidora: DadosDistribuidoraService) {
    this.getter();

    this.loading = false;
    this.page = 1;
    this.count = 0;
    this.tableSize = 5;
    this.tableSizes = [10, 15, 20, 25];
   }

  ngOnInit(): void {
    this.getter();
  }

  public getter(){
    this.dadosDistribuidora.getDadosDistribuidora().subscribe(
      (data: dadosDistribuidora) => {
        this.dadosDistri = data;
        this.loading = true;
        console.log('Os dados das Distribuidoras que recebemos', data);
        }, 
        (error: any) => {
          this.erro = error;
          console.log('Erro:', error);
        }
    );
  }

  public onTableDataChange(event: any){
    this.page = event;
    this.getter();
  }

  public onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getter();
  }
}
