import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CompraRoutingModule } from './compra-routing.module';
import { CompraComponent } from './compra.component';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { DadosPessoaisService } from './dados-pessoais/dados-pessoais.service';
import { DetalhesPagamentoComponent } from './detalhes-pagamento/detalhes-pagamento.component';
import { DetalhesPagamentoService } from './detalhes-pagamento/detalhes-pagamento.service';
import { FimComponent } from './fim/fim.component';


@NgModule({
  declarations: [
    CompraComponent,
    DadosPessoaisComponent,
    DetalhesPagamentoComponent,
    FimComponent
  ],
  imports: [
    CommonModule,
    CompraRoutingModule,
    MatStepperModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    HttpClientModule,
  ],
  providers: [
    DadosPessoaisService,
    DetalhesPagamentoService,
  ]
})
export class CompraModule { }
