import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StatisticsService } from '../../../services/statistics.service';
import { irisDataset } from '../../../models/irisVisualization'

@Component({
  selector: 'estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit {

  iris: irisDataset;
  constructor(private statsService: StatisticsService) {
    
   }

  ngOnInit() {
    this.statsService.getDataIris().subscribe((data) => {
      this.iris = data;
    });

  }


}
