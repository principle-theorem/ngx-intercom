import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../intercom/intercom";
/* tslint:disable:directive-selector */
export class IntercomShowNewMessageDirective {
    constructor(intercom) {
        this.intercom = intercom;
    }
    onClick() {
        const msg = this.message ? this.message : this.intercomShowNewMessage;
        if (msg) {
            this.intercom.showNewMessage(this.message);
        }
        else {
            this.intercom.showNewMessage();
        }
    }
}
IntercomShowNewMessageDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomShowNewMessageDirective, deps: [{ token: i1.Intercom }], target: i0.ɵɵFactoryTarget.Directive });
IntercomShowNewMessageDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.12", type: IntercomShowNewMessageDirective, selector: "[intercomShowNewMessage]", inputs: { message: "message", intercomShowNewMessage: "intercomShowNewMessage" }, host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomShowNewMessageDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[intercomShowNewMessage]'
                }]
        }], ctorParameters: function () { return [{ type: i1.Intercom }]; }, propDecorators: { message: [{
                type: Input
            }], intercomShowNewMessage: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy1uZXctbWVzc2FnZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL25nLWludGVyY29tL2RpcmVjdGl2ZXMvc2hvdy1uZXctbWVzc2FnZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFBOzs7QUFJNUQsdUNBQXVDO0FBSXZDLE1BQU0sT0FBTywrQkFBK0I7SUFJMUMsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN0QyxDQUFDO0lBR0QsT0FBTztRQUNMLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQTtRQUNyRSxJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUMzQzthQUNJO1lBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtTQUMvQjtJQUNILENBQUM7OzZIQWhCVSwrQkFBK0I7aUhBQS9CLCtCQUErQjs0RkFBL0IsK0JBQStCO2tCQUgzQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7aUJBQ3JDOytGQUVVLE9BQU87c0JBQWYsS0FBSztnQkFDRyxzQkFBc0I7c0JBQTlCLEtBQUs7Z0JBTU4sT0FBTztzQkFETixZQUFZO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtJbnRlcmNvbX0gZnJvbSAnLi4vaW50ZXJjb20vaW50ZXJjb20nXG5cbi8qIHRzbGludDpkaXNhYmxlOmRpcmVjdGl2ZS1zZWxlY3RvciAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ludGVyY29tU2hvd05ld01lc3NhZ2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBJbnRlcmNvbVNob3dOZXdNZXNzYWdlRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nXG4gIEBJbnB1dCgpIGludGVyY29tU2hvd05ld01lc3NhZ2U6IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW50ZXJjb206IEludGVyY29tKSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKSB7XG4gICAgY29uc3QgbXNnID0gdGhpcy5tZXNzYWdlID8gdGhpcy5tZXNzYWdlIDogdGhpcy5pbnRlcmNvbVNob3dOZXdNZXNzYWdlXG4gICAgaWYgKG1zZykge1xuICAgICAgdGhpcy5pbnRlcmNvbS5zaG93TmV3TWVzc2FnZSh0aGlzLm1lc3NhZ2UpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pbnRlcmNvbS5zaG93TmV3TWVzc2FnZSgpXG4gICAgfVxuICB9XG59XG4iXX0=