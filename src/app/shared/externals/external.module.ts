import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

export const MODULES = [
    FlexLayoutModule,
    MaterialModule,
    AngularSvgIconModule 
];

@NgModule({
    imports: MODULES,
    exports: MODULES,
})
export class ExternalModule {}
