import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input() image = '';
  @HostBinding('style.background-image')
  backgroundImage = null;

  constructor() { }

  ngOnInit() {
    this.backgroundImage = 'url(' + this.image + ')';
  }
}
