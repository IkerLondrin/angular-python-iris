import { Component, OnInit, Input } from '@angular/core';
import {
  Iris,
  ProbabilityPrediction,
  MLPProbabilityPrediction,
} from "../../models/types";
import { IrisService } from '../../services/iris.service';



@Component({
  selector: 'app-selector-variables',
  templateUrl: './selector-variables.component.html',
  styleUrls: ['./selector-variables.component.scss']
})
export class SelectorVariablesComponent implements OnInit {

  @Input() accuracyModelo: string;
  @Input() modelo: string;
  @Input() colorScheme: object;

  public iris: Iris = new Iris();
  probabilityPredictions: ProbabilityPrediction[];
  mlpProbabilityPrediction: MLPProbabilityPrediction[];

  constructor(private irisService: IrisService) { }

  ngOnInit(): void {
  }


  public predictIris() {
    this.irisService.predictIris(this.iris).subscribe((probabilityPredictions) => {
      this.probabilityPredictions = probabilityPredictions;

    });
  }

  public predictIrisMLP() {
    this.irisService.predictIrisMLP(this.iris).subscribe((probabilityPredictions) => {
      this.mlpProbabilityPrediction = probabilityPredictions;
    });
  }


  public predict() {
    if (this.modelo == 'SVM') {
      this.predictIris();
    }
    else if (this.modelo == 'MLP') {
      this.predictIrisMLP();
    }
  }


}
