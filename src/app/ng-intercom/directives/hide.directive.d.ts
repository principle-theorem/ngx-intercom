import { Intercom } from '../intercom/intercom';
import * as i0 from "@angular/core";
export declare class IntercomHideDirective {
    private intercom;
    intercomHide: boolean;
    constructor(intercom: Intercom);
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IntercomHideDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<IntercomHideDirective, "[intercomHide]", never, { "intercomHide": "intercomHide"; }, {}, never, never, false>;
}
