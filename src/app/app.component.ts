import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-wrapper></app-wrapper>`,
  styles: [
    `
    :host {
      height: 100%;
      display: block;
      margin: 0;
    }
    `,
  ]
})
export class AppComponent {}
