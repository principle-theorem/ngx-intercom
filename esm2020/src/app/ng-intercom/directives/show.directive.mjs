import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../intercom/intercom";
/* tslint:disable:directive-selector */
export class IntercomShowDirective {
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
IntercomShowDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomShowDirective, deps: [{ token: i1.Intercom }], target: i0.ɵɵFactoryTarget.Directive });
IntercomShowDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.12", type: IntercomShowDirective, selector: "[intercomShow]", inputs: { message: "message", intercomShow: "intercomShow" }, host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomShowDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[intercomShow]'
                }]
        }], ctorParameters: function () { return [{ type: i1.Intercom }]; }, propDecorators: { message: [{
                type: Input
            }], intercomShow: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL25nLWludGVyY29tL2RpcmVjdGl2ZXMvc2hvdy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFBOzs7QUFJNUQsdUNBQXVDO0FBSXZDLE1BQU0sT0FBTyxxQkFBcUI7SUFJaEMsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN0QyxDQUFDO0lBR00sT0FBTztRQUNaLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUE7UUFDM0QsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDM0M7YUFDSTtZQUNILElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUE7U0FDckI7SUFDSCxDQUFDOzttSEFoQlUscUJBQXFCO3VHQUFyQixxQkFBcUI7NEZBQXJCLHFCQUFxQjtrQkFIakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjsrRkFFVSxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFNQyxPQUFPO3NCQURiLFlBQVk7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge0ludGVyY29tfSBmcm9tICcuLi9pbnRlcmNvbS9pbnRlcmNvbSdcblxuLyogdHNsaW50OmRpc2FibGU6ZGlyZWN0aXZlLXNlbGVjdG9yICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaW50ZXJjb21TaG93XSdcbn0pXG5leHBvcnQgY2xhc3MgSW50ZXJjb21TaG93RGlyZWN0aXZlIHtcbiAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nXG4gIEBJbnB1dCgpIGludGVyY29tU2hvdzogc3RyaW5nXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbnRlcmNvbTogSW50ZXJjb20pIHtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgcHVibGljIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgY29uc3QgbXNnID0gdGhpcy5tZXNzYWdlID8gdGhpcy5tZXNzYWdlIDogdGhpcy5pbnRlcmNvbVNob3dcbiAgICBpZiAobXNnKSB7XG4gICAgICB0aGlzLmludGVyY29tLnNob3dOZXdNZXNzYWdlKHRoaXMubWVzc2FnZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmludGVyY29tLnNob3coKVxuICAgIH1cbiAgfVxufVxuIl19