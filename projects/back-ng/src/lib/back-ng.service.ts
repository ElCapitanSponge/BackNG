import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

/**
 * BackNG Service for handling browser history and routing stack
 * 
 * @export
 * @class BackNGService
 */
@Injectable({
  providedIn: 'root'
})
export class BackNGService {
  /**
   * The stack of the route based history
   * 
   * @private
   * @type {string[]}
   * @memberOf BackNGService
   */
  private past_stack: string[]

  /**
   * Creates an instance of BackNGService.
   * @param {Router} router 
   * @param {Location} location 
   * 
   * @memberOf BackNGService
   */
  constructor(private router: Router, private location: Location) {
    this.past_stack = [];
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.past_stack.push(event.urlAfterRedirects);
      }
    })
  }

  /**
   * Back function that handles the back routing to the previous page if applicable.
   * 
   * 
   * @memberOf BackNGService
   */
  public back(): void {
    this.past_stack.pop();
    if (this.past_stack.length > 0) {
      this.location.back();
    } else {
      this.router.navigateByUrl("/");
    }
  }
}
