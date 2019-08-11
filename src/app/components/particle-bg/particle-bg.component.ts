import { Component, OnInit } from '@angular/core';

declare var particlesJS: any

@Component({
  selector: 'particle-bg',
  templateUrl: './particle-bg.component.html',
  styleUrls: ['./particle-bg.component.scss']
})
export class ParticleBgComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/data/particles.json', function () { console.log('callback - particles.js config loaded'); });
  }
  

}
