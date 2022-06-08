import { Component, OnInit } from '@angular/core';
import { CurrencyapidataService } from '../currencyapidata.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  data: any;
  amount1: number = 0;
  amount2: number = 0;
  currency1: string = 'AED';
  currency2: string = 'AED';
  currencies: string[] = [];

  constructor(private currencyService: CurrencyapidataService) {}

  ngOnInit(): void {
    this.getCurrencies();
  }

  getCurrencies() {
    this.currencyService.getData().subscribe(data => {
      this.data = {...data};
      this.currencies = Object.keys(this.data.rates);
    });
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  handleAmount1Change(amount1: number) {
    this.amount2 = amount1 * this.data.rates[this.currency2] / this.data.rates[this.currency1]
    this.amount1 = amount1;
  }

  handleCurrency1Change(currency1: string) {
    this.amount2 = this.amount1 * this.data.rates[this.currency2] / this.data.rates[currency1]
    this.currency1 = currency1;
  }

  handleAmount2Change(amount2: number) {
    this.amount1 = amount2 * this.data.rates[this.currency1] / this.data.rates[this.currency2]
    this.amount2 = amount2;
  }

  handleCurrency2Change(currency2: string) {
    this.amount1 = this.amount2 * this.data.rates[this.currency1] / this.data.rates[currency2]
    this.currency2 = currency2;
  }
}
