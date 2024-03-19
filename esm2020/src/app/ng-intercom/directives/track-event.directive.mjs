import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../intercom/intercom";
/* tslint:disable:directive-selector */
export class IntercomTrackEventDirective {
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
IntercomTrackEventDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomTrackEventDirective, deps: [{ token: i1.Intercom }], target: i0.ɵɵFactoryTarget.Directive });
IntercomTrackEventDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.12", type: IntercomTrackEventDirective, selector: "[intercomTrackEvent]", inputs: { event: "event", intercomTrackEvent: "intercomTrackEvent", metadata: "metadata" }, host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomTrackEventDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[intercomTrackEvent]'
                }]
        }], ctorParameters: function () { return [{ type: i1.Intercom }]; }, propDecorators: { event: [{
                type: Input
            }], intercomTrackEvent: [{
                type: Input
            }], metadata: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2stZXZlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9uZy1pbnRlcmNvbS9kaXJlY3RpdmVzL3RyYWNrLWV2ZW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUE7OztBQUc1RCx1Q0FBdUM7QUFJdkMsTUFBTSxPQUFPLDJCQUEyQjtJQUt0QyxZQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3RDLENBQUM7SUFHTSxPQUFPO1FBQ1osTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFBO1FBQzNELElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtTQUMzQzthQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUM1QjthQUNJO1lBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyw0RUFBNEUsQ0FBQyxDQUFBO1NBQzlGO0lBQ0gsQ0FBQzs7eUhBcEJVLDJCQUEyQjs2R0FBM0IsMkJBQTJCOzRGQUEzQiwyQkFBMkI7a0JBSHZDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtpQkFDakM7K0ZBRVUsS0FBSztzQkFBYixLQUFLO2dCQUNHLGtCQUFrQjtzQkFBMUIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQU1DLE9BQU87c0JBRGIsWUFBWTt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7SW50ZXJjb219IGZyb20gJy4uL2ludGVyY29tL2ludGVyY29tJ1xuLyogdHNsaW50OmRpc2FibGU6ZGlyZWN0aXZlLXNlbGVjdG9yICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaW50ZXJjb21UcmFja0V2ZW50XSdcbn0pXG5leHBvcnQgY2xhc3MgSW50ZXJjb21UcmFja0V2ZW50RGlyZWN0aXZlIHtcbiAgQElucHV0KCkgZXZlbnQ6IHN0cmluZ1xuICBASW5wdXQoKSBpbnRlcmNvbVRyYWNrRXZlbnQ6IHN0cmluZ1xuICBASW5wdXQoKSBtZXRhZGF0YTogYW55XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbnRlcmNvbTogSW50ZXJjb20pIHtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgcHVibGljIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgY29uc3QgZSA9IHRoaXMuZXZlbnQgPyB0aGlzLmV2ZW50IDogdGhpcy5pbnRlcmNvbVRyYWNrRXZlbnRcbiAgICBpZiAoZSAmJiB0aGlzLm1ldGFkYXRhKSB7XG4gICAgICB0aGlzLmludGVyY29tLnRyYWNrRXZlbnQoZSwgdGhpcy5tZXRhZGF0YSlcbiAgICB9XG4gICAgZWxzZSBpZiAoZSAmJiAhdGhpcy5tZXRhZGF0YSkge1xuICAgICAgdGhpcy5pbnRlcmNvbS50cmFja0V2ZW50KGUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBpbiBpbnRlcmNvbVRyYWNrRXZlbnQgZGlyZWN0aXZlOiBZb3UgbXVzdCBzcGVjaWZ5IGFuIGV2ZW50IHRvIHRyYWNrLicpXG4gICAgfVxuICB9XG59XG4iXX0=