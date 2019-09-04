import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="title">
      <h1>notes</h1>
    </div>
    <nav>
      <ul>
        <li><a [routerLink]="['/projects']">Projects</a></li>
        <li><a [routerLink]="['/snippets']">Snippets</a></li>
      </ul>
    </nav>
    <div class="panels">
      <div *ngFor="let panel of panels" class="panel" [routerLink]="panel.url">
        <div class="preview">
          <img src="https://github.com/strangesast/wallbox/raw/master/images/wallbox.png"/>
        </div>
        <div class="title">{{panel.title}}</div>
        <p class="description">{{panel.description}}</p>

      </div>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // panels = Array.from(Array(4), (_, i) => ({url: `path-${i}`}))
  panels = [
    {
      title: `Seeburg Wallbox Conversion`,
      url: ['/projects', 'seeburg-wallbox-conversion'],
      description: `Convert wallbox AC signal to digital serial to play music on a Raspberry Pi`,
    },
    {
      title: `Pool Heater Performance Monitoring`,
      url: ['/projects', 'pool-heater-performance'],
      description: `Graph pool temperature with bluetooth connected temperature sensor.`,
    },
  ];
}
