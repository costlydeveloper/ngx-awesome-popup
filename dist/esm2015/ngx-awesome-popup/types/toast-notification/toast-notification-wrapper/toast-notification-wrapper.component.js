import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { boxAnimations } from '../../../core/animations/box.animations';
import { fadeInOut } from '../../../core/animations/fade-in-out.animation';
import { GlobalConfigService } from '../../../core/global-config.service';
import { ToastNotificationBelonging } from '../core/classes';
import { WrapperAbstraction } from '../core/wrapper-abstraction';
export class ToastNotificationWrapperComponent extends WrapperAbstraction {
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
    }
}
ToastNotificationWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-toast-notification-wrapper',
                template: "<div\n  class=\"toast-wrapper standard-toast\"\n  (dblclick)=\"onOverlayClicked($event)\"\n  [@fadeInOut]=\"{\n    value: fadeInOutAnimation,\n    params: {\n      closeDelay: toastNotificationBelonging.ToastCoreConfig.AnimationOut === 0 ? '200ms' : '300ms'\n    }\n  }\"\n>\n  <div\n    [@.disabled]=\"\n      toastNotificationBelonging.ToastCoreConfig.AnimationIn === 0 &&\n      toastNotificationBelonging.ToastCoreConfig.AnimationOut === 0\n    \"\n    [@boxAnimations]=\"boxAnimation\"\n    class=\"evolve-toast\"\n    (mouseover)=\"mouseOver()\"\n    (mouseout)=\"mouseOut()\"\n    (click)=\"onToastClicked($event)\"\n    [ngClass]=\"{\n      'standard-dialog': 0 === toastNotificationBelonging.ToastCoreConfig.LayoutType,\n      'success-dialog': 1 === toastNotificationBelonging.ToastCoreConfig.LayoutType,\n      'info-dialog': 2 === toastNotificationBelonging.ToastCoreConfig.LayoutType,\n      'warning-dialog': 3 === toastNotificationBelonging.ToastCoreConfig.LayoutType,\n      'danger-dialog': 4 === toastNotificationBelonging.ToastCoreConfig.LayoutType\n    }\"\n  >\n    <div class=\"toast-title-content\" *ngIf=\"toastNotificationBelonging.Dispatch.Title\">\n      <div class=\"dont-break-out\">\n        <div class=\"text-wrapper dont-break-out\">\n          <div class=\"toast-title-text\">\n            {{ toastNotificationBelonging.Dispatch.Title }}\n          </div>\n          <span class=\"close-ico icon-times-circle\" (click)=\"closeIcon()\" *ngIf=\"!buttonsExist\"></span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"content-holder\" *ngIf=\"toastNotificationBelonging.Dispatch.Message\">\n      <div class=\"icon-section\" *ngIf=\"!toastNotificationBelonging.ToastCoreConfig.DisableIcon\">\n        <span\n          class=\"icon-type-toast\"\n          [ngClass]=\"{\n            '': toastNotificationBelonging.ToastCoreConfig.LayoutType === 0,\n            'ap-icon-success icon-check-circle': toastNotificationBelonging.ToastCoreConfig.LayoutType === 1,\n            'ap-icon-info icon-info-circle': toastNotificationBelonging.ToastCoreConfig.LayoutType === 2,\n            'ap-icon-warning icon-warning': toastNotificationBelonging.ToastCoreConfig.LayoutType === 3,\n            'ap-icon-danger icon-times-circle': toastNotificationBelonging.ToastCoreConfig.LayoutType === 4\n          }\"\n        ></span>\n      </div>\n      <div\n        class=\"text-wrapper-section toast-inner-content\"\n        [ngStyle]=\"{\n          'text-align': toastNotificationBelonging.ToastCoreConfig.TextPosition\n        }\"\n        [ngClass]=\"{\n          'only-message': !toastNotificationBelonging.Dispatch.Title\n        }\"\n      >\n        <div class=\"dont-break-out\">\n          <div class=\"text-wrapper dont-break-out\" *ngIf=\"!toastNotificationBelonging.ToastCoreConfig.AllowHTMLMessage\">\n            <p>{{ toastNotificationBelonging.Dispatch.Message }}</p>\n          </div>\n          <div\n            class=\"text-wrapper\"\n            *ngIf=\"toastNotificationBelonging.ToastCoreConfig.AllowHTMLMessage\"\n            [innerHTML]=\"toastNotificationBelonging.Dispatch.Message\"\n          ></div>\n        </div>\n      </div>\n      <span\n        class=\"close-ico icon-times-circle\"\n        (click)=\"closeIcon()\"\n        *ngIf=\"buttonsExist && !toastNotificationBelonging.Dispatch.Title\"\n      ></span>\n    </div>\n\n    <div class=\"button-holder\">\n      <div\n        class=\"button-section\"\n        *ngIf=\"toastNotificationBelonging.Buttons.length\"\n        [ngStyle]=\"{\n          'text-align': toastNotificationBelonging.ToastCoreConfig.ButtonPosition\n        }\"\n      >\n        <button\n          class=\"ed-btn ed-btn-sm\"\n          *ngFor=\"let button of toastNotificationBelonging.Buttons\"\n          (click)=\"onCustomButton(button)\"\n          [ngClass]=\"{\n            '': button.LayoutType ? button.LayoutType === 0 : false,\n            'ed-btn-success': button.LayoutType ? button.LayoutType === 1 : false,\n            'ed-btn-info': button.LayoutType ? button.LayoutType === 2 : false,\n            'ed-btn-warning': button.LayoutType ? button.LayoutType === 3 : false,\n            'ed-btn-danger': button.LayoutType ? button.LayoutType === 4 : false,\n            'ed-btn-dark': button.LayoutType ? button.LayoutType === 5 : false,\n            'ed-btn-light': button.LayoutType ? button.LayoutType === 6 : false,\n            'ed-btn-primary': button.LayoutType ? button.LayoutType === 7 : false,\n            'ed-btn-secondary': button.LayoutType ? button.LayoutType === 8 : false,\n            'ed-btn-link': button.LayoutType ? button.LayoutType === 9 : false\n          }\"\n        >\n          {{ button.Label }}\n        </button>\n      </div>\n\n      <div\n        class=\"button-section\"\n        [ngStyle]=\"{\n          'text-align': toastNotificationBelonging.ToastCoreConfig.ButtonPosition\n        }\"\n        *ngIf=\"\n          !toastNotificationBelonging.Buttons.length &&\n          (toastNotificationBelonging.ToastCoreConfig.DeclineLabel ||\n            toastNotificationBelonging.ToastCoreConfig.ConfirmLabel)\n        \"\n      >\n        <button\n          class=\"ed-btn ed-btn-sm\"\n          *ngIf=\"toastNotificationBelonging.ToastCoreConfig.ConfirmLabel\"\n          (click)=\"onButtonClick('confirm')\"\n          [ngClass]=\"{\n            'ed-btn-primary': toastNotificationBelonging.ToastCoreConfig.LayoutType === 0,\n            'ed-btn-success': toastNotificationBelonging.ToastCoreConfig.LayoutType === 1,\n            'ed-btn-info': toastNotificationBelonging.ToastCoreConfig.LayoutType === 2,\n            'ed-btn-warning': toastNotificationBelonging.ToastCoreConfig.LayoutType === 3,\n            'ed-btn-danger': toastNotificationBelonging.ToastCoreConfig.LayoutType === 4\n          }\"\n        >\n          {{ toastNotificationBelonging.ToastCoreConfig.ConfirmLabel }}\n        </button>\n        <button\n          class=\"ed-btn ed-btn-sm ed-btn-secondary\"\n          (click)=\"onButtonClick('decline')\"\n          *ngIf=\"toastNotificationBelonging.ToastCoreConfig.DeclineLabel\"\n        >\n          {{ toastNotificationBelonging.ToastCoreConfig.DeclineLabel }}\n        </button>\n      </div>\n    </div>\n\n    <div\n      class=\"progress-bar-container\"\n      *ngIf=\"!buttonsExist && toastNotificationBelonging.ToastCoreConfig.ProgressBar !== 0\"\n    >\n      <div\n        class=\"progress-bar\"\n        [ngStyle]=\"{\n          width: (toastNotificationBelonging.ToastCoreConfig.ProgressBar === 1 ? timer.Progress : timer.Remaining) + '%'\n        }\"\n      ></div>\n    </div>\n  </div>\n</div>\n",
                animations: [fadeInOut(), boxAnimations()],
                styles: [".ed-btn-sm{font-size:12px;font-weight:normal;margin-right:3px;min-width:40px;padding:2px 8px}.ed-btn-md{font-size:14px;margin-right:5px;min-width:60px;padding:3px 10px}.ed-btn-lg{font-size:16px;margin-right:5px;min-width:70px;padding:4px 10px}.ed-btn{background-color:transparent;border:none;border-radius:3px;cursor:pointer;display:inline-block;line-height:1.5;text-align:center;text-decoration:none;-webkit-user-select:none;user-select:none;vertical-align:middle}.ed-btn:hover{color:#989ea5}.ed-btn-check:focus+.ed-btn,.ed-btn:focus{box-shadow:0 0 1px 2px;outline:0}.ed-btn-check:checked+.ed-btn,.ed-btn-check:active+.ed-btn,.ed-btn:active,.ed-btn.active{box-shadow:0 0 1px 2px}.ed-btn-check:checked+.ed-btn:focus,.ed-btn-check:active+.ed-btn:focus,.ed-btn:active:focus,.ed-btn.active:focus{box-shadow:0 0 1px 2px}.ed-btn:disabled,.ed-btn.disabled,fieldset:disabled .ed-btn{box-shadow:none;opacity:.6;pointer-events:none}.ed-btn-primary{color:#fbfbfbcc;background:#ff9e00;border-color:#ff9e00}.ed-btn-primary:hover{color:#fbfbfb;border-color:#ffa81a;background:#ffb133}.ed-btn-check:focus+.ed-btn-primary,.ed-btn-primary:focus{outline:0;box-shadow:0 0 1px 2px #ffa81a}.ed-btn-check:checked+.ed-btn-primary,.ed-btn-check:active+.ed-btn-primary,.ed-btn-primary:active,.ed-btn-primary.active{box-shadow:0 0 1px 2px #ffa81a}.ed-btn-check:checked+.ed-btn-primary:focus,.ed-btn-check:active+.ed-btn-primary:focus,.ed-btn-primary:active:focus,.ed-btn-primary.active:focus{box-shadow:0 0 1px 2px #ffa81a}.ed-btn-secondary{color:#fbfbfbcc;background:#989ea5;border-color:#989ea5}.ed-btn-secondary:hover{color:#fbfbfb;border-color:#a6abb1;background:#b3b8bd}.ed-btn-check:focus+.ed-btn-secondary,.ed-btn-secondary:focus{outline:0;box-shadow:0 0 1px 2px #a6abb1}.ed-btn-check:checked+.ed-btn-secondary,.ed-btn-check:active+.ed-btn-secondary,.ed-btn-secondary:active,.ed-btn-secondary.active{box-shadow:0 0 1px 2px #a6abb1}.ed-btn-check:checked+.ed-btn-secondary:focus,.ed-btn-check:active+.ed-btn-secondary:focus,.ed-btn-secondary:active:focus,.ed-btn-secondary.active:focus{box-shadow:0 0 1px 2px #a6abb1}.ed-btn-success{color:#fbfbfbcc;background:#3caea3;border-color:#3caea3}.ed-btn-success:hover{color:#fbfbfb;border-color:#45bfb3;background:#58c5bb}.ed-btn-check:focus+.ed-btn-success,.ed-btn-success:focus{outline:0;box-shadow:0 0 1px 2px #45bfb3}.ed-btn-check:checked+.ed-btn-success,.ed-btn-check:active+.ed-btn-success,.ed-btn-success:active,.ed-btn-success.active{box-shadow:0 0 1px 2px #45bfb3}.ed-btn-check:checked+.ed-btn-success:focus,.ed-btn-check:active+.ed-btn-success:focus,.ed-btn-success:active:focus,.ed-btn-success.active:focus{box-shadow:0 0 1px 2px #45bfb3}.ed-btn-info{color:#fbfbfbcc;background:#2f8ee5;border-color:#2f8ee5}.ed-btn-info:hover{color:#fbfbfb;border-color:#469ae8;background:#5ca7eb}.ed-btn-check:focus+.ed-btn-info,.ed-btn-info:focus{outline:0;box-shadow:0 0 1px 2px #469ae8}.ed-btn-check:checked+.ed-btn-info,.ed-btn-check:active+.ed-btn-info,.ed-btn-info:active,.ed-btn-info.active{box-shadow:0 0 1px 2px #469ae8}.ed-btn-check:checked+.ed-btn-info:focus,.ed-btn-check:active+.ed-btn-info:focus,.ed-btn-info:active:focus,.ed-btn-info.active:focus{box-shadow:0 0 1px 2px #469ae8}.ed-btn-warning{color:#fbfbfbcc;background:#ffc107;border-color:#ffc107}.ed-btn-warning:hover{color:#fbfbfb;border-color:#ffc721;background:#ffce3a}.ed-btn-check:focus+.ed-btn-warning,.ed-btn-warning:focus{outline:0;box-shadow:0 0 1px 2px #ffc721}.ed-btn-check:checked+.ed-btn-warning,.ed-btn-check:active+.ed-btn-warning,.ed-btn-warning:active,.ed-btn-warning.active{box-shadow:0 0 1px 2px #ffc721}.ed-btn-check:checked+.ed-btn-warning:focus,.ed-btn-check:active+.ed-btn-warning:focus,.ed-btn-warning:active:focus,.ed-btn-warning.active:focus{box-shadow:0 0 1px 2px #ffc721}.ed-btn-danger{color:#fbfbfbcc;background:#e46464;border-color:#e46464}.ed-btn-danger:hover{color:#fbfbfb;border-color:#e87a7a;background:#ec8f8f}.ed-btn-check:focus+.ed-btn-danger,.ed-btn-danger:focus{outline:0;box-shadow:0 0 1px 2px #e87a7a}.ed-btn-check:checked+.ed-btn-danger,.ed-btn-check:active+.ed-btn-danger,.ed-btn-danger:active,.ed-btn-danger.active{box-shadow:0 0 1px 2px #e87a7a}.ed-btn-check:checked+.ed-btn-danger:focus,.ed-btn-check:active+.ed-btn-danger:focus,.ed-btn-danger:active:focus,.ed-btn-danger.active:focus{box-shadow:0 0 1px 2px #e87a7a}.ed-btn-light{color:#343a40cc;background:#fbfbfb;border-color:#fbfbfb}.ed-btn-light:hover{color:#343a40;border-color:#fff;background:white}.ed-btn-check:focus+.ed-btn-light,.ed-btn-light:focus{outline:0;box-shadow:0 0 1px 2px #fff}.ed-btn-check:checked+.ed-btn-light,.ed-btn-check:active+.ed-btn-light,.ed-btn-light:active,.ed-btn-light.active{box-shadow:0 0 1px 2px #fff}.ed-btn-check:checked+.ed-btn-light:focus,.ed-btn-check:active+.ed-btn-light:focus,.ed-btn-light:active:focus,.ed-btn-light.active:focus{box-shadow:0 0 1px 2px #fff}.ed-btn-dark{color:#fbfbfbcc;background:#343a40;border-color:#343a40}.ed-btn-dark:hover{color:#fbfbfb;border-color:#3f474e;background:#4b545c}.ed-btn-check:focus+.ed-btn-dark,.ed-btn-dark:focus{outline:0;box-shadow:0 0 1px 2px #3f474e}.ed-btn-check:checked+.ed-btn-dark,.ed-btn-check:active+.ed-btn-dark,.ed-btn-dark:active,.ed-btn-dark.active{box-shadow:0 0 1px 2px #3f474e}.ed-btn-check:checked+.ed-btn-dark:focus,.ed-btn-check:active+.ed-btn-dark:focus,.ed-btn-dark:active:focus,.ed-btn-dark.active:focus{box-shadow:0 0 1px 2px #3f474e}@font-face{font-family:\"icomoon\";src:url(data:font/eot;base64,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);src:url(data:font/eot;base64,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) format(\"embedded-opentype\"),url(data:font/ttf;base64,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) format(\"truetype\"),url(data:font/woff;base64,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) format(\"woff\"),url(data:font/svg;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPG1ldGFkYXRhPkdlbmVyYXRlZCBieSBJY29Nb29uPC9tZXRhZGF0YT4KCTxkZWZzPgoJCTxmb250IGlkPSJpY29tb29uIiBob3Jpei1hZHYteD0iMTAyNCI+CgkJCTxmb250LWZhY2UgdW5pdHMtcGVyLWVtPSIxMDI0IiBhc2NlbnQ9Ijk2MCIgZGVzY2VudD0iLTY0Ii8+CgkJCTxtaXNzaW5nLWdseXBoIGhvcml6LWFkdi14PSIxMDI0Ii8+CgkJCTxnbHlwaCB1bmljb2RlPSImI3gyMDsiIGhvcml6LWFkdi14PSI1MTIiIGQ9IiIvPgoJCQk8Z2x5cGggdW5pY29kZT0iJiN4ZTkwMDsiIGdseXBoLW5hbWU9InRpbWVzLWNpcmNsZSIgaG9yaXotYWR2LXg9Ijg3OCIgZD0iTTY1Ni41NzEgMzA5LjcxNGMwIDkuNzE0LTQgMTguODU3LTEwLjg1NyAyNS43MTRsLTEwMy40MjkgMTAzLjQyOSAxMDMuNDI5IDEwMy40MjljNi44NTcgNi44NTcgMTAuODU3IDE2IDEwLjg1NyAyNS43MTRzLTQgMTkuNDI5LTEwLjg1NyAyNi4yODZsLTUxLjQyOSA1MS40MjljLTYuODU3IDYuODU3LTE2LjU3MSAxMC44NTctMjYuMjg2IDEwLjg1N3MtMTguODU3LTQtMjUuNzE0LTEwLjg1N2wtMTAzLjQyOS0xMDMuNDI5LTEwMy40MjkgMTAzLjQyOWMtNi44NTcgNi44NTctMTYgMTAuODU3LTI1LjcxNCAxMC44NTdzLTE5LjQyOS00LTI2LjI4Ni0xMC44NTdsLTUxLjQyOS01MS40MjljLTYuODU3LTYuODU3LTEwLjg1Ny0xNi41NzEtMTAuODU3LTI2LjI4NnM0LTE4Ljg1NyAxMC44NTctMjUuNzE0bDEwMy40MjktMTAzLjQyOS0xMDMuNDI5LTEwMy40MjljLTYuODU3LTYuODU3LTEwLjg1Ny0xNi0xMC44NTctMjUuNzE0czQtMTkuNDI5IDEwLjg1Ny0yNi4yODZsNTEuNDI5LTUxLjQyOWM2Ljg1Ny02Ljg1NyAxNi41NzEtMTAuODU3IDI2LjI4Ni0xMC44NTdzMTguODU3IDQgMjUuNzE0IDEwLjg1N2wxMDMuNDI5IDEwMy40MjkgMTAzLjQyOS0xMDMuNDI5YzYuODU3LTYuODU3IDE2LTEwLjg1NyAyNS43MTQtMTAuODU3czE5LjQyOSA0IDI2LjI4NiAxMC44NTdsNTEuNDI5IDUxLjQyOWM2Ljg1NyA2Ljg1NyAxMC44NTcgMTYuNTcxIDEwLjg1NyAyNi4yODZ6TTg3Ny43MTQgNDM4Ljg1N2MwLTI0Mi4yODYtMTk2LjU3MS00MzguODU3LTQzOC44NTctNDM4Ljg1N3MtNDM4Ljg1NyAxOTYuNTcxLTQzOC44NTcgNDM4Ljg1NyAxOTYuNTcxIDQzOC44NTcgNDM4Ljg1NyA0MzguODU3IDQzOC44NTctMTk2LjU3MSA0MzguODU3LTQzOC44NTd6Ii8+CgkJCTxnbHlwaCB1bmljb2RlPSImI3hlOTAxOyIgZ2x5cGgtbmFtZT0iZXhjbGFtYXRpb24tdHJpYW5nbGUsIHdhcm5pbmciIGQ9Ik01ODUuMTQzIDE2NS4xNDN2MTA4LjU3MWMwIDEwLjI4Ni04IDE4Ljg1Ny0xOC4yODYgMTguODU3aC0xMDkuNzE0Yy0xMC4yODYgMC0xOC4yODYtOC41NzEtMTguMjg2LTE4Ljg1N3YtMTA4LjU3MWMwLTEwLjI4NiA4LTE4Ljg1NyAxOC4yODYtMTguODU3aDEwOS43MTRjMTAuMjg2IDAgMTguMjg2IDguNTcxIDE4LjI4NiAxOC44NTd6TTU4NCAzNzguODU3bDEwLjI4NiAyNjIuMjg2YzAgMy40MjktMS43MTQgOC01LjcxNCAxMC44NTctMy40MjkgMi44NTctOC41NzEgNi4yODYtMTMuNzE0IDYuMjg2aC0xMjUuNzE0Yy01LjE0MyAwLTEwLjI4Ni0zLjQyOS0xMy43MTQtNi4yODYtNC0yLjg1Ny01LjcxNC04LjU3MS01LjcxNC0xMmw5LjcxNC0yNjEuMTQzYzAtNy40MjkgOC41NzEtMTMuMTQzIDE5LjQyOS0xMy4xNDNoMTA1LjcxNGMxMC4yODYgMCAxOC44NTcgNS43MTQgMTkuNDI5IDEzLjE0M3pNNTc2IDkxMi41NzFsNDM4Ljg1Ny04MDQuNTcxYzEyLjU3MS0yMi4yODYgMTItNDkuNzE0LTEuMTQzLTcycy0zNy4xNDMtMzYtNjIuODU3LTM2aC04NzcuNzE0Yy0yNS43MTQgMC00OS43MTQgMTMuNzE0LTYyLjg1NyAzNnMtMTMuNzE0IDQ5LjcxNC0xLjE0MyA3Mmw0MzguODU3IDgwNC41NzFjMTIuNTcxIDIzLjQyOSAzNy4xNDMgMzguMjg2IDY0IDM4LjI4NnM1MS40MjktMTQuODU3IDY0LTM4LjI4NnoiLz4KCQkJPGdseXBoIHVuaWNvZGU9IiYjeGU5MDI7IiBnbHlwaC1uYW1lPSJjaGVjay1jaXJjbGUiIGhvcml6LWFkdi14PSI4NzgiIGQ9Ik03MzMuNzE0IDUzMS40MjhjMCA5LjcxNC0zLjQyOSAxOS40MjktMTAuMjg2IDI2LjI4NmwtNTIgNTEuNDI5Yy02Ljg1NyA2Ljg1Ny0xNiAxMC44NTctMjUuNzE0IDEwLjg1N3MtMTguODU3LTQtMjUuNzE0LTEwLjg1N2wtMjMzLjE0My0yMzIuNTcxLTEyOS4xNDMgMTI5LjE0M2MtNi44NTcgNi44NTctMTYgMTAuODU3LTI1LjcxNCAxMC44NTdzLTE4Ljg1Ny00LTI1LjcxNC0xMC44NTdsLTUyLTUxLjQyOWMtNi44NTctNi44NTctMTAuMjg2LTE2LjU3MS0xMC4yODYtMjYuMjg2czMuNDI5LTE4Ljg1NyAxMC4yODYtMjUuNzE0bDIwNi44NTctMjA2Ljg1N2M2Ljg1Ny02Ljg1NyAxNi41NzEtMTAuODU3IDI1LjcxNC0xMC44NTcgOS43MTQgMCAxOS40MjkgNCAyNi4yODYgMTAuODU3bDMxMC4yODYgMzEwLjI4NmM2Ljg1NyA2Ljg1NyAxMC4yODYgMTYgMTAuMjg2IDI1LjcxNHpNODc3LjcxNCA0MzguODU3YzAtMjQyLjI4Ni0xOTYuNTcxLTQzOC44NTctNDM4Ljg1Ny00MzguODU3cy00MzguODU3IDE5Ni41NzEtNDM4Ljg1NyA0MzguODU3IDE5Ni41NzEgNDM4Ljg1NyA0MzguODU3IDQzOC44NTcgNDM4Ljg1Ny0xOTYuNTcxIDQzOC44NTctNDM4Ljg1N3oiLz4KCQkJPGdseXBoIHVuaWNvZGU9IiYjeGU5MDM7IiBnbHlwaC1uYW1lPSJpbmZvLWNpcmNsZSIgaG9yaXotYWR2LXg9Ijg3OCIgZD0iTTU4NS4xNDMgMTY0LjU3MXY5MS40MjljMCAxMC4yODYtOCAxOC4yODYtMTguMjg2IDE4LjI4NmgtNTQuODU3djI5Mi41NzFjMCAxMC4yODYtOCAxOC4yODYtMTguMjg2IDE4LjI4NmgtMTgyLjg1N2MtMTAuMjg2IDAtMTguMjg2LTgtMTguMjg2LTE4LjI4NnYtOTEuNDI5YzAtMTAuMjg2IDgtMTguMjg2IDE4LjI4Ni0xOC4yODZoNTQuODU3di0xODIuODU3aC01NC44NTdjLTEwLjI4NiAwLTE4LjI4Ni04LTE4LjI4Ni0xOC4yODZ2LTkxLjQyOWMwLTEwLjI4NiA4LTE4LjI4NiAxOC4yODYtMTguMjg2aDI1NmMxMC4yODYgMCAxOC4yODYgOCAxOC4yODYgMTguMjg2ek01MTIgNjc2LjU3MXY5MS40MjljMCAxMC4yODYtOCAxOC4yODYtMTguMjg2IDE4LjI4NmgtMTA5LjcxNGMtMTAuMjg2IDAtMTguMjg2LTgtMTguMjg2LTE4LjI4NnYtOTEuNDI5YzAtMTAuMjg2IDgtMTguMjg2IDE4LjI4Ni0xOC4yODZoMTA5LjcxNGMxMC4yODYgMCAxOC4yODYgOCAxOC4yODYgMTguMjg2ek04NzcuNzE0IDQzOC44NTdjMC0yNDIuMjg2LTE5Ni41NzEtNDM4Ljg1Ny00MzguODU3LTQzOC44NTdzLTQzOC44NTcgMTk2LjU3MS00MzguODU3IDQzOC44NTcgMTk2LjU3MSA0MzguODU3IDQzOC44NTcgNDM4Ljg1NyA0MzguODU3LTE5Ni41NzEgNDM4Ljg1Ny00MzguODU3eiIvPgoJCTwvZm9udD48L2RlZnM+Cjwvc3ZnPgo=) format(\"svg\");font-weight:normal;font-style:normal;font-display:block}[class^=icon-],[class*=\" icon-\"]{font-family:\"icomoon\"!important;-webkit-font-smoothing:antialiased;font-style:normal;font-feature-settings:normal;font-variant:normal;font-weight:normal;line-height:1;-moz-osx-font-smoothing:grayscale;speak:never;text-transform:none}.icon-times-circle:before{content:\"\\e900\"}.icon-exclamation-triangle:before{content:\"\\e901\"}.icon-warning:before{content:\"\\e901\"}.icon-check-circle:before{content:\"\\e902\"}.icon-info-circle:before{content:\"\\e903\"}.ngx-awesome-popup-overlay{align-items:center;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);background:rgba(51,32,0,.4);bottom:0;display:flex;flex-direction:column;justify-content:center;left:0;opacity:0;position:fixed;right:0;top:0;z-index:999999999}.evolve-parent-dialog .text-wrapper,.evolve-confirm-box .text-wrapper{text-align:center}.evolve-parent-dialog .text-wrapper-section,.evolve-confirm-box .text-wrapper-section,.evolve-toast .text-wrapper-section{width:100%}.evolve-parent-dialog .text-wrapper-section .text-wrapper,.evolve-confirm-box .text-wrapper-section .text-wrapper,.evolve-toast .text-wrapper-section .text-wrapper{display:block;width:100%}.evolve-parent-dialog .text-wrapper-section .dont-break-out,.evolve-confirm-box .text-wrapper-section .dont-break-out,.evolve-toast .text-wrapper-section .dont-break-out{-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;white-space:pre-wrap;word-wrap:break-word}.evolve-parent-dialog,.evolve-confirm-box{background:#fbfbfb;border-radius:5px;border-top:7px solid;box-shadow:0 0 4px 1px #00000040;display:flex;flex-direction:column;max-height:calc(100vh - 100px);max-width:calc(100vw - 100px);box-sizing:border-box;position:relative;vertical-align:bottom}.evolve-parent-dialog.standard-dialog,.evolve-confirm-box.standard-dialog{border-color:transparent;padding:17px 20px 10px}.evolve-parent-dialog.success-dialog,.evolve-confirm-box.success-dialog{border-color:#3caea3}.evolve-parent-dialog.info-dialog,.evolve-confirm-box.info-dialog{border-color:#2f8ee5}.evolve-parent-dialog.warning-dialog,.evolve-confirm-box.warning-dialog{border-color:#ffc107}.evolve-parent-dialog.danger-dialog,.evolve-confirm-box.danger-dialog{border-color:#e46464}.ap-icon-success{color:#58c5bb}.ap-icon-info{color:#5ca7eb}.ap-icon-warning{color:#ffce3a}.ap-icon-danger{color:#ec8f8f}.toast-wrapper{background:transparent;display:flex;flex-direction:column;margin:auto;opacity:0;padding:0;pointer-events:auto;position:relative;width:100%;z-index:0}.toast-wrapper .progress-bar-container{background:rgba(255,255,255,.2);border-radius:0 0 5px 5px}.toast-wrapper .progress-bar{height:4px;transition:none;width:0}.toast-wrapper .evolve-toast{background:#fbfbfb;border-radius:5px;border-right:4px solid;box-shadow:0 0 4px 1px #00000040;display:flex;flex-direction:column;margin-top:10px;max-height:350px;position:relative;transition:box-shadow .3s ease-in-out;vertical-align:bottom;opacity:0}.toast-wrapper .evolve-toast:hover{box-shadow:0 0 4px 3px #00000040}.toast-wrapper .evolve-toast.standard-dialog{border-color:transparent}.toast-wrapper .evolve-toast.standard-dialog .progress-bar{background-color:#2a2a2a33}.toast-wrapper .evolve-toast.success-dialog{background-color:#dcf3f1;border-color:#3caea3}.toast-wrapper .evolve-toast.success-dialog .progress-bar{background-color:#91d9d2}.toast-wrapper .evolve-toast.info-dialog{background-color:#e4f1fc;border-color:#2f8ee5}.toast-wrapper .evolve-toast.info-dialog .progress-bar{background-color:#a0ccf3}.toast-wrapper .evolve-toast.warning-dialog{background-color:#fff4d3;border-color:#ffc107}.toast-wrapper .evolve-toast.warning-dialog .progress-bar{background-color:#ffe187}.toast-wrapper .evolve-toast.danger-dialog{background-color:#f7d1d1;border-color:#e46464}.toast-wrapper .evolve-toast.danger-dialog .progress-bar{background-color:#ec8f8f}.toast-wrapper .evolve-toast .close-ico{color:#0003;cursor:pointer;font-size:20px;position:absolute;right:6px;top:4px}.toast-wrapper .evolve-toast .toast-title-content{align-items:flex-start;background-clip:padding-box;background-color:#ffffff8c;border-bottom:1px solid rgba(0,0,0,.05);border-radius:5px 5px 0 0;color:#6c757d;display:flex;flex-direction:column;height:auto;justify-content:flex-start;padding:5px 10px;width:auto}.toast-wrapper .evolve-toast .toast-title-content .toast-title-text{font-size:.87rem}.toast-wrapper .evolve-toast .content-holder{align-items:center;color:#6c757d;display:flex;flex-wrap:nowrap;height:100%;justify-content:space-between;overflow:auto;width:100%}.toast-wrapper .evolve-toast .content-holder .icon-section .icon-type-toast{font-size:24px;padding:0 2px 0 6px}.toast-wrapper .evolve-toast .content-holder .toast-inner-content{padding:6px 10px}.toast-wrapper .evolve-toast .content-holder .only-message{padding:6px 27px 6px 10px}.toast-wrapper .evolve-toast .content-holder .text-wrapper{font-size:.97rem;margin:0}.toast-wrapper .evolve-toast .button-holder{display:flex;flex-direction:column;justify-content:flex-end;width:100%}.toast-wrapper .evolve-toast .button-holder .button-section{margin:0;padding:4px 10px}\n"]
            },] }
];
ToastNotificationWrapperComponent.ctorParameters = () => [
    { type: ToastNotificationBelonging, decorators: [{ type: Inject, args: ['toastNotificationBelonging',] }] },
    { type: GlobalConfigService },
    { type: ChangeDetectorRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Qtbm90aWZpY2F0aW9uLXdyYXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbmd4LWF3ZXNvbWUtcG9wdXAvdHlwZXMvdG9hc3Qtbm90aWZpY2F0aW9uL3RvYXN0LW5vdGlmaWNhdGlvbi13cmFwcGVyL3RvYXN0LW5vdGlmaWNhdGlvbi13cmFwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQVFqRSxNQUFNLE9BQU8saUNBQWtDLFNBQVEsa0JBQWtCO0lBQ3ZFLFlBRVMsMEJBQXNELEVBQ3RELE9BQTRCLEVBQzNCLEVBQXFCO1FBRTdCLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBSjNCLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUFDdEQsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFDM0IsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7SUFHL0IsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsd2hOQUEwRDtnQkFFMUQsVUFBVSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsYUFBYSxFQUFFLENBQUM7O2FBQzNDOzs7WUFSUSwwQkFBMEIsdUJBVzlCLE1BQU0sU0FBQyw0QkFBNEI7WUFaL0IsbUJBQW1CO1lBSEosaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBib3hBbmltYXRpb25zIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hbmltYXRpb25zL2JveC5hbmltYXRpb25zJztcbmltcG9ydCB7IGZhZGVJbk91dCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYW5pbWF0aW9ucy9mYWRlLWluLW91dC5hbmltYXRpb24nO1xuaW1wb3J0IHsgR2xvYmFsQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZ2xvYmFsLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFRvYXN0Tm90aWZpY2F0aW9uQmVsb25naW5nIH0gZnJvbSAnLi4vY29yZS9jbGFzc2VzJztcbmltcG9ydCB7IFdyYXBwZXJBYnN0cmFjdGlvbiB9IGZyb20gJy4uL2NvcmUvd3JhcHBlci1hYnN0cmFjdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC10b2FzdC1ub3RpZmljYXRpb24td3JhcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC1ub3RpZmljYXRpb24td3JhcHBlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RvYXN0LW5vdGlmaWNhdGlvbi13cmFwcGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtmYWRlSW5PdXQoKSwgYm94QW5pbWF0aW9ucygpXVxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdE5vdGlmaWNhdGlvbldyYXBwZXJDb21wb25lbnQgZXh0ZW5kcyBXcmFwcGVyQWJzdHJhY3Rpb24gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdCgndG9hc3ROb3RpZmljYXRpb25CZWxvbmdpbmcnKVxuICAgIHB1YmxpYyB0b2FzdE5vdGlmaWNhdGlvbkJlbG9uZ2luZzogVG9hc3ROb3RpZmljYXRpb25CZWxvbmdpbmcsXG4gICAgcHVibGljIGdDb25maWc6IEdsb2JhbENvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgc3VwZXIodG9hc3ROb3RpZmljYXRpb25CZWxvbmdpbmcpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0UmVzcG9uc2UoZmFsc2UpO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMuYXV0b0Nsb3NlKCk7XG4gIH1cbn1cbiJdfQ==