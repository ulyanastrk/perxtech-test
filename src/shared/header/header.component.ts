import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-header',
  animations: [
    trigger('showHeader', [
      state('show', style({
       top: 0,
       opacity: 1
      })),
      state('hide', style({
        top: '-100px',
        opacity: 0
      })),
      transition('hide => show', [
        animate('1s')
      ]),
      transition('show => hide', [
        animate('1s')
      ])
    ]),
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isHide = true;

  ngOnInit() {
   this.isHide = false;
  }

}
