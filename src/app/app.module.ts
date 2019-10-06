import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { SharedModule } from "./shared/shared.module";

import { AppComponent } from "./app.component";
import { PanelComponent } from "./components/panel/panel.component";
import { SnsLinkComponent } from "./components/sns-link/sns-link.component";
import { BlockComponent } from "./components/block/block.component";
import { ParticleBgComponent } from "./components/particle-bg/particle-bg.component";

import { TransferHttpCacheModule } from "@nguniversal/common";
import { TranslateModule } from "@ngx-translate/core";

import { NgtUniversalModule } from "@ng-toolkit/universal";

import { NgAnimateScrollService } from 'ng-animate-scroll';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    SnsLinkComponent,
    BlockComponent,
    ParticleBgComponent
  ],
  imports: [
    SharedModule,
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
    TranslateModule.forChild()
  ],
  providers: [
    NgAnimateScrollService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
