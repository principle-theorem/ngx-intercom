import { Intercom } from '../intercom/intercom';
import * as i0 from "@angular/core";
export declare class IntercomTrackEventDirective {
    private intercom;
    event: string;
    intercomTrackEvent: string;
    metadata: any;
    constructor(intercom: Intercom);
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IntercomTrackEventDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<IntercomTrackEventDirective, "[intercomTrackEvent]", never, { "event": "event"; "intercomTrackEvent": "intercomTrackEvent"; "metadata": "metadata"; }, {}, never, never, false>;
}
