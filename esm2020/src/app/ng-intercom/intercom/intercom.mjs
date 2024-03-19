import { Inject, Injectable, PLATFORM_ID, Optional, isDevMode, ViewEncapsulation, } from "@angular/core";
import { filter } from "rxjs/operators";
import { Router, NavigationEnd } from "@angular/router";
import { DOCUMENT, isPlatformBrowser } from "@angular/common";
import { IntercomConfigObject } from "../shared/intercom-config-object.service";
import * as i0 from "@angular/core";
import * as i1 from "../shared/intercom-config-object.service";
import * as i2 from "@angular/router";
/**
 * A provider with every Intercom.JS method
 */
export class Intercom {
    constructor(config, platformId, router, rendererFactory, document) {
        this.config = config;
        this.platformId = platformId;
        this.router = router;
        this.rendererFactory = rendererFactory;
        this.document = document;
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.renderer2 = this.rendererFactory.createRenderer(this.document, {
            id: "-1",
            encapsulation: ViewEncapsulation.None,
            styles: [],
            data: {},
        });
        // Subscribe to router changes
        if (config && config.updateOnRouterChange) {
            this.router.events
                .pipe(filter((event) => event instanceof NavigationEnd))
                .subscribe((event) => {
                this.update();
            });
        }
        else if (isDevMode()) {
            console.warn(`
      Common practice in single page applications is to update whenever the route changes.
      ng-intercom supports this functionality out of the box just set 'updateOnRouterChange' to true in your Intercom Module config.
       This warning will not appear in production, if you choose not to use router updating.
     `);
        }
    }
    /**
     * If you'd like to control when Intercom is loaded, you can use the 'boot' method.
     * This is useful in situations like a one-page Javascript based application where the user may not be logged in
     * when the page loads. You call this method with the standard intercomSettings object.
     */
    boot(intercomData) {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        const app_id = intercomData.app_id
            ? intercomData.app_id
            : this.config.appId;
        if (!app_id) {
            throw new Error("Please provide Intercom app_id either in module config or in the `boot()` method");
        }
        // Run load and attach to window
        this.loadIntercom(this.config, (event) => {
            // then boot the intercom js
            const data = {
                ...intercomData,
                app_id,
            };
            return this._callIntercom("boot", data);
        });
    }
    /**
     * If you have the Respond product (combined with another product like Engage)
     * you should call the Intercom shutdown method to clear your users’ conversations anytime they logout
     * of your application. Otherwise, the cookie we use to track who was most recently logged in on a given device
     * or computer will keep these conversations in the Messenger for one week.
     * This method will effectively clear out any user data that you have been passing through the JS API.
     */
    shutdown() {
        return this._callIntercom("shutdown");
    }
    /**
     * Calling the update method without any other arguments will trigger the JavaScript to look for new messages
     * that should be displayed to the current user (the one whose details are in the window.intercomSettings variable)
     * and show them if they exist.
     *
     * Calling the update method with a JSON object of user details will update those fields on the current user
     * in addition to logging an impression at the current URL and looking for new messages for the user.
     */
    update(data) {
        return this._callIntercom("update", data);
    }
    /**
     * This will hide the main Messenger panel if it is open. It will not hide the Messenger Launcher.
     */
    hide() {
        return this._callIntercom("hide");
    }
    /**
     *  The article will be shown within the Messenger, and clicking the Messenger back button will return to the previous context.
     * If the Messenger is closed when the method is called, it will be opened first and then the article will be shown.
     */
    showArticle(articleId) {
        return this._callIntercom("showArticle", articleId);
    }
    /**
     * This will show the Messenger. If there are no conversations it will open with the new message view,
     * if there are it will open with the message list.
     *
     * If a `message` parameter is supplied, it will automatically open a new message window, aliasing showNewMessage().
     *
     */
    show(message) {
        if (message) {
            return this.showNewMessage(message);
        }
        return this._callIntercom("show");
    }
    /**
     * To open the message window with the message list you can call `showMessages()`.
     */
    showMessages() {
        return this._callIntercom("showMessages");
    }
    /**
     * To open the message window with the new message view you can call showNewMessage().
     *
     * This function takes an optional parameter that can be used to pre-populate the message composer as shown below.
     */
    showNewMessage(message) {
        return this._callIntercom("showNewMessage", message);
    }
    /**
     * You can submit an event using the trackEvent method.
     * This will associate the event with the currently logged in user and send it to Intercom.
     * The final parameter is a map that can be used to send optional metadata about the event.
     *
     * You can also add custom information to events in the form of event metadata.
     */
    trackEvent(eventName, metadata) {
        return this._callIntercom("trackEvent", eventName, metadata);
    }
    /**
     * A visitor is someone who goes to your site but does not use the messenger.
     * You can track these visitors via the visitor user_id.
     * This user_id can be used to retrieve the visitor or lead through the REST API.
     */
    getVisitorId() {
        return this._callIntercom("getVisitorId");
    }
    /**
     * Alias for getVisitorId()
     * @alias getVisitorId()
     * @readonly
     */
    get visitorId() {
        return this._callIntercom("getVisitorId");
    }
    /**
     * Gives you the ability to hook into the show event. Requires a function argument.
     */
    onShow(handler) {
        return this._callIntercom("onShow", handler);
    }
    /**
     * Gives you the ability to hook into the hide event. Requires a function argument.
     */
    onHide(handler) {
        return this._callIntercom("onHide", handler);
    }
    /**
     * This method allows you to register a function that will be called when the current number of unread messages changes.
     */
    onUnreadCountChange(handler) {
        return this._callIntercom("onUnreadCountChange", handler);
    }
    /**
     * If you would like to trigger a tour based on an action a user or visitor takes in your site or application,
     * ou can use this API method. You need to call this method with the id of the tour you wish to show. The id of
     * the tour can be found in the “Use tour everywhere” section of the tour editor.
     *
     * Please note that tours shown via this API must be published and the “Use tour everywhere” section must be
     * turned on. If you're calling this API using an invalid tour id, nothing will happen.
     */
    startTour(tourId) {
        return this._callIntercom("startTour", tourId);
    }
    /**
     * Private handler to run Intercom methods safely
     */
    _callIntercom(fn, ...args) {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        if (window.Intercom) {
            return window.Intercom(fn, ...args);
        }
        return;
    }
    injectIntercomScript(conf, afterInjectCallback) {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        // Set the window configuration to conf
        window.intercomSettings = conf;
        // Create the intercom script in document
        const s = this.document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = `https://widget.intercom.io/widget/${this.id}`;
        if (s.attachEvent) {
            s.attachEvent("onload", afterInjectCallback);
        }
        else {
            s.addEventListener("load", afterInjectCallback, false);
        }
        if (this.renderer2 && this.renderer2.appendChild) {
            this.renderer2.appendChild(this.document.head, s);
        }
        window.Intercom("update", conf);
    }
    loadIntercom(config, afterLoadCallback) {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.id = config.appId;
        const w = window;
        const ic = w.Intercom;
        // Set window config for Intercom
        w.intercomSettings = config;
        if (typeof ic === "function") {
            ic("reattach_activator");
            ic("update", config);
            afterLoadCallback();
        }
        else {
            const i = function () {
                i.c(arguments);
            };
            i.q = [];
            i.c = function (args) {
                i.q.push(args);
            };
            w.Intercom = i;
            this.injectIntercomScript(config, afterLoadCallback);
        }
    }
}
Intercom.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: Intercom, deps: [{ token: IntercomConfigObject }, { token: PLATFORM_ID }, { token: Router, optional: true }, { token: i0.RendererFactory2 }, { token: DOCUMENT, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
Intercom.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: Intercom });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: Intercom, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.IntercomConfigObject, decorators: [{
                    type: Inject,
                    args: [IntercomConfigObject]
                }] }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: i2.Router, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [Router]
                }] }, { type: i0.RendererFactory2 }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjb20uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL25nLWludGVyY29tL2ludGVyY29tL2ludGVyY29tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxNQUFNLEVBQ04sVUFBVSxFQUNWLFdBQVcsRUFDWCxRQUFRLEVBQ1IsU0FBUyxFQUdULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7QUFHaEY7O0dBRUc7QUFFSCxNQUFNLE9BQU8sUUFBUTtJQUtuQixZQUN3QyxNQUE0QixFQUNuQyxVQUFrQixFQUNiLE1BQWMsRUFDMUMsZUFBaUMsRUFDSCxRQUFhO1FBSmIsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDbkMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNiLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDMUMsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQ0gsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUVuRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsRSxFQUFFLEVBQUUsSUFBSTtZQUNSLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLEVBQUU7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QUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNyQixpQkFBaUIsRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxNQUFNLENBQUMsR0FBUTtnQkFDYixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pCLENBQUMsQ0FBQztZQUNGLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ1QsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLElBQVM7Z0JBQ3ZCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pCLENBQUMsQ0FBQztZQUNGLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3REO0lBQ0gsQ0FBQzs7c0dBL1FVLFFBQVEsa0JBTVQsb0JBQW9CLGFBQ3BCLFdBQVcsYUFDQyxNQUFNLDZEQUVOLFFBQVE7MEdBVm5CLFFBQVE7NEZBQVIsUUFBUTtrQkFEcEIsVUFBVTs7MEJBT04sTUFBTTsyQkFBQyxvQkFBb0I7OzBCQUMzQixNQUFNOzJCQUFDLFdBQVc7OzBCQUNsQixRQUFROzswQkFBSSxNQUFNOzJCQUFDLE1BQU07OzBCQUV6QixRQUFROzswQkFBSSxNQUFNOzJCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIFBMQVRGT1JNX0lELFxuICBPcHRpb25hbCxcbiAgaXNEZXZNb2RlLFxuICBSZW5kZXJlcjIsXG4gIFJlbmRlcmVyRmFjdG9yeTIsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IEludGVyY29tQ29uZmlnT2JqZWN0IH0gZnJvbSBcIi4uL3NoYXJlZC9pbnRlcmNvbS1jb25maWctb2JqZWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7IEludGVyY29tQm9vdElucHV0IH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyY29tLWJvb3QtaW5wdXRcIjtcblxuLyoqXG4gKiBBIHByb3ZpZGVyIHdpdGggZXZlcnkgSW50ZXJjb20uSlMgbWV0aG9kXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbnRlcmNvbSB7XG4gIHByaXZhdGUgaWQ6IHN0cmluZztcblxuICBwcml2YXRlIHJlbmRlcmVyMjogUmVuZGVyZXIyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoSW50ZXJjb21Db25maWdPYmplY3QpIHByaXZhdGUgY29uZmlnOiBJbnRlcmNvbUNvbmZpZ09iamVjdCxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgcGxhdGZvcm1JZDogT2JqZWN0LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoUm91dGVyKSBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSwgLy8gRG9jdW1lbnRcbiAgKSB7XG4gICAgaWYgKCFpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlcjIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcih0aGlzLmRvY3VtZW50LCB7XG4gICAgICBpZDogXCItMVwiLFxuICAgICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICAgIHN0eWxlczogW10sXG4gICAgICBkYXRhOiB7fSxcbiAgICB9KTtcblxuICAgIC8vIFN1YnNjcmliZSB0byByb3V0ZXIgY2hhbmdlc1xuICAgIGlmIChjb25maWcgJiYgY29uZmlnLnVwZGF0ZU9uUm91dGVyQ2hhbmdlKSB7XG4gICAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgICAgLnBpcGUoZmlsdGVyKChldmVudCkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSlcbiAgICAgICAgLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFxuICAgICAgQ29tbW9uIHByYWN0aWNlIGluIHNpbmdsZSBwYWdlIGFwcGxpY2F0aW9ucyBpcyB0byB1cGRhdGUgd2hlbmV2ZXIgdGhlIHJvdXRlIGNoYW5nZXMuXG4gICAgICBuZy1pbnRlcmNvbSBzdXBwb3J0cyB0aGlzIGZ1bmN0aW9uYWxpdHkgb3V0IG9mIHRoZSBib3gganVzdCBzZXQgJ3VwZGF0ZU9uUm91dGVyQ2hhbmdlJyB0byB0cnVlIGluIHlvdXIgSW50ZXJjb20gTW9kdWxlIGNvbmZpZy5cbiAgICAgICBUaGlzIHdhcm5pbmcgd2lsbCBub3QgYXBwZWFyIGluIHByb2R1Y3Rpb24sIGlmIHlvdSBjaG9vc2Ugbm90IHRvIHVzZSByb3V0ZXIgdXBkYXRpbmcuXG4gICAgIGApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB5b3UnZCBsaWtlIHRvIGNvbnRyb2wgd2hlbiBJbnRlcmNvbSBpcyBsb2FkZWQsIHlvdSBjYW4gdXNlIHRoZSAnYm9vdCcgbWV0aG9kLlxuICAgKiBUaGlzIGlzIHVzZWZ1bCBpbiBzaXR1YXRpb25zIGxpa2UgYSBvbmUtcGFnZSBKYXZhc2NyaXB0IGJhc2VkIGFwcGxpY2F0aW9uIHdoZXJlIHRoZSB1c2VyIG1heSBub3QgYmUgbG9nZ2VkIGluXG4gICAqIHdoZW4gdGhlIHBhZ2UgbG9hZHMuIFlvdSBjYWxsIHRoaXMgbWV0aG9kIHdpdGggdGhlIHN0YW5kYXJkIGludGVyY29tU2V0dGluZ3Mgb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIGJvb3QoaW50ZXJjb21EYXRhPzogSW50ZXJjb21Cb290SW5wdXQpOiB2b2lkIHtcbiAgICBpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYXBwX2lkID0gaW50ZXJjb21EYXRhLmFwcF9pZFxuICAgICAgPyBpbnRlcmNvbURhdGEuYXBwX2lkXG4gICAgICA6IHRoaXMuY29uZmlnLmFwcElkO1xuICAgIGlmICghYXBwX2lkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiUGxlYXNlIHByb3ZpZGUgSW50ZXJjb20gYXBwX2lkIGVpdGhlciBpbiBtb2R1bGUgY29uZmlnIG9yIGluIHRoZSBgYm9vdCgpYCBtZXRob2RcIixcbiAgICAgICk7XG4gICAgfVxuICAgIC8vIFJ1biBsb2FkIGFuZCBhdHRhY2ggdG8gd2luZG93XG4gICAgdGhpcy5sb2FkSW50ZXJjb20odGhpcy5jb25maWcsIChldmVudD86IEV2ZW50KSA9PiB7XG4gICAgICAvLyB0aGVuIGJvb3QgdGhlIGludGVyY29tIGpzXG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAuLi5pbnRlcmNvbURhdGEsXG4gICAgICAgIGFwcF9pZCxcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiB0aGlzLl9jYWxsSW50ZXJjb20oXCJib290XCIsIGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIHlvdSBoYXZlIHRoZSBSZXNwb25kIHByb2R1Y3QgKGNvbWJpbmVkIHdpdGggYW5vdGhlciBwcm9kdWN0IGxpa2UgRW5nYWdlKVxuICAgKiB5b3Ugc2hvdWxkIGNhbGwgdGhlIEludGVyY29tIHNodXRkb3duIG1ldGhvZCB0byBjbGVhciB5b3VyIHVzZXJz4oCZIGNvbnZlcnNhdGlvbnMgYW55dGltZSB0aGV5IGxvZ291dFxuICAgKiBvZiB5b3VyIGFwcGxpY2F0aW9uLiBPdGhlcndpc2UsIHRoZSBjb29raWUgd2UgdXNlIHRvIHRyYWNrIHdobyB3YXMgbW9zdCByZWNlbnRseSBsb2dnZWQgaW4gb24gYSBnaXZlbiBkZXZpY2VcbiAgICogb3IgY29tcHV0ZXIgd2lsbCBrZWVwIHRoZXNlIGNvbnZlcnNhdGlvbnMgaW4gdGhlIE1lc3NlbmdlciBmb3Igb25lIHdlZWsuXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgZWZmZWN0aXZlbHkgY2xlYXIgb3V0IGFueSB1c2VyIGRhdGEgdGhhdCB5b3UgaGF2ZSBiZWVuIHBhc3NpbmcgdGhyb3VnaCB0aGUgSlMgQVBJLlxuICAgKi9cbiAgcHVibGljIHNodXRkb3duKCk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLl9jYWxsSW50ZXJjb20oXCJzaHV0ZG93blwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsaW5nIHRoZSB1cGRhdGUgbWV0aG9kIHdpdGhvdXQgYW55IG90aGVyIGFyZ3VtZW50cyB3aWxsIHRyaWdnZXIgdGhlIEphdmFTY3JpcHQgdG8gbG9vayBmb3IgbmV3IG1lc3NhZ2VzXG4gICAqIHRoYXQgc2hvdWxkIGJlIGRpc3BsYXllZCB0byB0aGUgY3VycmVudCB1c2VyICh0aGUgb25lIHdob3NlIGRldGFpbHMgYXJlIGluIHRoZSB3aW5kb3cuaW50ZXJjb21TZXR0aW5ncyB2YXJpYWJsZSlcbiAgICogYW5kIHNob3cgdGhlbSBpZiB0aGV5IGV4aXN0LlxuICAgKlxuICAgKiBDYWxsaW5nIHRoZSB1cGRhdGUgbWV0aG9kIHdpdGggYSBKU09OIG9iamVjdCBvZiB1c2VyIGRldGFpbHMgd2lsbCB1cGRhdGUgdGhvc2UgZmllbGRzIG9uIHRoZSBjdXJyZW50IHVzZXJcbiAgICogaW4gYWRkaXRpb24gdG8gbG9nZ2luZyBhbiBpbXByZXNzaW9uIGF0IHRoZSBjdXJyZW50IFVSTCBhbmQgbG9va2luZyBmb3IgbmV3IG1lc3NhZ2VzIGZvciB0aGUgdXNlci5cbiAgICovXG4gIHB1YmxpYyB1cGRhdGUoZGF0YT86IGFueSk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLl9jYWxsSW50ZXJjb20oXCJ1cGRhdGVcIiwgZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyB3aWxsIGhpZGUgdGhlIG1haW4gTWVzc2VuZ2VyIHBhbmVsIGlmIGl0IGlzIG9wZW4uIEl0IHdpbGwgbm90IGhpZGUgdGhlIE1lc3NlbmdlciBMYXVuY2hlci5cbiAgICovXG4gIHB1YmxpYyBoaWRlKCk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLl9jYWxsSW50ZXJjb20oXCJoaWRlXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqICBUaGUgYXJ0aWNsZSB3aWxsIGJlIHNob3duIHdpdGhpbiB0aGUgTWVzc2VuZ2VyLCBhbmQgY2xpY2tpbmcgdGhlIE1lc3NlbmdlciBiYWNrIGJ1dHRvbiB3aWxsIHJldHVybiB0byB0aGUgcHJldmlvdXMgY29udGV4dC5cbiAgICogSWYgdGhlIE1lc3NlbmdlciBpcyBjbG9zZWQgd2hlbiB0aGUgbWV0aG9kIGlzIGNhbGxlZCwgaXQgd2lsbCBiZSBvcGVuZWQgZmlyc3QgYW5kIHRoZW4gdGhlIGFydGljbGUgd2lsbCBiZSBzaG93bi5cbiAgICovXG4gIHB1YmxpYyBzaG93QXJ0aWNsZShhcnRpY2xlSWQ6IG51bWJlcik6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLl9jYWxsSW50ZXJjb20oXCJzaG93QXJ0aWNsZVwiLCBhcnRpY2xlSWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgd2lsbCBzaG93IHRoZSBNZXNzZW5nZXIuIElmIHRoZXJlIGFyZSBubyBjb252ZXJzYXRpb25zIGl0IHdpbGwgb3BlbiB3aXRoIHRoZSBuZXcgbWVzc2FnZSB2aWV3LFxuICAgKiBpZiB0aGVyZSBhcmUgaXQgd2lsbCBvcGVuIHdpdGggdGhlIG1lc3NhZ2UgbGlzdC5cbiAgICpcbiAgICogSWYgYSBgbWVzc2FnZWAgcGFyYW1ldGVyIGlzIHN1cHBsaWVkLCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgb3BlbiBhIG5ldyBtZXNzYWdlIHdpbmRvdywgYWxpYXNpbmcgc2hvd05ld01lc3NhZ2UoKS5cbiAgICpcbiAgICovXG4gIHB1YmxpYyBzaG93KG1lc3NhZ2U/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAobWVzc2FnZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2hvd05ld01lc3NhZ2UobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9jYWxsSW50ZXJjb20oXCJzaG93XCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvIG9wZW4gdGhlIG1lc3NhZ2Ugd2luZG93IHdpdGggdGhlIG1lc3NhZ2UgbGlzdCB5b3UgY2FuIGNhbGwgYHNob3dNZXNzYWdlcygpYC5cbiAgICovXG4gIHB1YmxpYyBzaG93TWVzc2FnZXMoKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbGxJbnRlcmNvbShcInNob3dNZXNzYWdlc1wiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUbyBvcGVuIHRoZSBtZXNzYWdlIHdpbmRvdyB3aXRoIHRoZSBuZXcgbWVzc2FnZSB2aWV3IHlvdSBjYW4gY2FsbCBzaG93TmV3TWVzc2FnZSgpLlxuICAgKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHRha2VzIGFuIG9wdGlvbmFsIHBhcmFtZXRlciB0aGF0IGNhbiBiZSB1c2VkIHRvIHByZS1wb3B1bGF0ZSB0aGUgbWVzc2FnZSBjb21wb3NlciBhcyBzaG93biBiZWxvdy5cbiAgICovXG4gIHB1YmxpYyBzaG93TmV3TWVzc2FnZShtZXNzYWdlPzogc3RyaW5nKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbGxJbnRlcmNvbShcInNob3dOZXdNZXNzYWdlXCIsIG1lc3NhZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gc3VibWl0IGFuIGV2ZW50IHVzaW5nIHRoZSB0cmFja0V2ZW50IG1ldGhvZC5cbiAgICogVGhpcyB3aWxsIGFzc29jaWF0ZSB0aGUgZXZlbnQgd2l0aCB0aGUgY3VycmVudGx5IGxvZ2dlZCBpbiB1c2VyIGFuZCBzZW5kIGl0IHRvIEludGVyY29tLlxuICAgKiBUaGUgZmluYWwgcGFyYW1ldGVyIGlzIGEgbWFwIHRoYXQgY2FuIGJlIHVzZWQgdG8gc2VuZCBvcHRpb25hbCBtZXRhZGF0YSBhYm91dCB0aGUgZXZlbnQuXG4gICAqXG4gICAqIFlvdSBjYW4gYWxzbyBhZGQgY3VzdG9tIGluZm9ybWF0aW9uIHRvIGV2ZW50cyBpbiB0aGUgZm9ybSBvZiBldmVudCBtZXRhZGF0YS5cbiAgICovXG4gIHB1YmxpYyB0cmFja0V2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBtZXRhZGF0YT86IGFueSk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLl9jYWxsSW50ZXJjb20oXCJ0cmFja0V2ZW50XCIsIGV2ZW50TmFtZSwgbWV0YWRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgdmlzaXRvciBpcyBzb21lb25lIHdobyBnb2VzIHRvIHlvdXIgc2l0ZSBidXQgZG9lcyBub3QgdXNlIHRoZSBtZXNzZW5nZXIuXG4gICAqIFlvdSBjYW4gdHJhY2sgdGhlc2UgdmlzaXRvcnMgdmlhIHRoZSB2aXNpdG9yIHVzZXJfaWQuXG4gICAqIFRoaXMgdXNlcl9pZCBjYW4gYmUgdXNlZCB0byByZXRyaWV2ZSB0aGUgdmlzaXRvciBvciBsZWFkIHRocm91Z2ggdGhlIFJFU1QgQVBJLlxuICAgKi9cbiAgcHVibGljIGdldFZpc2l0b3JJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jYWxsSW50ZXJjb20oXCJnZXRWaXNpdG9ySWRcIik7XG4gIH1cblxuICAvKipcbiAgICogQWxpYXMgZm9yIGdldFZpc2l0b3JJZCgpXG4gICAqIEBhbGlhcyBnZXRWaXNpdG9ySWQoKVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCB2aXNpdG9ySWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY2FsbEludGVyY29tKFwiZ2V0VmlzaXRvcklkXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVzIHlvdSB0aGUgYWJpbGl0eSB0byBob29rIGludG8gdGhlIHNob3cgZXZlbnQuIFJlcXVpcmVzIGEgZnVuY3Rpb24gYXJndW1lbnQuXG4gICAqL1xuICBwdWJsaWMgb25TaG93KGhhbmRsZXI6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5fY2FsbEludGVyY29tKFwib25TaG93XCIsIGhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVzIHlvdSB0aGUgYWJpbGl0eSB0byBob29rIGludG8gdGhlIGhpZGUgZXZlbnQuIFJlcXVpcmVzIGEgZnVuY3Rpb24gYXJndW1lbnQuXG4gICAqL1xuICBwdWJsaWMgb25IaWRlKGhhbmRsZXI6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5fY2FsbEludGVyY29tKFwib25IaWRlXCIsIGhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGFsbG93cyB5b3UgdG8gcmVnaXN0ZXIgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGN1cnJlbnQgbnVtYmVyIG9mIHVucmVhZCBtZXNzYWdlcyBjaGFuZ2VzLlxuICAgKi9cbiAgcHVibGljIG9uVW5yZWFkQ291bnRDaGFuZ2UoaGFuZGxlcjogKHVucmVhZENvdW50PzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbGxJbnRlcmNvbShcIm9uVW5yZWFkQ291bnRDaGFuZ2VcIiwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogSWYgeW91IHdvdWxkIGxpa2UgdG8gdHJpZ2dlciBhIHRvdXIgYmFzZWQgb24gYW4gYWN0aW9uIGEgdXNlciBvciB2aXNpdG9yIHRha2VzIGluIHlvdXIgc2l0ZSBvciBhcHBsaWNhdGlvbixcbiAgICogb3UgY2FuIHVzZSB0aGlzIEFQSSBtZXRob2QuIFlvdSBuZWVkIHRvIGNhbGwgdGhpcyBtZXRob2Qgd2l0aCB0aGUgaWQgb2YgdGhlIHRvdXIgeW91IHdpc2ggdG8gc2hvdy4gVGhlIGlkIG9mXG4gICAqIHRoZSB0b3VyIGNhbiBiZSBmb3VuZCBpbiB0aGUg4oCcVXNlIHRvdXIgZXZlcnl3aGVyZeKAnSBzZWN0aW9uIG9mIHRoZSB0b3VyIGVkaXRvci5cbiAgICpcbiAgICogUGxlYXNlIG5vdGUgdGhhdCB0b3VycyBzaG93biB2aWEgdGhpcyBBUEkgbXVzdCBiZSBwdWJsaXNoZWQgYW5kIHRoZSDigJxVc2UgdG91ciBldmVyeXdoZXJl4oCdIHNlY3Rpb24gbXVzdCBiZVxuICAgKiB0dXJuZWQgb24uIElmIHlvdSdyZSBjYWxsaW5nIHRoaXMgQVBJIHVzaW5nIGFuIGludmFsaWQgdG91ciBpZCwgbm90aGluZyB3aWxsIGhhcHBlbi5cbiAgICovXG4gIHB1YmxpYyBzdGFydFRvdXIodG91cklkOiBudW1iZXIpOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5fY2FsbEludGVyY29tKFwic3RhcnRUb3VyXCIsIHRvdXJJZCk7XG4gIH1cblxuICAvKipcbiAgICogUHJpdmF0ZSBoYW5kbGVyIHRvIHJ1biBJbnRlcmNvbSBtZXRob2RzIHNhZmVseVxuICAgKi9cbiAgcHJpdmF0ZSBfY2FsbEludGVyY29tKGZuOiBzdHJpbmcsIC4uLmFyZ3MpIHtcbiAgICBpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCg8YW55PndpbmRvdykuSW50ZXJjb20pIHtcbiAgICAgIHJldHVybiAoPGFueT53aW5kb3cpLkludGVyY29tKGZuLCAuLi5hcmdzKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaW5qZWN0SW50ZXJjb21TY3JpcHQoXG4gICAgY29uZjogSW50ZXJjb21Db25maWdPYmplY3QsXG4gICAgYWZ0ZXJJbmplY3RDYWxsYmFjazogKGV2OiBFdmVudCkgPT4gYW55LFxuICApOiB2b2lkIHtcbiAgICBpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIHdpbmRvdyBjb25maWd1cmF0aW9uIHRvIGNvbmZcbiAgICAoPGFueT53aW5kb3cpLmludGVyY29tU2V0dGluZ3MgPSBjb25mO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBpbnRlcmNvbSBzY3JpcHQgaW4gZG9jdW1lbnRcbiAgICBjb25zdCBzID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgIHMudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XG4gICAgcy5hc3luYyA9IHRydWU7XG4gICAgcy5zcmMgPSBgaHR0cHM6Ly93aWRnZXQuaW50ZXJjb20uaW8vd2lkZ2V0LyR7dGhpcy5pZH1gO1xuXG4gICAgaWYgKChzIGFzIGFueSkuYXR0YWNoRXZlbnQpIHtcbiAgICAgIChzIGFzIGFueSkuYXR0YWNoRXZlbnQoXCJvbmxvYWRcIiwgYWZ0ZXJJbmplY3RDYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHMuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgYWZ0ZXJJbmplY3RDYWxsYmFjaywgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJlbmRlcmVyMiAmJiB0aGlzLnJlbmRlcmVyMi5hcHBlbmRDaGlsZCkge1xuICAgICAgdGhpcy5yZW5kZXJlcjIuYXBwZW5kQ2hpbGQodGhpcy5kb2N1bWVudC5oZWFkLCBzKTtcbiAgICB9XG5cbiAgICAoPGFueT53aW5kb3cpLkludGVyY29tKFwidXBkYXRlXCIsIGNvbmYpO1xuICB9XG5cbiAgbG9hZEludGVyY29tKFxuICAgIGNvbmZpZzogSW50ZXJjb21Db25maWdPYmplY3QsXG4gICAgYWZ0ZXJMb2FkQ2FsbGJhY2s6IChldj86IEV2ZW50KSA9PiBhbnksXG4gICk6IHZvaWQge1xuICAgIGlmICghaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaWQgPSBjb25maWcuYXBwSWQ7XG4gICAgY29uc3QgdyA9IDxhbnk+d2luZG93O1xuICAgIGNvbnN0IGljID0gdy5JbnRlcmNvbTtcblxuICAgIC8vIFNldCB3aW5kb3cgY29uZmlnIGZvciBJbnRlcmNvbVxuICAgIHcuaW50ZXJjb21TZXR0aW5ncyA9IGNvbmZpZztcblxuICAgIGlmICh0eXBlb2YgaWMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgaWMoXCJyZWF0dGFjaF9hY3RpdmF0b3JcIik7XG4gICAgICBpYyhcInVwZGF0ZVwiLCBjb25maWcpO1xuICAgICAgYWZ0ZXJMb2FkQ2FsbGJhY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaTogYW55ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpLmMoYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBpLnEgPSBbXTtcbiAgICAgIGkuYyA9IGZ1bmN0aW9uIChhcmdzOiBhbnkpIHtcbiAgICAgICAgaS5xLnB1c2goYXJncyk7XG4gICAgICB9O1xuICAgICAgdy5JbnRlcmNvbSA9IGk7XG4gICAgICB0aGlzLmluamVjdEludGVyY29tU2NyaXB0KGNvbmZpZywgYWZ0ZXJMb2FkQ2FsbGJhY2spO1xuICAgIH1cbiAgfVxufVxuIl19