import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { tap } from "rxjs/operators";
import { Curso } from "./curso";


@Injectable()
export class CursosService {

  constructor(private http: HttpClient) { }

  todos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(environment.apiUrl + '/academico/cursos');
  }

  assitir(curso: Curso) {
    curso.assistido = true;
    this.http
      .patch(`${environment.apiUrl}/academico/cursos/${curso.id}`, { assistido: true })
      .subscribe({ error: () => curso.assistido = false });
  }
}
