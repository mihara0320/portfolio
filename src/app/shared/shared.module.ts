import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// External Modules
import { ExternalModule } from './externals/external.module';


// const SHARED_MODULES = [
//     CommonModule,
//     ExternalModule,
// ];

@NgModule({
    imports: [
        // CommonModule,
        // ExternalModule,
    ],
    exports: [
        CommonModule,
        ExternalModule,
    ],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                // { provide: HTTP_INTERCEPTORS, useClass: ProgressInterceptor, multi: true, deps: [ProgressBarService] },
                // { provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true },
                // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
                // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
            ]
        };
    }
}
