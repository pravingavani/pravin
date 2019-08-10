import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  
  styles: [
    `
    .glyphicon {
      color: green;
  } 

    .glyphicon{
      background: black;
    }
     `
  ],
  styleUrls: ['./favorite.component.scss']
 
})
export class FavoriteComponent {

  @Input('isfavorite') isSelectd: boolean;
  @Output() change = new EventEmitter();

  onClick(){

    this.isSelectd = !this.isSelectd;
    this.change.emit({newvalue: this.isSelectd});
  }
}
