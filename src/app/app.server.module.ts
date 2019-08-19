import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';

import 'particles.js';
export declare var particlesJS: any;

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    FlexLayoutServerModule
  ],
  providers: [{
    provide: 'windowObject', useValue: {}
  },{
      provide: 'particlesObject', useValue: particlesJS
  }],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
