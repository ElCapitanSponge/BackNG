import { Router } from '@angular/router';
import { Location } from '@angular/common';
import * as i0 from "@angular/core";
/**
 * BackNG Service for handling browser history and routing stack
 *
 * @export
 * @class BackNGService
 */
export declare class BackNGService {
    private router;
    private location;
    /**
     * The stack of the route based history
     *
     * @private
     * @type {string[]}
     * @memberOf BackNGService
     */
    private past_stack;
    /**
     * Creates an instance of BackNGService.
     * @param {Router} router
     * @param {Location} location
     *
     * @memberOf BackNGService
     */
    constructor(router: Router, location: Location);
    /**
     * Back function that handles the back routing to the previous page if applicable.
     *
     *
     * @memberOf BackNGService
     */
    back(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BackNGService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BackNGService>;
}
