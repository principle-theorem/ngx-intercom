import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../intercom/intercom";
/* tslint:disable:directive-selector */
export class IntercomShowMessagesDirective {
    constructor(intercom) {
        this.intercom = intercom;
    }
    onClick() {
        if (this.intercomShowMessages !== false) {
            this.intercom.showMessages();
        }
    }
}
IntercomShowMessagesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomShowMessagesDirective, deps: [{ token: i1.Intercom }], target: i0.ɵɵFactoryTarget.Directive });
IntercomShowMessagesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.12", type: IntercomShowMessagesDirective, selector: "[intercomShowMessages]", inputs: { intercomShowMessages: "intercomShowMessages" }, host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomShowMessagesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[intercomShowMessages]'
                }]
        }], ctorParameters: function () { return [{ type: i1.Intercom }]; }, propDecorators: { intercomShowMessages: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy1tZXNzYWdlcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL25nLWludGVyY29tL2RpcmVjdGl2ZXMvc2hvdy1tZXNzYWdlcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFBOzs7QUFJNUQsdUNBQXVDO0FBSXZDLE1BQU0sT0FBTyw2QkFBNkI7SUFHeEMsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN0QyxDQUFDO0lBR00sT0FBTztRQUNaLElBQUksSUFBSSxDQUFDLG9CQUFvQixLQUFLLEtBQUssRUFBRTtZQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFBO1NBQzdCO0lBQ0gsQ0FBQzs7MkhBWFUsNkJBQTZCOytHQUE3Qiw2QkFBNkI7NEZBQTdCLDZCQUE2QjtrQkFIekMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2lCQUNuQzsrRkFFVSxvQkFBb0I7c0JBQTVCLEtBQUs7Z0JBTUMsT0FBTztzQkFEYixZQUFZO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtJbnRlcmNvbX0gZnJvbSAnLi4vaW50ZXJjb20vaW50ZXJjb20nXG5cbi8qIHRzbGludDpkaXNhYmxlOmRpcmVjdGl2ZS1zZWxlY3RvciAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ludGVyY29tU2hvd01lc3NhZ2VzXSdcbn0pXG5leHBvcnQgY2xhc3MgSW50ZXJjb21TaG93TWVzc2FnZXNEaXJlY3RpdmUge1xuICBASW5wdXQoKSBpbnRlcmNvbVNob3dNZXNzYWdlczogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW50ZXJjb206IEludGVyY29tKSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIHB1YmxpYyBvbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmludGVyY29tU2hvd01lc3NhZ2VzICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5pbnRlcmNvbS5zaG93TWVzc2FnZXMoKVxuICAgIH1cbiAgfVxufVxuIl19