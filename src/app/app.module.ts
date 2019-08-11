import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { PanelComponent } from './components/panel/panel.component';
import { SnsLinkComponent } from './components/sns-link/sns-link.component';
import { BlockComponent } from './components/block/block.component';
import { ParticleBgComponent } from './components/particle-bg/particle-bg.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    SnsLinkComponent,
    BlockComponent,
    ParticleBgComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
