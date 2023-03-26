import { Directive, HostListener } from "@angular/core";
import { BackNGService } from "./back-ng.service";

/**
 * Directive for implementing the BackNG service for handling route based back naviagtion.
 * 
 * @export
 * @class BackNGDirective
 */
@Directive({
    selector: "[BackNG]",
})
export class BackNGDirective {
    /**
     * Creates an instance of BackNGDirective.
     * @param {BackNGService} nav Instance of the BackNGService.
     * 
     * @memberOf BackNGDirective
     */
    constructor(private nav: BackNGService) { }

    /**
     * On Click event handler to trigger BackNGService back function.
     * 
     * 
     * @memberOf BackNGDirective
     */
    @HostListener("click")
    onClick(): void {
        this.nav.back();
    }
}