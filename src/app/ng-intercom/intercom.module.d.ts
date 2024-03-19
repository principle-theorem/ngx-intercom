import { ModuleWithProviders } from '@angular/core';
import { IntercomConfigObject } from './shared/intercom-config-object.service';
import * as i0 from "@angular/core";
import * as i1 from "./directives/hide.directive";
import * as i2 from "./directives/show-messages.directive";
import * as i3 from "./directives/show-new-message.directive";
import * as i4 from "./directives/show.directive";
import * as i5 from "./directives/shutdown.directive";
import * as i6 from "./directives/track-event.directive";
import * as i7 from "@angular/router";
export declare class IntercomModule {
    static forRoot(config: IntercomConfigObject): ModuleWithProviders<IntercomModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<IntercomModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<IntercomModule, [typeof i1.IntercomHideDirective, typeof i2.IntercomShowMessagesDirective, typeof i3.IntercomShowNewMessageDirective, typeof i4.IntercomShowDirective, typeof i5.IntercomShutdownDirective, typeof i6.IntercomTrackEventDirective], [typeof i7.RouterModule], [typeof i1.IntercomHideDirective, typeof i2.IntercomShowMessagesDirective, typeof i3.IntercomShowNewMessageDirective, typeof i4.IntercomShowDirective, typeof i5.IntercomShutdownDirective, typeof i6.IntercomTrackEventDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<IntercomModule>;
}
