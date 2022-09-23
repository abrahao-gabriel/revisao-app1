import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-compostos',
  templateUrl: './juros-compostos.component.html',
  styleUrls: ['./juros-compostos.component.css'],
})
export class JurosCompostosComponent implements OnInit {
  @Input() c: string;
  @Input() i: string;
  @Input() t: string;

  constructor() {}

  ngOnInit() {}
  getJuros() {
    let m = Number(this.c) * Math.pow(1 + Number(this.i) / 100, Number(this.t));

    return m - Number(this.c);
  }
}
