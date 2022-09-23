import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-simples',
  templateUrl: './juros-simples.component.html',
  styleUrls: ['./juros-simples.component.css'],
})
export class JurosSimplesComponent implements OnInit {
  @Input() c: string;
  @Input() i: string;
  @Input() t: string;

  constructor() {}

  ngOnInit() {}
  getJuros() {
    return Number(this.c) * (Number(this.i) / 100) * Number(this.t);
  }
}
