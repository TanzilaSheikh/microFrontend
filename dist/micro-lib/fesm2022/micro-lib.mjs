import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class MicroLibService {
    constructor() { }
    greet(name) {
        return `Hello ${name} from Micro Frontend Library`;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MicroLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MicroLibService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MicroLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class MicroLibComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MicroLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: MicroLibComponent, selector: "lib-micro-lib", ngImport: i0, template: `
    <p>
      micro-lib works!
    </p>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MicroLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-micro-lib', template: `
    <p>
      micro-lib works!
    </p>
  ` }]
        }] });

class MicroLibModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MicroLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: MicroLibModule, declarations: [MicroLibComponent], exports: [MicroLibComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MicroLibModule });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MicroLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MicroLibComponent
                    ],
                    imports: [],
                    exports: [
                        MicroLibComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of micro-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MicroLibComponent, MicroLibModule, MicroLibService };
//# sourceMappingURL=micro-lib.mjs.map
