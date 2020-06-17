import { Component, OnInit } from '@angular/core';
import { CovidService } from '../../../sdk/services/api/covid.service';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  totalCases: number = 0;
  recovered: number = 0;
  deaths: number = 0;

  constructor(private covidApi: CovidService) { }

  ngOnInit(): void {
    this.getNoCases();
  }

  getNoCases() {
    this.covidApi.getAll().subscribe(
      (response) => {
        console.log(response);
        this.totalCases = response.cases;
        this.recovered = response.recovered;
        this.deaths = response.deaths;
      },
      (error) => {
        console.log(error);
      },
    )
  }
}
