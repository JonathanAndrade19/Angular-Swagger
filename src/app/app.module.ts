import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav' ;
import { MatCardModule } from '@angular/material/card' ;
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { RedDirective } from './directives/red.directive';
import { MatButtonModule } from '@angular/material/button';
import { CrudHistoricoComponent } from './components/crud-historico/crud-historico.component';
import { BaseMunicipioComponent } from './components/base-municipio/base-municipio.component';
import { DadosDistribuidoraComponent } from './components/dados-distribuidora/dados-distribuidora.component';
import { ValorCompraVendaComponent } from './components/valor-compra-venda/valor-compra-venda.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CadastroHistoricoComponent } from './components/crud-historico/cadastro-historico/cadastro-historico.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxCurrencyModule } from "ngx-currency";

@NgModule({
  declarations:  [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    RedDirective,
    CrudHistoricoComponent,
    BaseMunicipioComponent,
    DadosDistribuidoraComponent,
    ValorCompraVendaComponent,
    CadastroHistoricoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    NgxCurrencyModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
