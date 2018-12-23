import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PanelComponent } from './components/panel/panel.component';
import { SnsLinkComponent } from './components/sns-link/sns-link.component';
import { BlockComponent } from './components/block/block.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    SnsLinkComponent,
    BlockComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    SharedModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
