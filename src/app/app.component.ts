import { Component, Inject } from '@angular/core';

import * as simpleIcons from 'simple-icons';
import { SvgIconRegistryService } from 'angular-svg-icon';
import { ISocial, IProject, IBasics } from './models';
import { appConfig } from './config';

import { WINDOW } from '@ng-toolkit/universal';
import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  info: IBasics = appConfig.basics;
  projects: IProject[] = appConfig.projects;
  socials: ISocial[] = appConfig.socials;

  constructor(
    @Inject(WINDOW) private window: Window,
    private iconReg: SvgIconRegistryService,
    private animateScrollService: NgAnimateScrollService
  ) {
      this.socials.forEach(s => this.iconReg.addSvg(s.svg, simpleIcons[s.svg].svg));
  }

  openLink(url) {
    if (!url || url === "") {
      return;
    }
    this.window.open(url, "_blank");
  }

  openMailClient() {
    this.window.open(
      `mailto:${this.info.email}?subject=${this.info.subject}`,
      "_self"
    );
  }

  navigateToBio(duration?: number) {
    this.animateScrollService.scrollToElement("bio", duration);
  }
}
