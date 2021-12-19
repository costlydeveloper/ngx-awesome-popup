import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { boxAnimations } from '../../../core/animations/box.animations';
import { fadeInOut } from '../../../core/animations/fade-in-out.animation';
import { GlobalConfigService } from '../../../core/global-config.service';
import { ToastNotificationBelonging } from '../core/classes';
import { WrapperAbstraction } from '../core/wrapper-abstraction';
export class ToastNotificationSimpleWrapperComponent extends WrapperAbstraction {
    constructor(toastNotificationBelonging, gConfig, cd) {
        super(toastNotificationBelonging);
        this.toastNotificationBelonging = toastNotificationBelonging;
        this.gConfig = gConfig;
        this.cd = cd;
    }
    ngAfterViewInit() {
        this.setResponse(false);
        this.cd.detectChanges();
        this.autoClose();
        this.setCustomStyles();
    }
}
ToastNotificationSimpleWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-toast-notification-simple-wrapper',
                template: "<div\n  class=\"toast-wrapper simple-toast\"\n  (dblclick)=\"onOverlayClicked($event)\"\n  [@fadeInOut]=\"{\n    value: fadeInOutAnimation,\n    params: {\n      closeDelay: toastNotificationBelonging.ToastCoreConfig.AnimationOut === 0 ? '200ms' : '300ms'\n    }\n  }\"\n>\n  <div\n    class=\"evolve-toast\"\n    [@.disabled]=\"\n      toastNotificationBelonging.ToastCoreConfig.AnimationIn === 0 &&\n      toastNotificationBelonging.ToastCoreConfig.AnimationOut === 0\n    \"\n    [@boxAnimations]=\"boxAnimation\"\n    (mouseover)=\"mouseOver()\"\n    (mouseout)=\"mouseOut()\"\n    (click)=\"onToastClicked($event)\"\n    [ngClass]=\"{\n      'standard-dialog': 0 === toastNotificationBelonging.ToastCoreConfig.LayoutType,\n      'success-dialog': 1 === toastNotificationBelonging.ToastCoreConfig.LayoutType,\n      'info-dialog': 2 === toastNotificationBelonging.ToastCoreConfig.LayoutType,\n      'warning-dialog': 3 === toastNotificationBelonging.ToastCoreConfig.LayoutType,\n      'danger-dialog': 4 === toastNotificationBelonging.ToastCoreConfig.LayoutType\n    }\"\n  >\n    <div class=\"toast-title-content\" #elTitleWrapper *ngIf=\"toastNotificationBelonging.Dispatch.Title\">\n      <div class=\"icon-section\" *ngIf=\"!toastNotificationBelonging.ToastCoreConfig.DisableIcon\">\n        <span\n          class=\"icon-type-toast\"\n          [ngClass]=\"{\n            '': toastNotificationBelonging.ToastCoreConfig.LayoutType === 0,\n            'ap-icon-success icon-check-circle': toastNotificationBelonging.ToastCoreConfig.LayoutType === 1,\n            'ap-icon-info icon-info-circle': toastNotificationBelonging.ToastCoreConfig.LayoutType === 2,\n            'ap-icon-warning icon-warning': toastNotificationBelonging.ToastCoreConfig.LayoutType === 3,\n            'ap-icon-danger icon-times-circle': toastNotificationBelonging.ToastCoreConfig.LayoutType === 4\n          }\"\n        ></span>\n      </div>\n      <div class=\"dont-break-out\">\n        <div class=\"text-wrapper dont-break-out\">\n          {{ toastNotificationBelonging.Dispatch.Title }}\n          <span class=\"close-ico icon-times-circle\" (click)=\"closeIcon()\" *ngIf=\"!buttonsExist\"></span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"content-holder toast-text\" #elTextWrapper *ngIf=\"toastNotificationBelonging.Dispatch.Message\">\n      <div\n        class=\"text-wrapper-section toast-inner-content\"\n        [ngStyle]=\"{\n          'text-align': toastNotificationBelonging.ToastCoreConfig.TextPosition\n        }\"\n        [ngClass]=\"{\n          'only-message': !toastNotificationBelonging.Dispatch.Title\n        }\"\n      >\n        <div class=\"dont-break-out\">\n          <div class=\"text-wrapper dont-break-out\" *ngIf=\"!toastNotificationBelonging.ToastCoreConfig.AllowHTMLMessage\">\n            <p>{{ toastNotificationBelonging.Dispatch.Message }}</p>\n          </div>\n          <div\n            class=\"text-wrapper\"\n            *ngIf=\"toastNotificationBelonging.ToastCoreConfig.AllowHTMLMessage\"\n            [innerHTML]=\"toastNotificationBelonging.Dispatch.Message\"\n          ></div>\n        </div>\n      </div>\n      <span\n        class=\"close-ico icon-times-circle\"\n        (click)=\"closeIcon()\"\n        *ngIf=\"buttonsExist && !toastNotificationBelonging.Dispatch.Title\"\n      ></span>\n    </div>\n\n    <div class=\"button-holder\" #elButtonWrapper>\n      <div\n        class=\"button-section\"\n        *ngIf=\"toastNotificationBelonging.Buttons.length\"\n        [ngStyle]=\"{\n          'text-align': toastNotificationBelonging.ToastCoreConfig.ButtonPosition\n        }\"\n      >\n        <button\n          class=\"ed-btn ed-btn-sm\"\n          #elButton\n          *ngFor=\"let button of toastNotificationBelonging.Buttons\"\n          (click)=\"onCustomButton(button)\"\n          [ngClass]=\"{\n            '': button.LayoutType ? button.LayoutType === 0 : false,\n            'ed-btn-success': button.LayoutType ? button.LayoutType === 1 : false,\n            'ed-btn-info': button.LayoutType ? button.LayoutType === 2 : false,\n            'ed-btn-warning': button.LayoutType ? button.LayoutType === 3 : false,\n            'ed-btn-danger': button.LayoutType ? button.LayoutType === 4 : false,\n            'ed-btn-dark': button.LayoutType ? button.LayoutType === 5 : false,\n            'ed-btn-light': button.LayoutType ? button.LayoutType === 6 : false,\n            'ed-btn-primary': button.LayoutType ? button.LayoutType === 7 : false,\n            'ed-btn-secondary': button.LayoutType ? button.LayoutType === 8 : false,\n            'ed-btn-link': button.LayoutType ? button.LayoutType === 9 : false\n          }\"\n        >\n          {{ button.Label }}\n        </button>\n      </div>\n\n      <div\n        class=\"button-section\"\n        [ngStyle]=\"{\n          'text-align': toastNotificationBelonging.ToastCoreConfig.ButtonPosition\n        }\"\n        *ngIf=\"\n          !toastNotificationBelonging.Buttons.length &&\n          (toastNotificationBelonging.ToastCoreConfig.DeclineLabel ||\n            toastNotificationBelonging.ToastCoreConfig.ConfirmLabel)\n        \"\n      >\n        <button\n          class=\"ed-btn ed-btn-sm\"\n          *ngIf=\"toastNotificationBelonging.ToastCoreConfig.ConfirmLabel\"\n          (click)=\"onButtonClick('confirm')\"\n          [ngClass]=\"{\n            'ed-btn-primary': toastNotificationBelonging.ToastCoreConfig.LayoutType === 0,\n            'ed-btn-success': toastNotificationBelonging.ToastCoreConfig.LayoutType === 1,\n            'ed-btn-info': toastNotificationBelonging.ToastCoreConfig.LayoutType === 2,\n            'ed-btn-warning': toastNotificationBelonging.ToastCoreConfig.LayoutType === 3,\n            'ed-btn-danger': toastNotificationBelonging.ToastCoreConfig.LayoutType === 4\n          }\"\n        >\n          {{ toastNotificationBelonging.ToastCoreConfig.ConfirmLabel }}\n        </button>\n        <button\n          class=\"ed-btn ed-btn-sm ed-btn-secondary\"\n          (click)=\"onButtonClick('decline')\"\n          *ngIf=\"toastNotificationBelonging.ToastCoreConfig.DeclineLabel\"\n        >\n          {{ toastNotificationBelonging.ToastCoreConfig.DeclineLabel }}\n        </button>\n      </div>\n    </div>\n\n    <div\n      class=\"progress-bar-container\"\n      *ngIf=\"!buttonsExist && toastNotificationBelonging.ToastCoreConfig.ProgressBar !== 0\"\n    >\n      <div\n        class=\"progress-bar\"\n        [ngStyle]=\"{\n          width: (toastNotificationBelonging.ToastCoreConfig.ProgressBar === 1 ? timer.Progress : timer.Remaining) + '%'\n        }\"\n      ></div>\n    </div>\n  </div>\n</div>\n",
                // styleUrls: ['../../../styles/types/toast-simple.scss'],
                animations: [fadeInOut(), boxAnimations()]
            },] }
];
ToastNotificationSimpleWrapperComponent.ctorParameters = () => [
    { type: ToastNotificationBelonging, decorators: [{ type: Inject, args: ['toastNotificationBelonging',] }] },
    { type: GlobalConfigService },
    { type: ChangeDetectorRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Qtbm90aWZpY2F0aW9uLXNpbXBsZS13cmFwcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL25neC1hd2Vzb21lLXBvcHVwL3R5cGVzL3RvYXN0LW5vdGlmaWNhdGlvbi90b2FzdC1ub3RpZmljYXRpb24tc2ltcGxlLXdyYXBwZXIvdG9hc3Qtbm90aWZpY2F0aW9uLXNpbXBsZS13cmFwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQVFqRSxNQUFNLE9BQU8sdUNBQXdDLFNBQVEsa0JBQWtCO0lBQzdFLFlBRVMsMEJBQXNELEVBQ3RELE9BQTRCLEVBQzNCLEVBQXFCO1FBRTdCLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBSjNCLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUFDdEQsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFDM0IsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7SUFHL0IsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1Q0FBdUM7Z0JBQ2pELHNpTkFBaUU7Z0JBQ2pFLDBEQUEwRDtnQkFDMUQsVUFBVSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsYUFBYSxFQUFFLENBQUM7YUFDM0M7OztZQVJRLDBCQUEwQix1QkFXOUIsTUFBTSxTQUFDLDRCQUE0QjtZQVovQixtQkFBbUI7WUFISixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJveEFuaW1hdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FuaW1hdGlvbnMvYm94LmFuaW1hdGlvbnMnO1xuaW1wb3J0IHsgZmFkZUluT3V0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hbmltYXRpb25zL2ZhZGUtaW4tb3V0LmFuaW1hdGlvbic7XG5pbXBvcnQgeyBHbG9iYWxDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9nbG9iYWwtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgVG9hc3ROb3RpZmljYXRpb25CZWxvbmdpbmcgfSBmcm9tICcuLi9jb3JlL2NsYXNzZXMnO1xuaW1wb3J0IHsgV3JhcHBlckFic3RyYWN0aW9uIH0gZnJvbSAnLi4vY29yZS93cmFwcGVyLWFic3RyYWN0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXRvYXN0LW5vdGlmaWNhdGlvbi1zaW1wbGUtd3JhcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC1ub3RpZmljYXRpb24tc2ltcGxlLXdyYXBwZXIuY29tcG9uZW50Lmh0bWwnLFxuICAvLyBzdHlsZVVybHM6IFsnLi4vLi4vLi4vc3R5bGVzL3R5cGVzL3RvYXN0LXNpbXBsZS5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtmYWRlSW5PdXQoKSwgYm94QW5pbWF0aW9ucygpXVxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdE5vdGlmaWNhdGlvblNpbXBsZVdyYXBwZXJDb21wb25lbnQgZXh0ZW5kcyBXcmFwcGVyQWJzdHJhY3Rpb24gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdCgndG9hc3ROb3RpZmljYXRpb25CZWxvbmdpbmcnKVxuICAgIHB1YmxpYyB0b2FzdE5vdGlmaWNhdGlvbkJlbG9uZ2luZzogVG9hc3ROb3RpZmljYXRpb25CZWxvbmdpbmcsXG4gICAgcHVibGljIGdDb25maWc6IEdsb2JhbENvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgc3VwZXIodG9hc3ROb3RpZmljYXRpb25CZWxvbmdpbmcpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0UmVzcG9uc2UoZmFsc2UpO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMuYXV0b0Nsb3NlKCk7XG4gICAgdGhpcy5zZXRDdXN0b21TdHlsZXMoKTtcbiAgfVxufVxuIl19