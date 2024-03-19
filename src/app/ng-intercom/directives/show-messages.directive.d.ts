import { Intercom } from '../intercom/intercom';
import * as i0 from "@angular/core";
export declare class IntercomShowMessagesDirective {
    private intercom;
    intercomShowMessages: boolean;
    constructor(intercom: Intercom);
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IntercomShowMessagesDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<IntercomShowMessagesDirective, "[intercomShowMessages]", never, { "intercomShowMessages": "intercomShowMessages"; }, {}, never, never, false>;
}
