import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { PanelComponent } from './components/panel/panel.component';
import { SnsLinkComponent } from './components/sns-link/sns-link.component';
import { BlockComponent } from './components/block/block.component';
import { ParticleBgComponent } from './components/particle-bg/particle-bg.component';

import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgtUniversalModule } from '@ng-toolkit/universal';

// import 'particles.js';
// export declare var particlesJS: any;

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
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
  ],
  providers: [
    // { provide: 'particlesJS', useValue: particlesJS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
