import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class DetalhesPagamentoService {

  constructor(private http: HttpClient) { }

  salvar(detalhesPagamento: any): Observable<HttpResponse<string>> {
    return this.http
      .post(
        `${environment.apiUrl}/financeiro/clients`, 
        detalhesPagamento, 
        {
          headers: { "Content-Type": "application/json"},
          responseType: 'text',
          observe: 'response',
        }
      );
  }
}
