import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  publisher = '';

  @ViewChild('segmento') segment: IonSegment

  superHeroes: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  
    // con el viewchild  hacemos que el seleccionado sea todos al arrancar 
  this.segment.value = "todos";
  this.superHeroes = this.dataService.getHeroes();

}

  segmentChanged(event){

    const valorSegmento = event.detail.value
    console.log(event);
    console.log(valorSegmento);

    if(valorSegmento === 'todos'){
      this.publisher= '';
      return 
    }

    this.publisher = valorSegmento;
  }

}
