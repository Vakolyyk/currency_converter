import { Component, OnInit } from '@angular/core';
import { CurrencyapidataService } from '../currencyapidata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  data: any;
  rateEur: any;
  rateUsd: any;

  constructor(private currencyService: CurrencyapidataService) { }

  ngOnInit(): void {
    this.convertEur();
    this.convertUsd();
  }

  convertEur() {
    this.currencyService.getRatesEUR().subscribe(data => {
      this.data = {...data}
      this.rateEur = this.data.rates['UAH'];
    });
  }

  convertUsd() {
    this.currencyService.getRatesUSD().subscribe(data => {
      this.data = {...data}
      this.rateUsd = this.data.rates['UAH'];
    });
  }
}
