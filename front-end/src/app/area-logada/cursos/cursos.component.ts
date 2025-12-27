import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { CursosService } from "./cursos.service";
import { Curso } from "./curso";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursosAsync: Observable<Curso[]>;

  constructor(private service: CursosService) { }

  ngOnInit(): void {
    this.cursosAsync = this.service.todos();
  }

  assistir(curso: Curso) {
    this.service.assitir(curso);
  }
}
