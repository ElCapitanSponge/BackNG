import { Directive, HostListener } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "./back-ng.service";
/**
 * Directive for implementing the BackNG service for handling route based back naviagtion.
 *
 * @export
 * @class BackNGDirective
 */
export class BackNGDirective {
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
BackNGDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: BackNGDirective, deps: [{ token: i1.BackNGService }], target: i0.ɵɵFactoryTarget.Directive });
BackNGDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.4", type: BackNGDirective, selector: "[BackNG]", host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.4", ngImport: i0, type: BackNGDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[BackNG]",
                }]
        }], ctorParameters: function () { return [{ type: i1.BackNGService }]; }, propDecorators: { onClick: [{
                type: HostListener,
                args: ["click"]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFjay1uZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9iYWNrLW5nL3NyYy9saWIvYmFjay1uZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUd4RDs7Ozs7R0FLRztBQUlILE1BQU0sT0FBTyxlQUFlO0lBQ3hCOzs7OztPQUtHO0lBQ0gsWUFBb0IsR0FBa0I7UUFBbEIsUUFBRyxHQUFILEdBQUcsQ0FBZTtJQUFJLENBQUM7SUFFM0M7Ozs7O09BS0c7SUFFSCxPQUFPO1FBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs0R0FsQlEsZUFBZTtnR0FBZixlQUFlOzJGQUFmLGVBQWU7a0JBSDNCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLFVBQVU7aUJBQ3ZCO29HQWlCRyxPQUFPO3NCQUROLFlBQVk7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJhY2tOR1NlcnZpY2UgfSBmcm9tIFwiLi9iYWNrLW5nLnNlcnZpY2VcIjtcblxuLyoqXG4gKiBEaXJlY3RpdmUgZm9yIGltcGxlbWVudGluZyB0aGUgQmFja05HIHNlcnZpY2UgZm9yIGhhbmRsaW5nIHJvdXRlIGJhc2VkIGJhY2sgbmF2aWFndGlvbi5cbiAqIFxuICogQGV4cG9ydFxuICogQGNsYXNzIEJhY2tOR0RpcmVjdGl2ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbQmFja05HXVwiLFxufSlcbmV4cG9ydCBjbGFzcyBCYWNrTkdEaXJlY3RpdmUge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQmFja05HRGlyZWN0aXZlLlxuICAgICAqIEBwYXJhbSB7QmFja05HU2VydmljZX0gbmF2IEluc3RhbmNlIG9mIHRoZSBCYWNrTkdTZXJ2aWNlLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJPZiBCYWNrTkdEaXJlY3RpdmVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdjogQmFja05HU2VydmljZSkgeyB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBDbGljayBldmVudCBoYW5kbGVyIHRvIHRyaWdnZXIgQmFja05HU2VydmljZSBiYWNrIGZ1bmN0aW9uLlxuICAgICAqIFxuICAgICAqIFxuICAgICAqIEBtZW1iZXJPZiBCYWNrTkdEaXJlY3RpdmVcbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIilcbiAgICBvbkNsaWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5hdi5iYWNrKCk7XG4gICAgfVxufSJdfQ==