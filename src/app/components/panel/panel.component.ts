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

  @Input() isScreen = false;
  @HostBinding('class.screen') screen = false;
  constructor() { }

  ngOnInit() {
    this.backgroundImage = 'url(' + this.image + ')';
    this.screen = this.isScreen;
  }

  paddingClass() {
    return {
      'padding_35': this.isScreen,
      'padding_20': !this.isScreen
    };
  }
}
