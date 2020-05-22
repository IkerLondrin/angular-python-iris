import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-precision',
  templateUrl: './precision.component.html',
  styleUrls: ['./precision.component.scss']
})
export class PrecisionComponent {

  @Input() precisionModelo: number;
  public colorScheme = {
    domain: ['#1a242c', '#e81746', '#e67303', '#f0f0f0']
  };

  constructor() { }

}
