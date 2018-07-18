import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  private JbtHeading:string;
  private JbtText:string;
  private JbtBtnText:string;
  private JbtBtnUrl:string;

  constructor() {
     this.JbtHeading="HELLO WORLD";
     this.JbtText = "SIMPLE APP";
     this.JbtBtnText ="READ MORE";
     this.JbtBtnUrl="/about";
  }

  ngOnInit() {
  }

}
