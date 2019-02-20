import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sns-link',
  templateUrl: './sns-link.component.html',
  styleUrls: ['./sns-link.component.scss']
})
export class SnsLinkComponent implements OnInit {
  @Input() url: string;
  @Input() horizontal: boolean;
  @Input() vertical: boolean;

  direction = 'column';
  ngOnInit() {
    this.horizontal && (this.direction = 'row');
    this.vertical && (this.direction = 'column');
  }
}
