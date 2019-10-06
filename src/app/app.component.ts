import { Component, OnInit, Inject } from "@angular/core";
import { WINDOW } from "@ng-toolkit/universal";
import { TranslateService } from "@ngx-translate/core";
import { NgAnimateScrollService } from 'ng-animate-scroll';
import * as simpleIcons from "simple-icons";
import { SvgIconRegistryService } from "angular-svg-icon";

import { ISocial, IProject, IBasics } from "./models";
import { appConfig } from "./config";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  info: IBasics = appConfig.basics;
  projects: IProject[] = appConfig.projects;
  socials: ISocial[] = appConfig.socials;

  constructor(
    @Inject(WINDOW) private window: Window,
    private iconReg: SvgIconRegistryService,
    private translate: TranslateService,
    private animateScrollService: NgAnimateScrollService
  ) {
    this.socials.forEach(s =>
      this.iconReg.addSvg(s.svg, simpleIcons[s.svg].svg)
    );
  }

  ngOnInit() {

  }

  openLink(url) {
    if (url === "") {
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
    this.animateScrollService.scrollToElement('bio', duration)
  }
}
