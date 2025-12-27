import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";

import { AreaLogadaRoutingModule } from './area-logada-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { CursosService } from "./cursos/cursos.service";
import { RequestInterceptorService } from "./request-interceptor.service";
import { HeaderComponent } from './header/header.component';
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
  declarations: [
    CursosComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AreaLogadaRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTooltipModule,
  ],
  providers: [
    CursosService,
    RequestInterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true,
    }
  ]
})
export class AreaLogadaModule { }
