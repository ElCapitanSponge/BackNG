import * as i0 from '@angular/core';
import { Injectable, Directive, HostListener, NgModule } from '@angular/core';
import * as i1 from '@angular/router';
import { NavigationEnd } from '@angular/router';
import * as i2 from '@angular/common';

/**
 * BackNG Service for handling browser history and routing stack
 *
 * @export
 * @class BackNGService
 */
class BackNGService {
    /**
     * Creates an instance of BackNGService.
     * @param {Router} router
     * @param {Location} location
     *
     * @memberOf BackNGService
     */
    constructor(router, location) {
        this.router = router;
        this.location = location;
        this.past_stack = [];
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.past_stack.push(event.urlAfterRedirects);
            }
        });
    }
    /**
     * Back function that handles the back routing to the previous page if applicable.
     *
     *
     * @memberOf BackNGService
     */
    back() {
        this.past_stack.pop();
        if (this.past_stack.length > 0) {
            this.location.back();
        }
        else {
            this.router.navigateByUrl("/");
        }
    }
}
BackNGService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: BackNGService, deps: [{ token: i1.Router }, { token: i2.Location }], target: i0.ɵɵFactoryTarget.Injectable });
BackNGService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: BackNGService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: BackNGService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i2.Location }]; } });

/**
 * Directive for implementing the BackNG service for handling route based back naviagtion.
 *
 * @export
 * @class BackNGDirective
 */
class BackNGDirective {
    /**
     * Creates an instance of BackNGDirective.
     * @param {BackNGService} nav Instance of the BackNGService.
     *
     * @memberOf BackNGDirective
     */
    constructor(nav) {
        this.nav = nav;
    }
    /**
     * On Click event handler to trigger BackNGService back function.
     *
     *
     * @memberOf BackNGDirective
     */
    onClick() {
        this.nav.back();
    }
}
BackNGDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: BackNGDirective, deps: [{ token: BackNGService }], target: i0.ɵɵFactoryTarget.Directive });
BackNGDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.4", type: BackNGDirective, selector: "[BackNG]", host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: BackNGDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[BackNG]",
                }]
        }], ctorParameters: function () { return [{ type: BackNGService }]; }, propDecorators: { onClick: [{
                type: HostListener,
                args: ["click"]
            }] } });

/**
 * BackNG Module
 *
 * @export
 * @class BackNGModule
 */
class BackNGModule {
}
BackNGModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: BackNGModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BackNGModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.4", ngImport: i0, type: BackNGModule, declarations: [BackNGDirective], exports: [BackNGDirective] });
BackNGModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: BackNGModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: BackNGModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BackNGDirective
                    ],
                    imports: [],
                    exports: [
                        BackNGDirective
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BackNGDirective, BackNGModule, BackNGService };
//# sourceMappingURL=back-ng.mjs.map
