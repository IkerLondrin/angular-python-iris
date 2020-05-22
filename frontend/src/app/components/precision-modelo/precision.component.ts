import { Component, OnInit, Input } from '@angular/core';
import { colorSchema } from '../../models/colors';

@Component({
  selector: 'app-precision',
  templateUrl: './precision.component.html',
  styleUrls: ['./precision.component.scss']
})
export class PrecisionComponent implements OnInit {

  @Input() precisionModelo: number;
  public colorScheme = {
    domain: ['#1a242c', '#e81746', '#e67303', '#f0f0f0']
  };

  constructor() { }

  ngOnInit(): void {
  }

}
