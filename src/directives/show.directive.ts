import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../providers/intercom';

@Directive({
    selector: '[intercomShow]'
})
export class IntercomShowDirective {
    @Input() message: string;
    @Input() intercomShow: string;

    constructor(
        private intercom: Intercom
    ) { }

    @HostListener('click')
    onClick() {
        let msg = this.message ? this.message : this.intercomShow;
        if (msg) {
            this.intercom.showNewMessage(this.message);
        } else {
            this.intercom.show();
        }
    }
}
