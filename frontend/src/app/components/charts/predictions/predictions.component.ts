import { Component, OnInit, Input } from '@angular/core';
import {
  ProbabilityPrediction,
  MLPProbabilityPrediction,
} from "../../../models/types";

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.scss']
})
export class PredictionsComponent implements OnInit {

  @Input() predictionsSVC: ProbabilityPrediction;
  @Input() predictionsMLP: MLPProbabilityPrediction;

  @Input() colorScheme: object;

  constructor() { }

  ngOnInit(): void {

  }

}
