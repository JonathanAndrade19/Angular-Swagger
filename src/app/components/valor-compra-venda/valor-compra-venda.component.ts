import { CompraVenda } from './../../models/valorCompraVenda.model';
import { Component, OnInit } from '@angular/core';
import { CompraVendaService } from 'src/app/services/compra-venda.service';

@Component({
  selector: 'app-compra-venda',
  templateUrl: './valor-compra-venda.component.html',
  styleUrls: ['./valor-compra-venda.component.css']
})
export class ValorCompraVendaComponent implements OnInit {
  public page: number;
  public count: number;
  public tableSize: number;
  public tableSizes: Array<any> = [];
  public loading: boolean;
  public valorcompraVenda: any;
  public erro: any;

  constructor(private compraVenda: CompraVendaService) { 
    this.getter();

    this.loading = false;
    this.page = 1;
    this.count = 0;
    this.tableSize = 5;
    this.tableSizes = [6, 9, 12, 15];
   }

  ngOnInit(): void {
    this.getter();
  }

  public getter(){
    this.compraVenda.getCompraVenda().subscribe(
      (data: CompraVenda) => {
        this.valorcompraVenda = data;
        this.loading = true;
        console.log('O valor de Compra e venda que recebemos', data);
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
