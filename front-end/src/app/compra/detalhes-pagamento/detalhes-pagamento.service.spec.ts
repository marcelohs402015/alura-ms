import { TestBed } from '@angular/core/testing';

import { DetalhesPagamentoService } from './detalhes-pagamento.service';

describe('DetalhesPagamentoService', () => {
  let service: DetalhesPagamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalhesPagamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
