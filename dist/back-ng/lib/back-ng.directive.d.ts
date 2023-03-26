import { BackNGService } from "./back-ng.service";
import * as i0 from "@angular/core";
/**
 * Directive for implementing the BackNG service for handling route based back naviagtion.
 *
 * @export
 * @class BackNGDirective
 */
export declare class BackNGDirective {
    private nav;
    /**
     * Creates an instance of BackNGDirective.
     * @param {BackNGService} nav Instance of the BackNGService.
     *
     * @memberOf BackNGDirective
     */
    constructor(nav: BackNGService);
    /**
     * On Click event handler to trigger BackNGService back function.
     *
     *
     * @memberOf BackNGDirective
     */
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BackNGDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BackNGDirective, "[BackNG]", never, {}, {}, never, never, false, never>;
}
