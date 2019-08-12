import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss']
})
export class ZippyComponent {
  @Input('title') title: string;
  isExpanded: boolean;
  @Input('title1') title1: string;
  toggle() {
    this.isExpanded = !this.isExpanded;
  }

 

}
