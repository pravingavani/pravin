import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  isfavorite: boolean;

  constructor() { }

  ngOnInit() {
  }
  onclick(){

    this.isfavorite = !this.isfavorite;
  }
}
