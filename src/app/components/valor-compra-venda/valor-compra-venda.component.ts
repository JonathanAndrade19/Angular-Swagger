import { CompraVenda } from './../../models/valorCompraVenda.model';
import { Component, OnInit } from '@angular/core';
import { CompraVendaService } from 'src/app/services/compra-venda.service';

@Component({
  selector: 'app-compra-venda',
  templateUrl: './valor-compra-venda.component.html',
  styleUrls: ['./valor-compra-venda.component.css']
})
export class ValorCompraVendaComponent implements OnInit {
  
  valorcompraVenda: any;
  erro: any;
  constructor(private compraVenda: CompraVendaService) { 
    this.getter();
   }

  ngOnInit(): void {
  }

  getter(){
    this.compraVenda.getCompraVenda().subscribe(
      (data: CompraVenda) => {
        this.valorcompraVenda = data;
        console.log('O valor de Compra e venda que recebemos', data);
        }, 
        (error: any) => {
          this.erro = error;
          console.log('Erro:', error);
        }
    );
  }
}
