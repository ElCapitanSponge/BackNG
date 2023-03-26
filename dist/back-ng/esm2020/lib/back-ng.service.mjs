import { Injectable } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
/**
 * BackNG Service for handling browser history and routing stack
 *
 * @export
 * @class BackNGService
 */
export class BackNGService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFjay1uZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYmFjay1uZy9zcmMvbGliL2JhY2stbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUd4RDs7Ozs7R0FLRztBQUlILE1BQU0sT0FBTyxhQUFhO0lBVXhCOzs7Ozs7T0FNRztJQUNILFlBQW9CLE1BQWMsRUFBVSxRQUFrQjtRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUM1RCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNyQyxJQUFJLEtBQUssWUFBWSxhQUFhLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQy9DO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxJQUFJO1FBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3RCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7OzBHQXZDVSxhQUFhOzhHQUFiLGFBQWEsY0FGWixNQUFNOzJGQUVQLGFBQWE7a0JBSHpCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLyoqXG4gKiBCYWNrTkcgU2VydmljZSBmb3IgaGFuZGxpbmcgYnJvd3NlciBoaXN0b3J5IGFuZCByb3V0aW5nIHN0YWNrXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCYWNrTkdTZXJ2aWNlXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEJhY2tOR1NlcnZpY2Uge1xuICAvKipcbiAgICogVGhlIHN0YWNrIG9mIHRoZSByb3V0ZSBiYXNlZCBoaXN0b3J5XG4gICAqIFxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7c3RyaW5nW119XG4gICAqIEBtZW1iZXJPZiBCYWNrTkdTZXJ2aWNlXG4gICAqL1xuICBwcml2YXRlIHBhc3Rfc3RhY2s6IHN0cmluZ1tdXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQmFja05HU2VydmljZS5cbiAgICogQHBhcmFtIHtSb3V0ZXJ9IHJvdXRlciBcbiAgICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gICAqIFxuICAgKiBAbWVtYmVyT2YgQmFja05HU2VydmljZVxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24pIHtcbiAgICB0aGlzLnBhc3Rfc3RhY2sgPSBbXTtcbiAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICB0aGlzLnBhc3Rfc3RhY2sucHVzaChldmVudC51cmxBZnRlclJlZGlyZWN0cyk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBCYWNrIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyB0aGUgYmFjayByb3V0aW5nIHRvIHRoZSBwcmV2aW91cyBwYWdlIGlmIGFwcGxpY2FibGUuXG4gICAqIFxuICAgKiBcbiAgICogQG1lbWJlck9mIEJhY2tOR1NlcnZpY2VcbiAgICovXG4gIHB1YmxpYyBiYWNrKCk6IHZvaWQge1xuICAgIHRoaXMucGFzdF9zdGFjay5wb3AoKTtcbiAgICBpZiAodGhpcy5wYXN0X3N0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiL1wiKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==