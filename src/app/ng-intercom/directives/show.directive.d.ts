import { Intercom } from '../intercom/intercom';
import * as i0 from "@angular/core";
export declare class IntercomShowDirective {
    private intercom;
    message: string;
    intercomShow: string;
    constructor(intercom: Intercom);
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IntercomShowDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<IntercomShowDirective, "[intercomShow]", never, { "message": "message"; "intercomShow": "intercomShow"; }, {}, never, never, false>;
}
