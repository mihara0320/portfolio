import { Component, OnInit, PLATFORM_ID, Inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { isPlatformServer } from "@angular/common";

import * as simpleIcons from "simple-icons";
import { SvgIconRegistryService } from "angular-svg-icon";
import { ISocial, IProject, IBasics } from "./models";
import { appConfig } from "./config";

import { WINDOW } from "@ng-toolkit/universal";

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
    @Inject(PLATFORM_ID) private platformId: Object,
    private translate: TranslateService
  ) {
    this.socials.forEach(s =>
      this.iconReg.addSvg(s.svg, simpleIcons[s.svg].svg)
    );
  }

  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      var document: any;
    }
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
}
