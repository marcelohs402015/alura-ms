import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TokenService } from "../../token.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usuario: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.usuario = TokenService.decode().nome;
  }

  logout() {
    TokenService.removeToken();
    this.router.navigate(['/login']);
  }
}
