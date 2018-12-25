import { Component } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

import * as simpleIcons from 'simple-icons';
import { SvgIconRegistryService } from 'angular-svg-icon';
import { ISocial, IProject, IBasics } from './models';
import { appConfig } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  info: IBasics = appConfig.basics;
  projects: IProject[] = appConfig.projects;
  socials: ISocial[] = appConfig.socials;

  constructor(
    public media: ObservableMedia,
    private iconReg: SvgIconRegistryService
  ) {
    media.asObservable()
      .subscribe((change: MediaChange) => {
        // console.log(change);
      });

    this.socials.forEach(s => this.iconReg.addSvg(s.svg, simpleIcons[s.svg].svg));
  }

  openLink(url) {
    if (url === '') { return ; }
    window.open(url, '_blank');
  }

  openMailClient() {
    window.open(`mailto:${this.info.email}?subject=${this.info.subject}`, '_self');
  }
}
