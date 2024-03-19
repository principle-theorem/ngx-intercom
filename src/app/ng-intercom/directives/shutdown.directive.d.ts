import { Intercom } from '../intercom/intercom';
import * as i0 from "@angular/core";
export declare class IntercomShutdownDirective {
    private intercom;
    intercomShutdown: boolean;
    constructor(intercom: Intercom);
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IntercomShutdownDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<IntercomShutdownDirective, "[intercomShutdown]", never, { "intercomShutdown": "intercomShutdown"; }, {}, never, never, false>;
}
