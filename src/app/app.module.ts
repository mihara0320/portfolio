import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { TransferHttpCacheModule } from "@nguniversal/common";
import { NgtUniversalModule } from "@ng-toolkit/universal";
import { TranslateModule } from "@ngx-translate/core";
import { NgAnimateScrollService } from "ng-animate-scroll";

import { RoutesModule } from "./app.routes";
import { SharedModule } from "./shared/shared.module";

import { AppComponent } from "./app.component";

import { HomeComponent } from "./containers/home/home.component";
import { PortfoliosComponent } from "./containers/portfolios/portfolios.component";

import { PanelComponent } from "./components/panel/panel.component";
import { SnsLinkComponent } from "./components/sns-link/sns-link.component";
import { BlockComponent } from "./components/block/block.component";
import { ParticleBgComponent } from "./components/particle-bg/particle-bg.component";

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    PortfoliosComponent,

    PanelComponent,
    SnsLinkComponent,
    BlockComponent,
    ParticleBgComponent
  ],
  imports: [
    RoutesModule,
    SharedModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
    TranslateModule.forChild()
  ],
  providers: [NgAnimateScrollService],
  bootstrap: [AppComponent]
})
export class AppModule {}
