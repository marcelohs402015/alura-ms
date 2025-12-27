import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { DetalhesPagamentoService } from './detalhes-pagamento.service';

@Component({
  selector: 'app-detalhes-pagamento',
  templateUrl: './detalhes-pagamento.component.html',
  styleUrls: ['./detalhes-pagamento.component.css']
})
export class DetalhesPagamentoComponent {
  @Input() 
  formGroup: FormGroup;
  @Input()
  stepper: MatStepper;
  @Input()
  email: string;
  @ViewChild('campoDataExpiracao')
  campoDataExpiracao: ElementRef;

  constructor(private service: DetalhesPagamentoService) { }

  nextStep() {
    const dadosFormulario = this.formGroup.value;
    const [ ano, mes ] = dadosFormulario.dataExpiracao.split('-');

    const detalhesPagamento = {
      clientDocument: dadosFormulario.cpf,
      cardOwnerFullName: dadosFormulario.titular,
      cardNumber: dadosFormulario.numero,
      cardExpirationMonth: mes,
      cardExpirationYear: ano,
      cardSecurityCode: dadosFormulario.cvv,
      email: this.email,
    };

    this.service
      .salvar(detalhesPagamento)
      .subscribe(response => response.status === 201 && this.stepper.next());
  }

  ngAfterViewInit(): void {
    const hoje = new Date();
    let mes: number|string = hoje.getMonth() + 1;
    if (mes < 10) {
      mes = `0${mes}`;
    }
    this.campoDataExpiracao.nativeElement.setAttribute('min', `${hoje.getFullYear()}-${mes}`);
  }
}

