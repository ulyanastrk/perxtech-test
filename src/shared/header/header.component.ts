import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-header',
  animations: [
    trigger('appear', [
      transition(':enter', [style({
        top: '-100px',
        opacity: 0
      }),
        animate('700ms ease-in-out', style({
          top: 0,
          opacity: 1
        })),
      ]),
      transition(':leave', [
        animate('700ms ease-in-out', style({
          top: '-100px',
          opacity: 0
        }))
      ])
    ]),
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
}
