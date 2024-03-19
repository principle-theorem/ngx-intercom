import * as i0 from '@angular/core';
import { Injectable, ViewEncapsulation, isDevMode, PLATFORM_ID, Inject, Optional, Directive, Input, HostListener, NgModule } from '@angular/core';
import { filter } from 'rxjs/operators';
import * as i2 from '@angular/router';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

class IntercomConfigObject {
}
IntercomConfigObject.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomConfigObject, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
IntercomConfigObject.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomConfigObject });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomConfigObject, decorators: [{
            type: Injectable
        }] });

/**
 * A provider with every Intercom.JS method
 */
class Intercom {
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
            const data = Object.assign(Object.assign({}, intercomData), { app_id });
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
        }], ctorParameters: function () {
        return [{ type: IntercomConfigObject, decorators: [{
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
                    }] }];
    } });

/* tslint:disable:directive-selector */
class IntercomHideDirective {
    constructor(intercom) {
        this.intercom = intercom;
    }
    onClick() {
        if (this.intercomHide !== false) {
            this.intercom.hide();
        }
    }
}
IntercomHideDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomHideDirective, deps: [{ token: Intercom }], target: i0.ɵɵFactoryTarget.Directive });
IntercomHideDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.12", type: IntercomHideDirective, selector: "[intercomHide]", inputs: { intercomHide: "intercomHide" }, host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomHideDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[intercomHide]'
                }]
        }], ctorParameters: function () { return [{ type: Intercom }]; }, propDecorators: { intercomHide: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }] } });

/* tslint:disable:directive-selector */
class IntercomShowMessagesDirective {
    constructor(intercom) {
        this.intercom = intercom;
    }
    onClick() {
        if (this.intercomShowMessages !== false) {
            this.intercom.showMessages();
        }
    }
}
IntercomShowMessagesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomShowMessagesDirective, deps: [{ token: Intercom }], target: i0.ɵɵFactoryTarget.Directive });
IntercomShowMessagesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.12", type: IntercomShowMessagesDirective, selector: "[intercomShowMessages]", inputs: { intercomShowMessages: "intercomShowMessages" }, host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomShowMessagesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[intercomShowMessages]'
                }]
        }], ctorParameters: function () { return [{ type: Intercom }]; }, propDecorators: { intercomShowMessages: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }] } });

/* tslint:disable:directive-selector */
class IntercomShowNewMessageDirective {
    constructor(intercom) {
        this.intercom = intercom;
    }
    onClick() {
        const msg = this.message ? this.message : this.intercomShowNewMessage;
        if (msg) {
            this.intercom.showNewMessage(this.message);
        }
        else {
            this.intercom.showNewMessage();
        }
    }
}
IntercomShowNewMessageDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomShowNewMessageDirective, deps: [{ token: Intercom }], target: i0.ɵɵFactoryTarget.Directive });
IntercomShowNewMessageDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.12", type: IntercomShowNewMessageDirective, selector: "[intercomShowNewMessage]", inputs: { message: "message", intercomShowNewMessage: "intercomShowNewMessage" }, host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomShowNewMessageDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[intercomShowNewMessage]'
                }]
        }], ctorParameters: function () { return [{ type: Intercom }]; }, propDecorators: { message: [{
                type: Input
            }], intercomShowNewMessage: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }] } });

/* tslint:disable:directive-selector */
class IntercomShowDirective {
    constructor(intercom) {
        this.intercom = intercom;
    }
    onClick() {
        const msg = this.message ? this.message : this.intercomShow;
        if (msg) {
            this.intercom.showNewMessage(this.message);
        }
        else {
            this.intercom.show();
        }
    }
}
IntercomShowDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomShowDirective, deps: [{ token: Intercom }], target: i0.ɵɵFactoryTarget.Directive });
IntercomShowDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.12", type: IntercomShowDirective, selector: "[intercomShow]", inputs: { message: "message", intercomShow: "intercomShow" }, host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomShowDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[intercomShow]'
                }]
        }], ctorParameters: function () { return [{ type: Intercom }]; }, propDecorators: { message: [{
                type: Input
            }], intercomShow: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }] } });

