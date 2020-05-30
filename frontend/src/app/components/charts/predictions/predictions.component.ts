import { Component, OnInit, Input,OnChanges, SimpleChanges } from '@angular/core';
import {
  ProbabilityPrediction,
  MLPProbabilityPrediction,
} from "../../../models/types";

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.scss']
})
export class PredictionsComponent implements OnInit, OnChanges {

  @Input() predictionsSVC: ProbabilityPrediction;
  @Input() predictionsMLP: MLPProbabilityPrediction;
  @Input() modelo: string;

  @Input() colorScheme: object;

  constructor() { }

  ngOnInit(): void {
    console.log('modelo inicial', this.modelo)
  }

  ngOnChanges(changes: SimpleChanges) {

    if(changes) {
      console.log('han habido cambios')
      console.log('modelo tras el cambio', this.modelo)
    }

  }

}
