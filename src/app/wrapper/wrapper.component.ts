import { Component } from '@angular/core';
import {trigger, transition, query, style, group, animate} from '@angular/animations';

const easing = '250ms cubic-bezier(0.77, 0, 0.175, 1)';
const fade = trigger('fade', [
  transition('* => *', [
    query(':enter', [
      style({opacity: 0}),
    ], {optional: true}),
    query(':leave', [
      style({opacity: 1}),
    ], {optional: true}),
    group([
      query(':leave', [
        animate(easing, style({opacity: 0})),
      ], {optional: true}),
      query(':enter', [
        animate(easing, style({opacity: 1})),
      ], {optional: true}),
    ]),
  ]),
]);


@Component({
  animations: [fade],
  selector: 'app-wrapper',
  template: `
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent {}
