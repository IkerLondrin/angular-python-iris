import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-precision',
  templateUrl: './precision.component.html',
  styleUrls: ['./precision.component.scss']
})
export class PrecisionComponent implements OnChanges {

  @Input() precisionModelo: number;
  colorScheme: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      if (this.precisionModelo < 85) {
        this.colorScheme = {
          domain: ['#e81746', '#e81746', '#e81746', '#e81746']
        }
      }
      else {
        this.colorScheme = {
          domain: ['#32CD32', '#32CD32', '#32CD32', '#32CD32']
        }
      }
    }
  }
}
