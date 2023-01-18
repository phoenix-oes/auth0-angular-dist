import { InjectionToken, Injectable, Optional, Inject } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * A custom type guard to help identify route definitions that are actually HttpInterceptorRouteConfig types.
 * @param def The route definition type
 */
export function isHttpInterceptorRouteConfig(def) {
    return typeof def !== 'string';
}
/**
 * Gets and sets configuration for the internal Auth0 client. This can be
 * used to provide configuration outside of using AuthModule.forRoot, i.e. from
 * a factory provided by APP_INITIALIZER.
 *
 * @usage
 *
 * ```js
 * // app.module.ts
 * // ---------------------------
 * import { AuthModule, AuthClientConfig } from '@auth0/auth0-angular';
 *
 * // Provide an initializer function that returns a Promise
 * function configInitializer(
 *   http: HttpClient,
 *   config: AuthClientConfig
 * ) {
 *   return () =>
 *     http
 *       .get('/config')
 *       .toPromise()
 *       .then((loadedConfig: any) => config.set(loadedConfig));   // Set the config that was loaded asynchronously here
 * }
 *
 * // Provide APP_INITIALIZER with this function. Note that there is no config passed to AuthModule.forRoot
 * imports: [
 *   // other imports..
 *
 *   HttpClientModule,
 *   AuthModule.forRoot(),   //<- don't pass any config here
 * ],
 * providers: [
 *   {
 *     provide: APP_INITIALIZER,
 *     useFactory: configInitializer,    // <- pass your initializer function here
 *     deps: [HttpClient, AuthClientConfig],
 *     multi: true,
 *   },
 * ],
 * ```
 *
 */
export class AuthClientConfig {
    constructor(config) {
        if (config) {
            this.set(config);
        }
    }
    /**
     * Sets configuration to be read by other consumers of the service (see usage notes)
     * @param config The configuration to set
     */
    set(config) {
        this.config = config;
    }
    /**
     * Gets the config that has been set by other consumers of the service
     */
    get() {
        return this.config;
    }
}
AuthClientConfig.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthClientConfig, deps: [{ token: AuthConfigService, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
AuthClientConfig.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthClientConfig, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthClientConfig, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [AuthConfigService]
                }] }]; } });
/**
 * Injection token for accessing configuration.
 *
 * @usageNotes
 *
 * Use the `Inject` decorator to access the configuration from a service or component:
 *
 * ```
 * class MyService(@Inject(AuthConfigService) config: AuthConfig) {}
 * ```
 */
