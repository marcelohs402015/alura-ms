import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  dadosPessoaisFormGroup!: FormGroup;
  detalhesPagamentoFormGroup!: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.dadosPessoaisFormGroup = this.builder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.detalhesPagamentoFormGroup = this.builder.group({
      cpf: ['', [Validators.required, Validators.pattern(/\d{11}/)]],
      titular: ['', Validators.required],
      numero: ['', [Validators.required, Validators.pattern(/\d{14,16}/)]],
      dataExpiracao: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.pattern(/\d{3,4}/)]]
    });
  }

}
