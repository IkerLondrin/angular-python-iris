import { Component, OnInit, Input } from '@angular/core';
import { colorSchema } from '../../models/colors';

@Component({
  selector: 'app-predicciones',
  templateUrl: './predicciones.component.html',
  styleUrls: ['./predicciones.component.scss']
})
export class PrediccionesComponent implements OnInit {

  @Input() precisionModelo: number;
  public colorScheme = {
    domain: ['#1a242c', '#e81746', '#e67303', '#f0f0f0']
  };

  constructor() { }

  ngOnInit(): void {
  }

}
