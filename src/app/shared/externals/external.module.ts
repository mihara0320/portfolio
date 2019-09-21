import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

// export const EXTERNAL_MODULES = [
//     FlexLayoutModule,
//     MaterialModule,
//     AngularSvgIconModule
// ];

@NgModule({
    imports: [
        // FlexLayoutModule,
        // MaterialModule,
        // AngularSvgIconModule
    ],
    exports: [
        FlexLayoutModule,
        MaterialModule,
        AngularSvgIconModule
    ],
})
export class ExternalModule {}
