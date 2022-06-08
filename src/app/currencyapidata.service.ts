import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyapidataService {
  url: string = 'https://api.exchangerate.host/latest';

  constructor(private http: HttpClient) { }

  getRatesEUR() {
    return this.http.get('https://api.exchangerate.host/latest?base=EUR');
  }

  getRatesUSD() {
    return this.http.get('https://api.exchangerate.host/latest?base=USD');
  }

  getData() {
    return this.http.get('https://api.exchangerate.host/latest');
  }
}

