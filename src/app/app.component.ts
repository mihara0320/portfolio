import { Component, OnInit, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { REQUEST } from '@nguniversal/express-engine/tokens';
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
    private animateScrollService: NgAnimateScrollService,
    private translate: TranslateService,
    @Optional()
    @Inject(REQUEST) private request: Request,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.socials.forEach(s =>
      this.iconReg.addSvg(s.svg, simpleIcons[s.svg].svg)
    );
  }

  public ngOnInit(): void {
    const language = this.getLang();
    if (['en', 'jp'].indexOf(language) > -1) {
      this.translate.setDefaultLang(language);
    } else {
      this.translate.setDefaultLang('en');
    }
  }

  public getLang(): string {
    let lang: string;
    if (isPlatformBrowser(this.platformId)) {
      lang = this.translate.getBrowserLang();
    } else {
      lang = (this.request.headers['accept-language'] || '').substring(0, 2);
    }
    return lang;
  }

  public switchLanguage(lang: string): void {
    this.translate.setDefaultLang(lang);
  }

  public openLink(url) {
    if (url === "") {
      return;
    }
    this.window.open(url, "_blank");
  }

  public openMailClient() {
    this.window.open(
      `mailto:${this.info.email}?subject=${this.info.subject}`,
      "_self"
    );
  }

  public navigateToBio(duration?: number) {
    this.animateScrollService.scrollToElement('bio', duration);
  }
}
