import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'particle-bg',
  templateUrl: './particle-bg.component.html',
  styleUrls: ['./particle-bg.component.scss']
})
export class ParticleBgComponent implements OnInit {
  isBrowser;
  constructor(
    @Inject('windowObject') private window: Window,
    @Inject('particlesObject') private particlesJS: any,
    @Inject(PLATFORM_ID) private platformId) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngOnInit() {
    this.particlesJS.load('particles-js', 'assets/data/particles.json', function () { console.log('callback - particles.js config loaded'); });
  }
  
}
