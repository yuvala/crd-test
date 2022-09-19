import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() info: any
  value!: number;
  constructor() { }

  ngOnInit(): void {
    this.value = 10
    console.log(this.info);

  }

}
