import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  //readonly baseUrl = 'https://bootcamp-santandio.herokuapp.com';
  readonly baseUrl = 'https://bootcamp-dio-santander.herokuapp.com/bootcamp';


  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]>{
    //String interpolation to this.url:
    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }
}
