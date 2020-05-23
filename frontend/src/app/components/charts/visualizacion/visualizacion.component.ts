import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { irisDataset } from '../../../models/irisVisualization'

@Component({
  selector: 'app-visualizacion',
  templateUrl: './visualizacion.component.html',
  styleUrls: ['./visualizacion.component.scss']
})
export class VisualizacionComponent implements OnChanges {

  @Input() iris: irisDataset;
  irisConst: irisDataset;
  graphSepal: any;
  graphPetal: any;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes) {
      this.grafico();
    }
}

  grafico() {
    this.graphSepal = {
      data: [{
        x: this.iris[1].value, y: this.iris[2].value,
        type: 'scatter', mode: 'markers', marker: { color: 'blue' }
      }],
      layout: {
        width: 450, title: 'Sepal width and length',
        xaxis: { title: 'Sepal Length (cm)' },
        yaxis: { title: 'Sepal Width (cm)' }
      }
    }

    this.graphPetal = {
      data: [{
        x: this.iris[3].value, y: this.iris[4].value,
        type: 'scatter', mode: 'markers', marker: { color: 'green' }
      }],
      layout: {
        width: 450, title: 'Petal width and length',
        xaxis: { title: 'Petal Length (cm)' },
        yaxis: { title: 'Petal Width (cm)' }
      }
    }

  }



}