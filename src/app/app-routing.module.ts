import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseMunicipioComponent } from './components/base-municipio/base-municipio.component';
import { CrudHistoricoComponent } from './components/crud-historico/crud-historico.component';
import { DadosDistribuidoraComponent } from './components/dados-distribuidora/dados-distribuidora.component';
import { ValorCompraVendaComponent } from './components/valor-compra-venda/valor-compra-venda.component';

import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"crud-historico",
    component: CrudHistoricoComponent
  },
  {
    path:"base-municipio",
    component: BaseMunicipioComponent
  },
  {
    path:"dados-distribuidora",
    component: DadosDistribuidoraComponent
  },
  {
    path:"valor-compra-venda",
    component: ValorCompraVendaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
