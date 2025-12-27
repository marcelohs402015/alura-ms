import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { DadosPessoaisService } from './dados-pessoais.service';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent {
  @Input() 
  formGroup: FormGroup;
  @Input()
  stepper: MatStepper;

  constructor(private service: DadosPessoaisService) { }

  nextStep() {
    this.service.salvar(this.formGroup.value)
      .subscribe(response => response.status === 201 && this.stepper.next());
  }
}
