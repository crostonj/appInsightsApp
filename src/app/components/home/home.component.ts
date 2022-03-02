import { Component, OnInit } from '@angular/core';
import { IndexService } from 'src/app/services/index/index.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datasource: any;
  columnsToDisplay = ["timestamp", "name", "url", "data"];

  constructor(private indexService: IndexService) { }

 ngOnInit(): void {
    this.indexService.getActivty()
      .subscribe(response =>
        this.datasource = response);
  }
}
