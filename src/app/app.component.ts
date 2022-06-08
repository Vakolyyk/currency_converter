import { Component } from '@angular/core';

export interface Currency {
  ccy: string;
  base_ccy: string;
  buy: string;
  sale: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
