import { Intercom } from '../intercom/intercom';
import * as i0 from "@angular/core";
export declare class IntercomShowNewMessageDirective {
    private intercom;
    message: string;
    intercomShowNewMessage: string;
    constructor(intercom: Intercom);
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IntercomShowNewMessageDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<IntercomShowNewMessageDirective, "[intercomShowNewMessage]", never, { "message": "message"; "intercomShowNewMessage": "intercomShowNewMessage"; }, {}, never, never, false>;
}
