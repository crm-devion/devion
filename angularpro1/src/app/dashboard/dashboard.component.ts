import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  todaydate;

  constructor(private httpservice: HttpService) { }

  ngOnInit(): void {
    this.todaydate = this.httpservice.todayDate();
  }

}
