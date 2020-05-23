import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-icon-share',
  templateUrl: './icon-share.component.html',
  styleUrls: ['./icon-share.component.scss']
})
export class IconShareComponent implements OnChanges {

  @Input() data: any;
  tipoDato: string;
  tresshold: number = 85;

  constructor() { }


  ngOnChanges(changes: SimpleChanges) {
    this.tipoDato = typeof this.data;
}

}
