import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input() image: string;
  @HostBinding('style.background-image') backgroundImage = null;

  @Input() disabled: boolean;
  @HostBinding('class.disabled') disabledClass: boolean;

  constructor() { }

  ngOnInit() {
    this.backgroundImage = `url(${this.image})`;
    this.disabledClass = this.disabled;
  }
}
