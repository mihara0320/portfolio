import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sns-link',
  templateUrl: './sns-link.component.html',
  styleUrls: ['./sns-link.component.scss']
})
export class SnsLinkComponent implements OnInit {
  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }
}
