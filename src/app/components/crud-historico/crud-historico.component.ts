import { NotificationService } from './../../services/notification.service';
import { Historico } from './../../models/placeholder.model';
import { HistoricoService } from './../../services/historico.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-crud-historico',
  templateUrl: './crud-historico.component.html',
  styleUrls: ['./crud-historico.component.css']
})
export class CrudHistoricoComponent implements OnInit {

  public page: number;
  public count: number;
  public tableSize: number;
  public tableSizes: Array<any> = [];
  public loading: boolean;

  private _subscription!: Subscription;
  public isCadastro: boolean = false;
  public retornValue!: number;
  public historicos: any;
  public erro: any;
  public historicoslice: any;

  constructor(private crudHitorico: HistoricoService, private notification: NotificationService) { 
    this.getter();

    this.loading = false;
    this.page = 1;
    this.count = 0;
    this.tableSize = 5;
    this.tableSizes = [10, 15, 20, 25];
  }

  ngOnInit(): void {
  }
 
  public getter() {
    this.crudHitorico.getHitorico().subscribe(
      (data: Array<any>) => {
        this.historicos = data.sort(function (a, b) {
          return a.id - b.id;
        })
        this.historicos.reverse();
        this.loading = true;
      }, 
      (error: any) => {
        this.erro = error;
        console.log('Erro:', error);
      }
    );
  }

  public remove(id: number): void {
    this.crudHitorico.deleteHistorico(id).subscribe(
      (res) => {
        this.getter();
      }, 
      (error: any) => {
        this.getter();
      }
    );
  }

  public getById(id: number) {
    this.isCadastro = true;
    this.retornValue = id;
    this.notification.notification.emit();
  }

  public verificar() {
    this.isCadastro = true;
  }

  public fechar() {
    this.isCadastro = false;
  }

  public receiveCallParent(event: any): void {
    this.getter();
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
