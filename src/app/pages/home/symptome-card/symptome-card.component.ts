import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'symptome-card',
  templateUrl: './symptome-card.component.html',
  styleUrls: ['./symptome-card.component.scss']
})
export class SymptomeCardComponent implements OnInit {

  @Input() title ="";
  @Input() description="";

  constructor() { }

  ngOnInit(): void {
  }

}
