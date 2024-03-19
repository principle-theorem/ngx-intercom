import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../intercom/intercom";
/* tslint:disable:directive-selector */
export class IntercomShutdownDirective {
    constructor(intercom) {
        this.intercom = intercom;
    }
    onClick() {
        if (this.intercomShutdown !== false) {
            this.intercom.shutdown();
        }
    }
}
IntercomShutdownDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomShutdownDirective, deps: [{ token: i1.Intercom }], target: i0.ɵɵFactoryTarget.Directive });
IntercomShutdownDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.12", type: IntercomShutdownDirective, selector: "[intercomShutdown]", inputs: { intercomShutdown: "intercomShutdown" }, host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomShutdownDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[intercomShutdown]'
                }]
        }], ctorParameters: function () { return [{ type: i1.Intercom }]; }, propDecorators: { intercomShutdown: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2h1dGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9uZy1pbnRlcmNvbS9kaXJlY3RpdmVzL3NodXRkb3duLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUE7OztBQUk1RCx1Q0FBdUM7QUFJdkMsTUFBTSxPQUFPLHlCQUF5QjtJQUdwQyxZQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3RDLENBQUM7SUFHTSxPQUFPO1FBQ1osSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssS0FBSyxFQUFFO1lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUE7U0FDekI7SUFDSCxDQUFDOzt1SEFYVSx5QkFBeUI7MkdBQXpCLHlCQUF5Qjs0RkFBekIseUJBQXlCO2tCQUhyQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7aUJBQy9COytGQUVVLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFNQyxPQUFPO3NCQURiLFlBQVk7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge0ludGVyY29tfSBmcm9tICcuLi9pbnRlcmNvbS9pbnRlcmNvbSdcblxuLyogdHNsaW50OmRpc2FibGU6ZGlyZWN0aXZlLXNlbGVjdG9yICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaW50ZXJjb21TaHV0ZG93bl0nXG59KVxuZXhwb3J0IGNsYXNzIEludGVyY29tU2h1dGRvd25EaXJlY3RpdmUge1xuICBASW5wdXQoKSBpbnRlcmNvbVNodXRkb3duOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbnRlcmNvbTogSW50ZXJjb20pIHtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgcHVibGljIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW50ZXJjb21TaHV0ZG93biAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuaW50ZXJjb20uc2h1dGRvd24oKVxuICAgIH1cbiAgfVxufVxuIl19