import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'particle-bg',
  templateUrl: './particle-bg.component.html',
  styleUrls: ['./particle-bg.component.scss']
})
export class ParticleBgComponent implements OnInit {
    constructor(@Inject('particlesJS') private particlesJS: any) {
  }
  ngOnInit() {
    this.particlesJS.load('particles-js', 'assets/data/particles.json', function () {
      console.log('callback - particles.js config loaded');
    });
  }
}
