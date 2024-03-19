import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../intercom/intercom";
/* tslint:disable:directive-selector */
export class IntercomHideDirective {
    constructor(intercom) {
        this.intercom = intercom;
    }
    onClick() {
        if (this.intercomHide !== false) {
            this.intercom.hide();
        }
    }
}
IntercomHideDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomHideDirective, deps: [{ token: i1.Intercom }], target: i0.ɵɵFactoryTarget.Directive });
IntercomHideDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.12", type: IntercomHideDirective, selector: "[intercomHide]", inputs: { intercomHide: "intercomHide" }, host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomHideDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[intercomHide]'
                }]
        }], ctorParameters: function () { return [{ type: i1.Intercom }]; }, propDecorators: { intercomHide: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL25nLWludGVyY29tL2RpcmVjdGl2ZXMvaGlkZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFBOzs7QUFJOUQsdUNBQXVDO0FBSXZDLE1BQU0sT0FBTyxxQkFBcUI7SUFHaEMsWUFDVSxRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3hCLENBQUM7SUFHRSxPQUFPO1FBQ1osSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLEtBQUssRUFBRTtZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFBO1NBQ3ZCO0lBQ0gsQ0FBQzs7bUhBWlUscUJBQXFCO3VHQUFyQixxQkFBcUI7NEZBQXJCLHFCQUFxQjtrQkFIakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjsrRkFFVSxZQUFZO3NCQUFwQixLQUFLO2dCQU9DLE9BQU87c0JBRGIsWUFBWTt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgSW50ZXJjb20gfSBmcm9tICcuLi9pbnRlcmNvbS9pbnRlcmNvbSdcblxuLyogdHNsaW50OmRpc2FibGU6ZGlyZWN0aXZlLXNlbGVjdG9yICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaW50ZXJjb21IaWRlXSdcbn0pXG5leHBvcnQgY2xhc3MgSW50ZXJjb21IaWRlRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgaW50ZXJjb21IaWRlOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbnRlcmNvbTogSW50ZXJjb21cbiAgKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIHB1YmxpYyBvbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmludGVyY29tSGlkZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5pbnRlcmNvbS5oaWRlKClcbiAgICB9XG4gIH1cbn1cbiJdfQ==