/* tslint:disable:directive-selector */
class IntercomShutdownDirective {
    constructor(intercom) {
        this.intercom = intercom;
    }
    onClick() {
        if (this.intercomShutdown !== false) {
            this.intercom.shutdown();
        }
    }
}
IntercomShutdownDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomShutdownDirective, deps: [{ token: Intercom }], target: i0.ɵɵFactoryTarget.Directive });
IntercomShutdownDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.12", type: IntercomShutdownDirective, selector: "[intercomShutdown]", inputs: { intercomShutdown: "intercomShutdown" }, host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomShutdownDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[intercomShutdown]'
                }]
        }], ctorParameters: function () { return [{ type: Intercom }]; }, propDecorators: { intercomShutdown: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }] } });

/* tslint:disable:directive-selector */
class IntercomTrackEventDirective {
    constructor(intercom) {
        this.intercom = intercom;
    }
    onClick() {
        const e = this.event ? this.event : this.intercomTrackEvent;
        if (e && this.metadata) {
            this.intercom.trackEvent(e, this.metadata);
        }
        else if (e && !this.metadata) {
            this.intercom.trackEvent(e);
        }
        else {
            throw new Error('Error in intercomTrackEvent directive: You must specify an event to track.');
        }
    }
}
IntercomTrackEventDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomTrackEventDirective, deps: [{ token: Intercom }], target: i0.ɵɵFactoryTarget.Directive });
IntercomTrackEventDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.12", type: IntercomTrackEventDirective, selector: "[intercomTrackEvent]", inputs: { event: "event", intercomTrackEvent: "intercomTrackEvent", metadata: "metadata" }, host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomTrackEventDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[intercomTrackEvent]'
                }]
        }], ctorParameters: function () { return [{ type: Intercom }]; }, propDecorators: { event: [{
                type: Input
            }], intercomTrackEvent: [{
                type: Input
            }], metadata: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }] } });

class IntercomModule {
    static forRoot(config) {
        return {
            ngModule: IntercomModule,
            providers: [
                Intercom,
                { provide: IntercomConfigObject, useValue: config },
            ]
        };
    }
}
IntercomModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
IntercomModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: IntercomModule, declarations: [IntercomHideDirective,
        IntercomShowMessagesDirective,
        IntercomShowNewMessageDirective,
        IntercomShowDirective,
        IntercomShutdownDirective,
        IntercomTrackEventDirective], imports: [RouterModule], exports: [IntercomHideDirective,
        IntercomShowMessagesDirective,
        IntercomShowNewMessageDirective,
        IntercomShowDirective,
        IntercomShutdownDirective,
        IntercomTrackEventDirective] });
IntercomModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomModule, providers: [
        Intercom,
        IntercomConfigObject
    ], imports: [RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        RouterModule
                    ],
                    declarations: [
                        IntercomHideDirective,
                        IntercomShowMessagesDirective,
                        IntercomShowNewMessageDirective,
                        IntercomShowDirective,
                        IntercomShutdownDirective,
                        IntercomTrackEventDirective
                    ],
                    exports: [
                        IntercomHideDirective,
                        IntercomShowMessagesDirective,
                        IntercomShowNewMessageDirective,
                        IntercomShowDirective,
                        IntercomShutdownDirective,
                        IntercomTrackEventDirective
                    ],
                    providers: [
                        Intercom,
                        IntercomConfigObject
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { Intercom, IntercomConfigObject, IntercomHideDirective, IntercomModule, IntercomShowDirective, IntercomShowMessagesDirective, IntercomShowNewMessageDirective, IntercomShutdownDirective, IntercomTrackEventDirective };
//# sourceMappingURL=supy-io-ngx-intercom.mjs.map
