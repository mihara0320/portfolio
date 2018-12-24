import { Component } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

import * as simpleIcons from 'simple-icons';
import { SvgIconRegistryService } from 'angular-svg-icon';
import { ISocial, IProject } from './models';
import { appConfig } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  projects: IProject[] = appConfig.projects;
  socials: ISocial[] = appConfig.socials;

  constructor(
    public media: ObservableMedia,
    private iconReg: SvgIconRegistryService
  ) {
    media.asObservable()
      .subscribe((change: MediaChange) => {
        console.log(change);
      });

    this.socials.forEach(s => this.iconReg.addSvg(s.svg, simpleIcons[s.svg].svg));
  }

  openLink(url) {
    window.open(url, '_blank');
  }
}
