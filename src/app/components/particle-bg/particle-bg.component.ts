import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var window: any;
declare var particlesJS: any;

@Component({
  selector: 'particle-bg',
  templateUrl: './particle-bg.component.html',
  styleUrls: ['./particle-bg.component.scss']
})
export class ParticleBgComponent implements OnInit {
  isBrowser;
  constructor(@Inject(PLATFORM_ID) private platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {

      require('particles.js');

      particlesJS.load('particles-js', 'assets/data/particles.json');
    }
  }
}
