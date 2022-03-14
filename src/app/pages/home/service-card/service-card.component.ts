import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {

  constructor() { }

  @Input() title : string ="";
  @Input() description: string ="";
  @Input() icon : string ="";

  ngOnInit(): void {
  }

}
