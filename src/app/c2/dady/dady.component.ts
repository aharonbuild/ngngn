import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dady',
  templateUrl: './dady.component.html',
  styleUrls: ['./dady.component.css']
})
export class DadyComponent implements OnInit {

  @Input('kefi') "ss"
  @Output() mounchies:EventEmitter<string> = new EventEmitter<string>()
  valueFromSun:string;
  constructor() { }

  ngOnInit() {

    //setTimeout(()=>this.valueFromDady="gdfgdfg",2000)
  }

}
