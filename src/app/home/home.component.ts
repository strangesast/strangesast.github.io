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
        <div class="description">{{panel.description}}</div>
        <div class="tags"><mat-chip-list><mat-chip *ngFor="let tag of panel.tags">{{tag}}</mat-chip></mat-chip-list></div>
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
      tags: ['grpc', 'ATtiny85', 'docker'],
    },
    {
      title: `Pool Heater Performance Monitoring`,
      url: ['/projects', 'pool-heater-performance'],
      description: `Graph pool temperature with bluetooth connected temperature sensor.`,
      tags: ['Bluetooth LE', 'web bluetooth', 'ds18b20', 'ATtiny85', 'd3'],
    },
    {
      title: `nginx & ffmpeg video streaming`,
      url: ['/projects', 'nginx-video-streaming'],
      description: `stream live video from linux video device with nginx and hls`
    },
  ];
}