export const AuthConfigService = new InjectionToken('auth0-angular.config');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hdXRoMC1hbmd1bGFyL3NyYy9saWIvYXV0aC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFzQjdFOzs7R0FHRztBQUNILE1BQU0sVUFBVSw0QkFBNEIsQ0FDMUMsR0FBdUI7SUFFdkIsT0FBTyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUM7QUFDakMsQ0FBQztBQTJRRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Q0c7QUFFSCxNQUFNLE9BQU8sZ0JBQWdCO0lBRzNCLFlBQW1ELE1BQW1CO1FBQ3BFLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCxHQUFHLENBQUMsTUFBa0I7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsR0FBRztRQUNELE9BQU8sSUFBSSxDQUFDLE1BQW9CLENBQUM7SUFDbkMsQ0FBQzs7OEdBdEJVLGdCQUFnQixrQkFHSyxpQkFBaUI7a0hBSHRDLGdCQUFnQixjQURILE1BQU07NEZBQ25CLGdCQUFnQjtrQkFENUIsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OzBCQUluQixRQUFROzswQkFBSSxNQUFNOzJCQUFDLGlCQUFpQjs7QUFzQm5EOzs7Ozs7Ozs7O0dBVUc7QUFDSCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLGNBQWMsQ0FDakQsc0JBQXNCLENBQ3ZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDYWNoZUxvY2F0aW9uLFxuICBHZXRUb2tlblNpbGVudGx5T3B0aW9ucyxcbiAgSUNhY2hlLFxufSBmcm9tICdAYXV0aDAvYXV0aDAtc3BhLWpzJztcblxuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBEZWZpbmVzIGEgY29tbW9uIHNldCBvZiBIVFRQIG1ldGhvZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBlbnVtIEh0dHBNZXRob2Qge1xuICBHZXQgPSAnR0VUJyxcbiAgUG9zdCA9ICdQT1NUJyxcbiAgUHV0ID0gJ1BVVCcsXG4gIFBhdGNoID0gJ1BBVENIJyxcbiAgRGVsZXRlID0gJ0RFTEVURScsXG4gIEhlYWQgPSAnSEVBRCcsXG59XG5cbi8qKlxuICogRGVmaW5lcyB0aGUgdHlwZSBmb3IgYSByb3V0ZSBjb25maWcgZW50cnkuIENhbiBlaXRoZXIgYmU6XG4gKlxuICogLSBhbiBvYmplY3Qgb2YgdHlwZSBIdHRwSW50ZXJjZXB0b3JSb3V0ZUNvbmZpZ1xuICogLSBhIHN0cmluZ1xuICovXG5leHBvcnQgdHlwZSBBcGlSb3V0ZURlZmluaXRpb24gPSBIdHRwSW50ZXJjZXB0b3JSb3V0ZUNvbmZpZyB8IHN0cmluZztcblxuLyoqXG4gKiBBIGN1c3RvbSB0eXBlIGd1YXJkIHRvIGhlbHAgaWRlbnRpZnkgcm91dGUgZGVmaW5pdGlvbnMgdGhhdCBhcmUgYWN0dWFsbHkgSHR0cEludGVyY2VwdG9yUm91dGVDb25maWcgdHlwZXMuXG4gKiBAcGFyYW0gZGVmIFRoZSByb3V0ZSBkZWZpbml0aW9uIHR5cGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSHR0cEludGVyY2VwdG9yUm91dGVDb25maWcoXG4gIGRlZjogQXBpUm91dGVEZWZpbml0aW9uXG4pOiBkZWYgaXMgSHR0cEludGVyY2VwdG9yUm91dGVDb25maWcge1xuICByZXR1cm4gdHlwZW9mIGRlZiAhPT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogQ29uZmlndXJhdGlvbiBmb3IgdGhlIEh0dHBJbnRlcmNlcHRvclxuICovXG5leHBvcnQgaW50ZXJmYWNlIEh0dHBJbnRlcmNlcHRvckNvbmZpZyB7XG4gIGFsbG93ZWRMaXN0OiBBcGlSb3V0ZURlZmluaXRpb25bXTtcbn1cblxuLyoqXG4gKiBDb25maWd1cmF0aW9uIGZvciBhIHNpbmdsZSBpbnRlcmNlcHRvciByb3V0ZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEh0dHBJbnRlcmNlcHRvclJvdXRlQ29uZmlnIHtcbiAgLyoqXG4gICAqIFRoZSBVUkwgdG8gdGVzdCwgYnkgc3VwcGx5aW5nIHRoZSBVUkwgdG8gbWF0Y2guXG4gICAqIElmIGB0ZXN0YCBpcyBhIG1hdGNoIGZvciB0aGUgY3VycmVudCByZXF1ZXN0IHBhdGggZnJvbSB0aGUgSFRUUCBjbGllbnQsIHRoZW5cbiAgICogYW4gYWNjZXNzIHRva2VuIGlzIGF0dGFjaGVkIHRvIHRoZSByZXF1ZXN0IGluIHRoZVxuICAgKiAgW1wiQXV0aG9yaXphdGlvblwiIGhlYWRlcl0oaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL2RyYWZ0LWlldGYtb2F1dGgtdjItYmVhcmVyLTIwI3NlY3Rpb24tMi4xKS5cbiAgICpcbiAgICogSWYgdGhlIHRlc3QgZG9lcyBub3QgcGFzcywgdGhlIHJlcXVlc3QgcHJvY2VlZHMgd2l0aG91dCB0aGUgYWNjZXNzIHRva2VuIGF0dGFjaGVkLlxuICAgKlxuICAgKiBBIHdpbGRjYXJkIGNoYXJhY3RlciBjYW4gYmUgdXNlZCB0byBtYXRjaCBvbmx5IHRoZSBzdGFydCBvZiB0aGUgVVJMLlxuICAgKlxuICAgKiBAdXNhZ2Vub3Rlc1xuICAgKlxuICAgKiAnL2FwaScgLSBleGFjdGx5IG1hdGNoIHRoZSByb3V0ZSAvYXBpXG4gICAqICcvYXBpLyonIC0gbWF0Y2ggYW55IHJvdXRlIHRoYXQgc3RhcnRzIHdpdGggL2FwaS9cbiAgICovXG4gIHVyaT86IHN0cmluZztcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIEh0dHBSZXF1ZXN0LnVybCB2YWx1ZSwgYWxsb3dpbmcgeW91IHRvIGRvXG4gICAqIGFueSBraW5kIG9mIGZsZXhpYmxlIG1hdGNoaW5nLlxuICAgKlxuICAgKiBJZiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdHJ1ZSwgdGhlblxuICAgKiBhbiBhY2Nlc3MgdG9rZW4gaXMgYXR0YWNoZWQgdG8gdGhlIHJlcXVlc3QgaW4gdGhlXG4gICAqICBbXCJBdXRob3JpemF0aW9uXCIgaGVhZGVyXShodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvZHJhZnQtaWV0Zi1vYXV0aC12Mi1iZWFyZXItMjAjc2VjdGlvbi0yLjEpLlxuICAgKlxuICAgKiBJZiBpdCByZXR1cm5zIGZhbHNlLCB0aGUgcmVxdWVzdCBwcm9jZWVkcyB3aXRob3V0IHRoZSBhY2Nlc3MgdG9rZW4gYXR0YWNoZWQuXG4gICAqL1xuICB1cmlNYXRjaGVyPzogKHVyaTogc3RyaW5nKSA9PiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgb3B0aW9ucyB0aGF0IGFyZSBwYXNzZWQgdG8gdGhlIFNESyB3aGVuIHJldHJpZXZpbmcgdGhlXG4gICAqIGFjY2VzcyB0b2tlbiB0byBhdHRhY2ggdG8gdGhlIG91dGdvaW5nIHJlcXVlc3QuXG4gICAqL1xuICB0b2tlbk9wdGlvbnM/OiBHZXRUb2tlblNpbGVudGx5T3B0aW9ucztcblxuICAvKipcbiAgICogVGhlIEhUVFAgbWV0aG9kIHRvIG1hdGNoIG9uLiBJZiBzcGVjaWZpZWQsIHRoZSBIVFRQIG1ldGhvZCBvZlxuICAgKiB0aGUgb3V0Z29pbmcgcmVxdWVzdCB3aWxsIGJlIGNoZWNrZWQgYWdhaW5zdCB0aGlzLiBJZiB0aGVyZSBpcyBubyBtYXRjaCwgdGhlXG4gICAqIEF1dGhvcml6YXRpb24gaGVhZGVyIGlzIG5vdCBhdHRhY2hlZC5cbiAgICpcbiAgICogVGhlIEhUVFAgbWV0aG9kIG5hbWUgaXMgY2FzZS1zZW5zaXRpdmUuXG4gICAqL1xuICBodHRwTWV0aG9kPzogSHR0cE1ldGhvZCB8IHN0cmluZztcblxuICAvKipcbiAgICogQWxsb3cgdGhlIEhUVFAgY2FsbCB0byBiZSBleGVjdXRlZCBhbm9ueW1vdXNseSwgd2hlbiBubyB0b2tlbiBpcyBhdmFpbGFibGUuXG4gICAqXG4gICAqIFdoZW4gb21pdHRlZCAob3Igc2V0IHRvIGZhbHNlKSwgY2FsbHMgdGhhdCBtYXRjaCB0aGUgY29uZmlndXJhdGlvbiB3aWxsIGZhaWwgd2hlbiBubyB0b2tlbiBpcyBhdmFpbGFibGUuXG4gICAqL1xuICBhbGxvd0Fub255bW91cz86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQ29uZmlndXJhdGlvbiBmb3IgdGhlIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBdXRoQ29uZmlnIHtcbiAgLyoqXG4gICAqIFlvdXIgQXV0aDAgYWNjb3VudCBkb21haW4gc3VjaCBhcyBgJ2V4YW1wbGUuYXV0aDAuY29tJ2AsXG4gICAqIGAnZXhhbXBsZS5ldS5hdXRoMC5jb20nYCBvciAsIGAnZXhhbXBsZS5teWNvbXBhbnkuY29tJ2BcbiAgICogKHdoZW4gdXNpbmcgW2N1c3RvbSBkb21haW5zXShodHRwczovL2F1dGgwLmNvbS9kb2NzL2N1c3RvbS1kb21haW5zKSlcbiAgICovXG4gIGRvbWFpbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgaXNzdWVyIHRvIGJlIHVzZWQgZm9yIHZhbGlkYXRpb24gb2YgSldUcywgb3B0aW9uYWxseSBkZWZhdWx0cyB0byB0aGUgZG9tYWluIGFib3ZlXG4gICAqL1xuICBpc3N1ZXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBDbGllbnQgSUQgZm91bmQgb24geW91ciBBcHBsaWNhdGlvbiBzZXR0aW5ncyBwYWdlXG4gICAqL1xuICBjbGllbnRJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBVUkwgd2hlcmUgQXV0aDAgd2lsbCByZWRpcmVjdCB5b3VyIGJyb3dzZXIgdG8gd2l0aFxuICAgKiB0aGUgYXV0aGVudGljYXRpb24gcmVzdWx0LiBJdCBtdXN0IGJlIGFkZGVkIHRvIHRoZVxuICAgKiBcIkFsbG93ZWQgQ2FsbGJhY2sgVVJMc1wiIGZpZWxkIGluIHlvdXIgQXV0aDAgQXBwbGljYXRpb24nc1xuICAgKiBzZXR0aW5ncy4gSWYgbm90IHByb3ZpZGVkIGhlcmUsIGl0IHNob3VsZCBiZSBwcm92aWRlZCBpbiB0aGUgb3RoZXJcbiAgICogbWV0aG9kcyB0aGF0IHByb3ZpZGUgYXV0aGVudGljYXRpb24uXG4gICAqL1xuICByZWRpcmVjdFVyaT86IHN0cmluZztcblxuICAvKipcbiAgICogQnkgZGVmYXVsdCwgaWYgdGhlIHBhZ2UgVVJMIGhhcyBjb2RlIGFuZCBzdGF0ZSBwYXJhbWV0ZXJzLCB0aGUgU0RLIHdpbGwgYXNzdW1lIHRoZXkgYXJlIGZvclxuICAgKiBhbiBBdXRoMCBhcHBsaWNhdGlvbiBhbmQgYXR0ZW1wdCB0byBleGNoYW5nZSB0aGUgY29kZSBmb3IgYSB0b2tlbi5cbiAgICogSW4gc29tZSBjYXNlcyB0aGUgY29kZSBtaWdodCBiZSBmb3Igc29tZXRoaW5nIGVsc2UgKGUuZy4gYW5vdGhlciBPQXV0aCBTREspLiBJbiB0aGVzZVxuICAgKiBpbnN0YW5jZXMgeW91IGNhbiBpbnN0cnVjdCB0aGUgY2xpZW50IHRvIGlnbm9yZSB0aGVtIGJ5IHNldHRpbmcgYHNraXBSZWRpcmVjdENhbGxiYWNrYC5cbiAgICpcbiAgICogYGBganNcbiAgICogQXV0aE1vZHVsZS5mb3JSb290KHtcbiAgICogICBza2lwUmVkaXJlY3RDYWxsYmFjazogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSAnL290aGVyLWNhbGxiYWNrJ1xuICAgKiB9KVxuICAgKiBgYGBcbiAgICpcbiAgICogKipOb3RlKio6IEluIHRoZSBhYm92ZSBleGFtcGxlLCBgL290aGVyLWNhbGxiYWNrYCBpcyBhbiBleGlzdGluZyByb3V0ZSB0aGF0IHdpbGwgYmUgY2FsbGVkXG4gICAqIGJ5IGFueSBvdGhlciBPQXV0aCBwcm92aWRlciB3aXRoIGEgYGNvZGVgIChvciBgZXJyb3JgIGluIGNhc2Ugd2hlbiBzb21ldGhpbmcgd2VudCB3cm9uZykgYW5kIGBzdGF0ZWAuXG4gICAqXG4gICAqL1xuICBza2lwUmVkaXJlY3RDYWxsYmFjaz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBpbiBzZWNvbmRzIHVzZWQgdG8gYWNjb3VudCBmb3IgY2xvY2sgc2tldyBpbiBKV1QgZXhwaXJhdGlvbnMuXG4gICAqIFR5cGljYWxseSwgdGhpcyB2YWx1ZSBpcyBubyBtb3JlIHRoYW4gYSBtaW51dGUgb3IgdHdvIGF0IG1heGltdW0uXG4gICAqIERlZmF1bHRzIHRvIDYwcy5cbiAgICovXG4gIGxlZXdheT86IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGxvY2F0aW9uIHRvIHVzZSB3aGVuIHN0b3JpbmcgY2FjaGUgZGF0YS4gVmFsaWQgdmFsdWVzIGFyZSBgbWVtb3J5YCBvciBgbG9jYWxzdG9yYWdlYC5cbiAgICogVGhlIGRlZmF1bHQgc2V0dGluZyBpcyBgbWVtb3J5YC5cbiAgICovXG4gIGNhY2hlTG9jYXRpb24/OiBDYWNoZUxvY2F0aW9uO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IGEgY3VzdG9tIGNhY2hlIGltcGxlbWVudGF0aW9uIHRvIHVzZSBmb3IgdG9rZW4gc3RvcmFnZSBhbmQgcmV0cmlldmFsLlxuICAgKiBUaGlzIHNldHRpbmcgdGFrZXMgcHJlY2VkZW5jZSBvdmVyIGBjYWNoZUxvY2F0aW9uYCBpZiB0aGV5IGFyZSBib3RoIHNwZWNpZmllZC5cbiAgICpcbiAgICogUmVhZCBtb3JlIGFib3V0IFtjcmVhdGluZyBhIGN1c3RvbSBjYWNoZV0oaHR0cHM6Ly9naXRodWIuY29tL2F1dGgwL2F1dGgwLXNwYS1qcyNjcmVhdGluZy1hLWN1c3RvbS1jYWNoZSlcbiAgICovXG4gIGNhY2hlPzogSUNhY2hlO1xuXG4gIC8qKlxuICAgKiBJZiB0cnVlLCByZWZyZXNoIHRva2VucyBhcmUgdXNlZCB0byBmZXRjaCBuZXcgYWNjZXNzIHRva2VucyBmcm9tIHRoZSBBdXRoMCBzZXJ2ZXIuXG4gICAqIElmIGZhbHNlLCB0aGUgbGVnYWN5IHRlY2huaXF1ZSBvZiB1c2luZyBhIGhpZGRlbiBpZnJhbWUgYW5kIHRoZSBgYXV0aG9yaXphdGlvbl9jb2RlYCBncmFudCB3aXRoIGBwcm9tcHQ9bm9uZWAgaXMgdXNlZC5cbiAgICogVGhlIGRlZmF1bHQgc2V0dGluZyBpcyBgZmFsc2VgLlxuICAgKlxuICAgKiAqKk5vdGUqKjogVXNlIG9mIHJlZnJlc2ggdG9rZW5zIG11c3QgYmUgZW5hYmxlZCBieSBhbiBhZG1pbmlzdHJhdG9yIG9uIHlvdXIgQXV0aDAgY2xpZW50IGFwcGxpY2F0aW9uLlxuICAgKi9cbiAgdXNlUmVmcmVzaFRva2Vucz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIElmIHRydWUsIGZhbGxiYWNrIHRvIHRoZSB0ZWNobmlxdWUgb2YgdXNpbmcgYSBoaWRkZW4gaWZyYW1lIGFuZCB0aGUgYGF1dGhvcml6YXRpb25fY29kZWAgZ3JhbnQgd2l0aCBgcHJvbXB0PW5vbmVgXG4gICAqIHdoZW4gdW5hYmxlIHRvIHVzZSByZWZyZXNoIHRva2Vucy5cbiAgICogVGhlIGRlZmF1bHQgc2V0dGluZyBpcyBgdHJ1ZWAuXG4gICAqXG4gICAqICoqTm90ZSoqOiBUaGVyZSBtaWdodCBiZSBzaXR1YXRpb25zIHdoZXJlIGRvaW5nIHNpbGVudCBhdXRoIHdpdGggYSBXZWIgTWVzc2FnZSByZXNwb25zZSBmcm9tIGFuIGlmcmFtZSBpcyBub3QgcG9zc2libGUsXG4gICAqIGxpa2Ugd2hlbiB5b3UncmUgc2VydmluZyB5b3VyIGFwcGxpY2F0aW9uIGZyb20gdGhlIGZpbGUgc3lzdGVtIG9yIGEgY3VzdG9tIHByb3RvY29sIChsaWtlIGluIGEgRGVza3RvcCBvciBOYXRpdmUgYXBwKS5cbiAgICogSW4gc2l0dWF0aW9ucyBsaWtlIHRoaXMgeW91IGNhbiBkaXNhYmxlIHRoZSBpZnJhbWUgZmFsbGJhY2sgYW5kIGhhbmRsZSB0aGUgZmFpbGVkIFJlZnJlc2ggR3JhbnQgYW5kIHByb21wdFxuICAgKiB0aGUgdXNlciB0byBsb2dpbiBpbnRlcmFjdGl2ZWx5IHdpdGggYGxvZ2luV2l0aFJlZGlyZWN0YCBvciBgbG9naW5XaXRoUG9wdXBgLlwiXG4gICAqXG4gICAqIEUuZy4gVXNpbmcgdGhlIGBmaWxlOmAgcHJvdG9jb2wgaW4gYW4gRWxlY3Ryb24gYXBwbGljYXRpb24gZG9lcyBub3Qgc3VwcG9ydCB0aGF0IGxlZ2FjeSB0ZWNobmlxdWUuXG4gICAqXG4gICAqICB0aGlzLmF1dGhTZXJ2aWNlLmdldEFjY2Vzc1Rva2VuU2lsZW50bHkoKS5zdWJzY3JpYmUoe1xuICAgKiAgICBlcnJvcjogKGUpID0+IHtcbiAgICogICAgICBpZiAoZS5lcnJvciA9PT0gJ21pc3NpbmdfcmVmcmVzaF90b2tlbicgfHwgZS5lcnJvciA9PT0gJ2ludmFsaWRfZ3JhbnQnKSB7XG4gICAqICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luV2l0aFJlZGlyZWN0KCk7XG4gICAqICAgICAgfVxuICAgKiAgICB9XG4gICAqICB9KTtcbiAgICovXG4gIHVzZVJlZnJlc2hUb2tlbnNGYWxsYmFjaz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEEgbWF4aW11bSBudW1iZXIgb2Ygc2Vjb25kcyB0byB3YWl0IGJlZm9yZSBkZWNsYXJpbmcgYmFja2dyb3VuZCBjYWxscyB0byAvYXV0aG9yaXplIGFzIGZhaWxlZCBmb3IgdGltZW91dFxuICAgKiBEZWZhdWx0cyB0byA2MHMuXG4gICAqL1xuICBhdXRob3JpemVUaW1lb3V0SW5TZWNvbmRzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRvIHJlY29tbWVuZGVkIGRlZmF1bHRzLCBsaWtlIGRlZmF1bHRTY29wZVxuICAgKi9cbiAgYWR2YW5jZWRPcHRpb25zPzoge1xuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IHNjb3BlIHRvIGJlIGluY2x1ZGVkIHdpdGggYWxsIHJlcXVlc3RzLlxuICAgICAqIElmIG5vdCBwcm92aWRlZCwgJ29wZW5pZCBwcm9maWxlIGVtYWlsJyBpcyB1c2VkLiBUaGlzIGNhbiBiZSBzZXQgdG8gYG51bGxgIGluIG9yZGVyIHRvIGVmZmVjdGl2ZWx5IHJlbW92ZSB0aGUgZGVmYXVsdCBzY29wZXMuXG4gICAgICpcbiAgICAgKiBOb3RlOiBUaGUgYG9wZW5pZGAgc2NvcGUgaXMgKiphbHdheXMgYXBwbGllZCoqIHJlZ2FyZGxlc3Mgb2YgdGhpcyBzZXR0aW5nLlxuICAgICAqL1xuICAgIGRlZmF1bHRTY29wZT86IHN0cmluZztcbiAgfTtcblxuICAvKipcbiAgICogTWF4aW11bSBhbGxvd2FibGUgZWxhcHNlZCB0aW1lIChpbiBzZWNvbmRzKSBzaW5jZSBhdXRoZW50aWNhdGlvbi5cbiAgICogSWYgdGhlIGxhc3QgdGltZSB0aGUgdXNlciBhdXRoZW50aWNhdGVkIGlzIGdyZWF0ZXIgdGhhbiB0aGlzIHZhbHVlLFxuICAgKiB0aGUgdXNlciBtdXN0IGJlIHJlYXV0aGVudGljYXRlZC5cbiAgICovXG4gIG1heEFnZT86IHN0cmluZyB8IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgc2NvcGUgdG8gYmUgdXNlZCBvbiBhdXRoZW50aWNhdGlvbiByZXF1ZXN0cy5cbiAgICogVGhlIGRlZmF1bHRTY29wZSBkZWZpbmVkIGluIHRoZSBBdXRoMENsaWVudCBpcyBpbmNsdWRlZFxuICAgKiBhbG9uZyB3aXRoIHRoaXMgc2NvcGVcbiAgICovXG4gIHNjb3BlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBhdWRpZW5jZSB0byBiZSB1c2VkIGZvciByZXF1ZXN0aW5nIEFQSSBhY2Nlc3MuXG4gICAqL1xuICBhdWRpZW5jZT86IHN0cmluZztcblxuICAvKipcbiAgICogQ29uZmlndXJhdGlvbiBmb3IgdGhlIGJ1aWx0LWluIEh0dHAgSW50ZXJjZXB0b3IsIHVzZWQgZm9yXG4gICAqIGF1dG9tYXRpY2FsbHkgYXR0YWNoaW5nIGFjY2VzcyB0b2tlbnMuXG4gICAqL1xuICBodHRwSW50ZXJjZXB0b3I/OiBIdHRwSW50ZXJjZXB0b3JDb25maWc7XG5cbiAgLyoqXG4gICAqIFBhdGggaW4geW91ciBhcHBsaWNhdGlvbiB0byByZWRpcmVjdCB0byB3aGVuIHRoZSBBdXRob3JpemF0aW9uIHNlcnZlclxuICAgKiByZXR1cm5zIGFuIGVycm9yLiBEZWZhdWx0cyB0byBgL2BcbiAgICovXG4gIGVycm9yUGF0aD86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIElkIG9mIGFuIG9yZ2FuaXphdGlvbiB0byBsb2cgaW4gdG9cbiAgICpcbiAgICogVGhpcyB3aWxsIHNwZWNpZnkgYW4gYG9yZ2FuaXphdGlvbmAgcGFyYW1ldGVyIGluIHlvdXIgdXNlcidzIGxvZ2luIHJlcXVlc3QgYW5kIHdpbGwgYWRkIGEgc3RlcCB0byB2YWxpZGF0ZVxuICAgKiB0aGUgYG9yZ19pZGAgY2xhaW0gaW4geW91ciB1c2VyJ3MgSUQgVG9rZW4uXG4gICAqL1xuICBvcmdhbml6YXRpb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBJZCBvZiBhbiBpbnZpdGF0aW9uIHRvIGFjY2VwdC5cbiAgICpcbiAgICogVGhpcyBpcyBhdmFpbGFibGUgZnJvbSB0aGUgdXNlciBpbnZpdGF0aW9uIFVSTCB0aGF0IGlzIGdpdmVuIHdoZW4gcGFydGljaXBhdGluZyBpbiBhIHVzZXIgaW52aXRhdGlvbiBmbG93LlxuICAgKi9cbiAgaW52aXRhdGlvbj86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIGNvbm5lY3Rpb24gY29uZmlndXJlZCBmb3IgeW91ciBhcHBsaWNhdGlvbi5cbiAgICogSWYgbnVsbCwgaXQgd2lsbCByZWRpcmVjdCB0byB0aGUgQXV0aDAgTG9naW4gUGFnZSBhbmQgc2hvd1xuICAgKiB0aGUgTG9naW4gV2lkZ2V0LlxuICAgKi9cbiAgY29ubmVjdGlvbj86IHN0cmluZztcblxuICAvKipcbiAgICogTW9kaWZ5IHRoZSB2YWx1ZSB1c2VkIGFzIHRoZSBjdXJyZW50IHRpbWUgZHVyaW5nIHRoZSB0b2tlbiB2YWxpZGF0aW9uLlxuICAgKlxuICAgKiAqKk5vdGUqKjogVXNpbmcgdGhpcyBpbXByb3Blcmx5IGNhbiBwb3RlbnRpYWxseSBjb21wcm9taXNlIHRoZSB0b2tlbiB2YWxpZGF0aW9uLlxuICAgKi9cbiAgbm93UHJvdmlkZXI/OiAoKSA9PiBQcm9taXNlPG51bWJlcj4gfCBudW1iZXI7XG5cbiAgLyoqXG4gICAqIElmIHlvdSBuZWVkIHRvIHNlbmQgY3VzdG9tIHBhcmFtZXRlcnMgdG8gdGhlIEF1dGhvcml6YXRpb24gU2VydmVyLFxuICAgKiBtYWtlIHN1cmUgdG8gdXNlIHRoZSBvcmlnaW5hbCBwYXJhbWV0ZXIgbmFtZS5cbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuLyoqXG4gKiBBbmd1bGFyIHNwZWNpZmljIHN0YXRlIHRvIGJlIHN0b3JlZCBiZWZvcmUgcmVkaXJlY3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XG4gIC8qKlxuICAgKiBUYXJnZXQgcGF0aCB0aGUgYXBwIGdldHMgcm91dGVkIHRvIGFmdGVyXG4gICAqIGhhbmRsaW5nIHRoZSBjYWxsYmFjayBmcm9tIEF1dGgwIChkZWZhdWx0cyB0byAnLycpXG4gICAqL1xuICB0YXJnZXQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFueSBjdXN0b20gcGFyYW1ldGVyIHRvIGJlIHN0b3JlZCBpbiBhcHBTdGF0ZVxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG4vKipcbiAqIEdldHMgYW5kIHNldHMgY29uZmlndXJhdGlvbiBmb3IgdGhlIGludGVybmFsIEF1dGgwIGNsaWVudC4gVGhpcyBjYW4gYmVcbiAqIHVzZWQgdG8gcHJvdmlkZSBjb25maWd1cmF0aW9uIG91dHNpZGUgb2YgdXNpbmcgQXV0aE1vZHVsZS5mb3JSb290LCBpLmUuIGZyb21cbiAqIGEgZmFjdG9yeSBwcm92aWRlZCBieSBBUFBfSU5JVElBTElaRVIuXG4gKlxuICogQHVzYWdlXG4gKlxuICogYGBganNcbiAqIC8vIGFwcC5tb2R1bGUudHNcbiAqIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogaW1wb3J0IHsgQXV0aE1vZHVsZSwgQXV0aENsaWVudENvbmZpZyB9IGZyb20gJ0BhdXRoMC9hdXRoMC1hbmd1bGFyJztcbiAqXG4gKiAvLyBQcm92aWRlIGFuIGluaXRpYWxpemVyIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2VcbiAqIGZ1bmN0aW9uIGNvbmZpZ0luaXRpYWxpemVyKFxuICogICBodHRwOiBIdHRwQ2xpZW50LFxuICogICBjb25maWc6IEF1dGhDbGllbnRDb25maWdcbiAqICkge1xuICogICByZXR1cm4gKCkgPT5cbiAqICAgICBodHRwXG4gKiAgICAgICAuZ2V0KCcvY29uZmlnJylcbiAqICAgICAgIC50b1Byb21pc2UoKVxuICogICAgICAgLnRoZW4oKGxvYWRlZENvbmZpZzogYW55KSA9PiBjb25maWcuc2V0KGxvYWRlZENvbmZpZykpOyAgIC8vIFNldCB0aGUgY29uZmlnIHRoYXQgd2FzIGxvYWRlZCBhc3luY2hyb25vdXNseSBoZXJlXG4gKiB9XG4gKlxuICogLy8gUHJvdmlkZSBBUFBfSU5JVElBTElaRVIgd2l0aCB0aGlzIGZ1bmN0aW9uLiBOb3RlIHRoYXQgdGhlcmUgaXMgbm8gY29uZmlnIHBhc3NlZCB0byBBdXRoTW9kdWxlLmZvclJvb3RcbiAqIGltcG9ydHM6IFtcbiAqICAgLy8gb3RoZXIgaW1wb3J0cy4uXG4gKlxuICogICBIdHRwQ2xpZW50TW9kdWxlLFxuICogICBBdXRoTW9kdWxlLmZvclJvb3QoKSwgICAvLzwtIGRvbid0IHBhc3MgYW55IGNvbmZpZyBoZXJlXG4gKiBdLFxuICogcHJvdmlkZXJzOiBbXG4gKiAgIHtcbiAqICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gKiAgICAgdXNlRmFjdG9yeTogY29uZmlnSW5pdGlhbGl6ZXIsICAgIC8vIDwtIHBhc3MgeW91ciBpbml0aWFsaXplciBmdW5jdGlvbiBoZXJlXG4gKiAgICAgZGVwczogW0h0dHBDbGllbnQsIEF1dGhDbGllbnRDb25maWddLFxuICogICAgIG11bHRpOiB0cnVlLFxuICogICB9LFxuICogXSxcbiAqIGBgYFxuICpcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBdXRoQ2xpZW50Q29uZmlnIHtcbiAgcHJpdmF0ZSBjb25maWc/OiBBdXRoQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoQXV0aENvbmZpZ1NlcnZpY2UpIGNvbmZpZz86IEF1dGhDb25maWcpIHtcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICB0aGlzLnNldChjb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGNvbmZpZ3VyYXRpb24gdG8gYmUgcmVhZCBieSBvdGhlciBjb25zdW1lcnMgb2YgdGhlIHNlcnZpY2UgKHNlZSB1c2FnZSBub3RlcylcbiAgICogQHBhcmFtIGNvbmZpZyBUaGUgY29uZmlndXJhdGlvbiB0byBzZXRcbiAgICovXG4gIHNldChjb25maWc6IEF1dGhDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjb25maWcgdGhhdCBoYXMgYmVlbiBzZXQgYnkgb3RoZXIgY29uc3VtZXJzIG9mIHRoZSBzZXJ2aWNlXG4gICAqL1xuICBnZXQoKTogQXV0aENvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnIGFzIEF1dGhDb25maWc7XG4gIH1cbn1cblxuLyoqXG4gKiBJbmplY3Rpb24gdG9rZW4gZm9yIGFjY2Vzc2luZyBjb25maWd1cmF0aW9uLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICogVXNlIHRoZSBgSW5qZWN0YCBkZWNvcmF0b3IgdG8gYWNjZXNzIHRoZSBjb25maWd1cmF0aW9uIGZyb20gYSBzZXJ2aWNlIG9yIGNvbXBvbmVudDpcbiAqXG4gKiBgYGBcbiAqIGNsYXNzIE15U2VydmljZShASW5qZWN0KEF1dGhDb25maWdTZXJ2aWNlKSBjb25maWc6IEF1dGhDb25maWcpIHt9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IEF1dGhDb25maWdTZXJ2aWNlID0gbmV3IEluamVjdGlvblRva2VuPEF1dGhDb25maWc+KFxuICAnYXV0aDAtYW5ndWxhci5jb25maWcnXG4pO1xuIl19