import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IntercomHideDirective } from './directives/hide.directive';
import { IntercomShowMessagesDirective } from './directives/show-messages.directive';
import { IntercomShowNewMessageDirective } from './directives/show-new-message.directive';
import { IntercomShowDirective } from './directives/show.directive';
import { IntercomShutdownDirective } from './directives/shutdown.directive';
import { IntercomTrackEventDirective } from './directives/track-event.directive';
import { Intercom } from './intercom/intercom';
import { IntercomConfigObject } from './shared/intercom-config-object.service';
import * as i0 from "@angular/core";
export class IntercomModule {
    static forRoot(config) {
        return {
            ngModule: IntercomModule,
            providers: [
                Intercom,
                { provide: IntercomConfigObject, useValue: config },
            ]
        };
    }
}
IntercomModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
IntercomModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: IntercomModule, declarations: [IntercomHideDirective,
        IntercomShowMessagesDirective,
        IntercomShowNewMessageDirective,
        IntercomShowDirective,
        IntercomShutdownDirective,
        IntercomTrackEventDirective], imports: [RouterModule], exports: [IntercomHideDirective,
        IntercomShowMessagesDirective,
        IntercomShowNewMessageDirective,
        IntercomShowDirective,
        IntercomShutdownDirective,
        IntercomTrackEventDirective] });
IntercomModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomModule, providers: [
        Intercom,
        IntercomConfigObject
    ], imports: [RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: IntercomModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        RouterModule
                    ],
                    declarations: [
                        IntercomHideDirective,
                        IntercomShowMessagesDirective,
                        IntercomShowNewMessageDirective,
                        IntercomShowDirective,
                        IntercomShutdownDirective,
                        IntercomTrackEventDirective
                    ],
                    exports: [
                        IntercomHideDirective,
                        IntercomShowMessagesDirective,
                        IntercomShowNewMessageDirective,
                        IntercomShowDirective,
                        IntercomShutdownDirective,
                        IntercomTrackEventDirective
                    ],
                    providers: [
                        Intercom,
                        IntercomConfigObject
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjb20ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9uZy1pbnRlcmNvbS9pbnRlcmNvbS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBQzlDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZCQUE2QixDQUFBO0FBQ25FLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHNDQUFzQyxDQUFBO0FBQ3BGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFBO0FBQ3pGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZCQUE2QixDQUFBO0FBQ25FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFBO0FBQzNFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFBO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQTtBQUM5QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQTs7QUE0QjlFLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBNEI7UUFDekMsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVCxRQUFRO2dCQUNSLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7YUFDcEQ7U0FDRixDQUFBO0lBQ0gsQ0FBQzs7NEdBVFUsY0FBYzs2R0FBZCxjQUFjLGlCQXBCdkIscUJBQXFCO1FBQ3JCLDZCQUE2QjtRQUM3QiwrQkFBK0I7UUFDL0IscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QiwyQkFBMkIsYUFSM0IsWUFBWSxhQVdaLHFCQUFxQjtRQUNyQiw2QkFBNkI7UUFDN0IsK0JBQStCO1FBQy9CLHFCQUFxQjtRQUNyQix5QkFBeUI7UUFDekIsMkJBQTJCOzZHQU9sQixjQUFjLGFBTGQ7UUFDVCxRQUFRO1FBQ1Isb0JBQW9CO0tBQ3JCLFlBckJDLFlBQVk7NEZBdUJILGNBQWM7a0JBekIxQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRTt3QkFDWixxQkFBcUI7d0JBQ3JCLDZCQUE2Qjt3QkFDN0IsK0JBQStCO3dCQUMvQixxQkFBcUI7d0JBQ3JCLHlCQUF5Qjt3QkFDekIsMkJBQTJCO3FCQUM1QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AscUJBQXFCO3dCQUNyQiw2QkFBNkI7d0JBQzdCLCtCQUErQjt3QkFDL0IscUJBQXFCO3dCQUNyQix5QkFBeUI7d0JBQ3pCLDJCQUEyQjtxQkFDNUI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULFFBQVE7d0JBQ1Isb0JBQW9CO3FCQUNyQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IEludGVyY29tSGlkZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9oaWRlLmRpcmVjdGl2ZSdcbmltcG9ydCB7IEludGVyY29tU2hvd01lc3NhZ2VzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3Nob3ctbWVzc2FnZXMuZGlyZWN0aXZlJ1xuaW1wb3J0IHsgSW50ZXJjb21TaG93TmV3TWVzc2FnZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9zaG93LW5ldy1tZXNzYWdlLmRpcmVjdGl2ZSdcbmltcG9ydCB7IEludGVyY29tU2hvd0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9zaG93LmRpcmVjdGl2ZSdcbmltcG9ydCB7IEludGVyY29tU2h1dGRvd25EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvc2h1dGRvd24uZGlyZWN0aXZlJ1xuaW1wb3J0IHsgSW50ZXJjb21UcmFja0V2ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3RyYWNrLWV2ZW50LmRpcmVjdGl2ZSdcbmltcG9ydCB7IEludGVyY29tIH0gZnJvbSAnLi9pbnRlcmNvbS9pbnRlcmNvbSdcbmltcG9ydCB7IEludGVyY29tQ29uZmlnT2JqZWN0IH0gZnJvbSAnLi9zaGFyZWQvaW50ZXJjb20tY29uZmlnLW9iamVjdC5zZXJ2aWNlJ1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgSW50ZXJjb21IaWRlRGlyZWN0aXZlLFxuICAgIEludGVyY29tU2hvd01lc3NhZ2VzRGlyZWN0aXZlLFxuICAgIEludGVyY29tU2hvd05ld01lc3NhZ2VEaXJlY3RpdmUsXG4gICAgSW50ZXJjb21TaG93RGlyZWN0aXZlLFxuICAgIEludGVyY29tU2h1dGRvd25EaXJlY3RpdmUsXG4gICAgSW50ZXJjb21UcmFja0V2ZW50RGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBJbnRlcmNvbUhpZGVEaXJlY3RpdmUsXG4gICAgSW50ZXJjb21TaG93TWVzc2FnZXNEaXJlY3RpdmUsXG4gICAgSW50ZXJjb21TaG93TmV3TWVzc2FnZURpcmVjdGl2ZSxcbiAgICBJbnRlcmNvbVNob3dEaXJlY3RpdmUsXG4gICAgSW50ZXJjb21TaHV0ZG93bkRpcmVjdGl2ZSxcbiAgICBJbnRlcmNvbVRyYWNrRXZlbnREaXJlY3RpdmVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgSW50ZXJjb20sXG4gICAgSW50ZXJjb21Db25maWdPYmplY3RcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJbnRlcmNvbU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogSW50ZXJjb21Db25maWdPYmplY3QpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEludGVyY29tTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBJbnRlcmNvbU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBJbnRlcmNvbSxcbiAgICAgICAgeyBwcm92aWRlOiBJbnRlcmNvbUNvbmZpZ09iamVjdCwgdXNlVmFsdWU6IGNvbmZpZyB9LFxuICAgICAgXVxuICAgIH1cbiAgfVxufVxuIl19