import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {
  SVCParameters,
  SVCResult,
  MLPParameters,
  MLPResult,
  modelsConfig
} from "../../models/types";
import { IrisService } from '../../services/iris.service';


@Component({
  selector: 'selector-modelo',
  templateUrl: './selector-modelo.component.html',
  styleUrls: ['./selector-modelo.component.scss']
})
export class SelectorModeloComponent implements OnInit {

  @Input() modelo: string;

  // Parametros generales
  public configs: modelsConfig = new modelsConfig();
  @Output() accuracyModelo = new EventEmitter<any>()


  // Parametros para el SVM
  public svcParameters: SVCParameters = new SVCParameters();
  public svcTrainResult: SVCResult = new SVCResult;

  // Parametros para el MLP
  public mlpParameters: MLPParameters = new MLPParameters();
  @Output() mlpTrainResult: MLPResult;



  dataEnviar: string = 'mensaje al padre';

  constructor(private irisService: IrisService) { }

  ngOnInit(): void {
    // Nos traemos las configs de los models!
    this.irisService.getModelsConfig().subscribe((data) => {
      this.configs = data;
    })

  }

  public trainModel() {
    this.irisService.trainModel(this.svcParameters).subscribe((svcResult) => {
      this.svcTrainResult = svcResult;
      this.accuracyModelo.emit(this.svcTrainResult.accuracy)
    });
  }

  public trainModelMLP() {
    this.irisService.trainModelMLP(this.mlpParameters).subscribe((MLPResult) => {
      this.mlpTrainResult = MLPResult;
      this.accuracyModelo.emit(this.mlpTrainResult.accuracy)
    });
  }

  AccuracyShare() {
    if (this.svcTrainResult.accuracy) {
      this.accuracyModelo.emit(this.svcTrainResult.accuracy)
    }
    else {
      this.accuracyModelo.emit('No se ha podido cargar la precision del modelo');

    }
  }



}
