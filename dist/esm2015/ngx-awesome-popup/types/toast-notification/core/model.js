import { Subject } from "rxjs";
import { map, take } from "rxjs/operators";
import { GlobalClass } from "../../../core/global";
import { ServiceLocator } from "../../../locator.service";
import { ToastNotificationConfigService } from "./toast-notification-config.service";
import { ToastNotificationService } from "./toast-notification.service";
export var ToastNotificationClass;
(function (ToastNotificationClass) {
    // region *** Public ***
    class ToastNotificationInitializer {
        constructor() {
            this.toastNotificationCarrier = new ToastNotificationClass.ToastNotificationCarrier();
        }
        openToastNotification$() {
            return this.toastNotificationCarrier.openToastNotification$().pipe(map((resp) => {
                const basicToastNotificationResponse = new ToastNotificationResponse();
                const dataControl = new GlobalClass.DataControl();
                dataControl.copyValuesFrom(resp, basicToastNotificationResponse);
                return basicToastNotificationResponse;
            }), take(1));
        }
        setButtons(_Buttons) {
            this.toastNotificationCarrier.setButtons(_Buttons);
        }
        setConfig(_ToastNotificationConfig) {
            this.toastNotificationCarrier.setConfig(_ToastNotificationConfig);
        }
        setDispatch(_Title, _Message = null) {
            this.toastNotificationCarrier.setTitle(_Title);
            this.toastNotificationCarrier.setMessage(_Message);
        }
        setTitle(_Title) {
            this.toastNotificationCarrier.setTitle(_Title);
        }
        setMessage(_Message) {
            this.toastNotificationCarrier.setMessage(_Message);
        }
        setButtonLabels(_Confirm, _Decline) {
            this.toastNotificationCarrier.setButtonLabels(_Confirm, _Decline);
        }
    }
    ToastNotificationClass.ToastNotificationInitializer = ToastNotificationInitializer;
    class ToastNotificationResponse extends GlobalClass.DataControl {
        constructor() {
            super();
            // private Response: DialogPrepareResponse            = new DialogPrepareResponse();
            this.Success = null;
            this.ClickedButtonID = null;
        }
        setSuccess(_IsSuccess) {
            this.Success = _IsSuccess;
        }
        setClickedButtonID(_ClickedButtonID) {
            this.ClickedButtonID = _ClickedButtonID;
        }
    }
    ToastNotificationClass.ToastNotificationResponse = ToastNotificationResponse;
    class ToastNotificationEventsController {
        constructor(EntityUniqueID) {
            this.EntityUniqueID = EntityUniqueID;
            this._afterClosed = new Subject();
            this.afterClosed$ = this._afterClosed.asObservable();
            this._onButtonClick = new Subject();
            this.onButtonClick$ = this._onButtonClick.asObservable();
            this._buttonList = new Subject();
            this.buttonList$ = this._buttonList.asObservable();
        }
        close(_Response) {
            const response = _Response ? _Response : this.defaultResponse;
            this._afterClosed.next(response);
        }
        onButtonClick(_Button) {
            this.defaultResponse.setClickedButtonID(_Button.ID);
            this._onButtonClick.next(_Button);
        }
        setButtonList(_ButtonList) {
            this._buttonList.next(_ButtonList);
        }
        setDefaultResponse(_Response) {
            this.defaultResponse = _Response;
        }
    }
    ToastNotificationClass.ToastNotificationEventsController = ToastNotificationEventsController;
    // endregion
    class ToastNotificationDefaultResponse extends ToastNotificationResponse {
        constructor() {
            super();
            this.toastNotificationBelonging = null;
        }
        setBelonging(_ToastNotificationBelonging) {
            this.toastNotificationBelonging = _ToastNotificationBelonging;
        }
    }
    ToastNotificationClass.ToastNotificationDefaultResponse = ToastNotificationDefaultResponse;
    class ToastNotificationCarrier {
        constructor() {
            this.toastNotificationBelonging = new ToastNotificationClass.ToastNotificationBelonging();
        }
        setButtons(_Buttons) {
            if (_Buttons.length) {
                this.toastNotificationBelonging.Buttons = _Buttons;
            }
        }
        setTitle(_Title) {
            this.toastNotificationBelonging.Dispatch.Title = _Title;
        }
        setMessage(_Message) {
            this.toastNotificationBelonging.Dispatch.Message = _Message;
        }
        setButtonLabels(_Confirm, _Decline) {
            this.toastNotificationBelonging.ToastCoreConfig.ConfirmLabel = _Confirm;
            this.toastNotificationBelonging.ToastCoreConfig.DeclineLabel = _Decline;
        }
        setConfig(_ToastNotificationBelonging) {
            // region *** local UserConfig (defined on place where dialog is called) ***
            const dataControl = new GlobalClass.DataControl();
            dataControl.copyValuesFrom(_ToastNotificationBelonging, this.toastNotificationBelonging.ToastCoreConfig);
            // endregion
        }
        openToastNotification$() {
            if (!this.toastNotificationBelonging.Dispatch.Title &&
                !this.toastNotificationBelonging.Dispatch.Message) {
                throw Error("Toast notification can not be without both message and title.");
            }
            const service = ServiceLocator.injector.get(ToastNotificationService);
            return service.openToast$(this.toastNotificationBelonging);
        }
    }
    ToastNotificationClass.ToastNotificationCarrier = ToastNotificationCarrier;
    class GlobalToastSettings {
        constructor() {
            this.AllowedNotificationsAtOnce = null;
        }
    }
    ToastNotificationClass.GlobalToastSettings = GlobalToastSettings;
    class ResetToastGlobalSettings {
        constructor(globalToastConfig) {
            const globalToastConfigService = ServiceLocator.injector.get(ToastNotificationConfigService);
            if (globalToastConfigService) {
                globalToastConfigService.setResetGlobalToastConfig(globalToastConfig);
            }
            else {
                globalToastConfigService.setResetGlobalToastConfig();
            }
        }
    }
    ToastNotificationClass.ResetToastGlobalSettings = ResetToastGlobalSettings;
    class Settings {
        constructor() {
            this.Buttons = [];
            this.ToastCoreConfig = new ToastCoreConfig();
            this.Dispatch = new GlobalClass.Dispatch();
            this.GlobalSettings = new GlobalToastSettings();
        }
    }
    ToastNotificationClass.Settings = Settings;
    class ToastCoreConfig {
        constructor() {
            this.ToastPosition = null;
            this.ProgressBar = null;
            this.ToastUserViewType = null;
            this.OpenInElementID = null;
            this.ButtonPosition = null;
            this.TextPosition = null;
            this.LayoutType = null;
            this.Dispatch = null;
            this.ConfirmLabel = null;
            this.DeclineLabel = null;
            this.AutoCloseDelay = null;
            this.DisableIcon = null;
            this.AllowHTMLMessage = null;
        }
    }
    ToastNotificationClass.ToastCoreConfig = ToastCoreConfig;
    class ToastNotificationBelonging extends ToastNotificationClass.Settings {
        constructor() {
            super();
            this.EntityUniqueID = "T" + Math.random().toString(36).substr(2, 9);
            this.EventsController = new ToastNotificationEventsController(this.EntityUniqueID);
            const toastNotificationConfigurator = ServiceLocator.injector.get(ToastNotificationConfigService);
            const baseSettings = new ToastNotificationClass.Settings();
            const dataControl = new GlobalClass.DataControl();
            dataControl.copyValuesFrom(toastNotificationConfigurator.productionConfig.ToastCoreConfig, baseSettings.ToastCoreConfig);
            this.ToastCoreConfig = baseSettings.ToastCoreConfig;
            this.Buttons = toastNotificationConfigurator.productionConfig.Buttons.slice();
        }
    }
    ToastNotificationClass.ToastNotificationBelonging = ToastNotificationBelonging;
})(ToastNotificationClass || (ToastNotificationClass = {}));
export var ToastProgressBarEnum;
(function (ToastProgressBarEnum) {
    ToastProgressBarEnum[ToastProgressBarEnum["NONE"] = 0] = "NONE";
    ToastProgressBarEnum[ToastProgressBarEnum["INCREASE"] = 1] = "INCREASE";
    ToastProgressBarEnum[ToastProgressBarEnum["DECREASE"] = 2] = "DECREASE";
})(ToastProgressBarEnum || (ToastProgressBarEnum = {}));
export var ToastPositionEnum;
(function (ToastPositionEnum) {
    ToastPositionEnum["TOP_LEFT"] = "top-left";
    ToastPositionEnum["TOP_CENTER"] = "top-center";
    ToastPositionEnum["TOP_RIGHT"] = "top-right";
    ToastPositionEnum["TOP_FULL_WIDTH"] = "top-fullwidth";
    ToastPositionEnum["BOTTOM_LEFT"] = "bottom-left";
    ToastPositionEnum["BOTTOM_CENTER"] = "bottom-center";
    ToastPositionEnum["BOTTOM_RIGHT"] = "bottom-right";
    ToastPositionEnum["BOTTOM_FULL_WIDTH"] = "bottom-fullwidth";
})(ToastPositionEnum || (ToastPositionEnum = {}));
export var ToastUserViewTypeEnum;
(function (ToastUserViewTypeEnum) {
    ToastUserViewTypeEnum["SIMPLE"] = "simple";
    ToastUserViewTypeEnum["STANDARD"] = "standard";
})(ToastUserViewTypeEnum || (ToastUserViewTypeEnum = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9uZ3gtYXdlc29tZS1wb3B1cC90eXBlcy90b2FzdC1ub3RpZmljYXRpb24vY29yZS9tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFPLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEQsT0FBTyxFQUFFLFdBQVcsRUFBbUIsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFtRXhFLE1BQU0sS0FBVyxzQkFBc0IsQ0FtUHRDO0FBblBELFdBQWlCLHNCQUFzQjtJQUNyQyx3QkFBd0I7SUFDeEIsTUFBYSw0QkFBNEI7UUFHdkM7WUFGUSw2QkFBd0IsR0FBb0QsSUFBSSxzQkFBc0IsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBRTNILENBQUM7UUFFaEIsc0JBQXNCO1lBQ3BCLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLHNCQUFzQixFQUFFLENBQUMsSUFBSSxDQUNoRSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDWCxNQUFNLDhCQUE4QixHQUFHLElBQUkseUJBQXlCLEVBQUUsQ0FBQztnQkFDdkUsTUFBTSxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ2xELFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLDhCQUE4QixDQUFDLENBQUM7Z0JBQ2pFLE9BQU8sOEJBQThCLENBQUM7WUFDeEMsQ0FBQyxDQUFDLEVBQ0YsSUFBSSxDQUFDLENBQUMsQ0FBQyxD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Q3hCLDZCQUE2QixDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFDOUQsWUFBWSxDQUFDLGVBQWUsQ0FDN0IsQ0FBQztZQUNGLElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQztZQUNwRCxJQUFJLENBQUMsT0FBTyxHQUFHLDZCQUE2QixDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoRixDQUFDO0tBQ0Y7SUF2QlksaURBQTBCLDZCQXVCdEMsQ0FBQTtBQUNILENBQUMsRUFuUGdCLHNCQUFzQixLQUF0QixzQkFBc0IsUUFtUHRDO0FBRUQsTUFBTSxDQUFOLElBQVksb0JBSVg7QUFKRCxXQUFZLG9CQUFvQjtJQUM5QiwrREFBUSxDQUFBO0lBQ1IsdUVBQVksQ0FBQTtJQUNaLHVFQUFZLENBQUE7QUFDZCxDQUFDLEVBSlcsb0JBQW9CLEtBQXBCLG9CQUFvQixRQUkvQjtBQUVELE1BQU0sQ0FBTixJQUFZLGlCQVNYO0FBVEQsV0FBWSxpQkFBaUI7SUFDM0IsMENBQXFCLENBQUE7SUFDckIsOENBQXlCLENBQUE7SUFDekIsNENBQXVCLENBQUE7SUFDdkIscURBQWdDLENBQUE7SUFDaEMsZ0RBQTJCLENBQUE7SUFDM0Isb0RBQStCLENBQUE7SUFDL0Isa0RBQTZCLENBQUE7SUFDN0IsMkRBQXNDLENBQUE7QUFDeEMsQ0FBQyxFQVRXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFTNUI7QUFFRCxNQUFNLENBQU4sSUFBWSxxQkFHWDtBQUhELFdBQVkscUJBQXFCO0lBQy9CLDBDQUFpQixDQUFBO0lBQ2pCLDhDQUFxQixDQUFBO0FBQ3ZCLENBQUMsRUFIVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBR2hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBtYXAsIHRha2UsIHRhcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgRGlhbG9nTGF5b3V0RGlzcGxheSwgVmVydGljYWxQb3NpdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL2VudW1zXCI7XG5pbXBvcnQgeyBHbG9iYWxDbGFzcywgR2xvYmFsSW50ZXJmYWNlIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvZ2xvYmFsXCI7XG5pbXBvcnQgeyBTZXJ2aWNlTG9jYXRvciB9IGZyb20gXCIuLi8uLi8uLi9sb2NhdG9yLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRvYXN0Tm90aWZpY2F0aW9uQ29uZmlnU2VydmljZSB9IGZyb20gXCIuL3RvYXN0LW5vdGlmaWNhdGlvbi1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHsgVG9hc3ROb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vdG9hc3Qtbm90aWZpY2F0aW9uLnNlcnZpY2VcIjtcblxuZXhwb3J0IG5hbWVzcGFjZSBUb2FzdE5vdGlmaWNhdGlvbkludGVyZmFjZSB7XG4gIGV4cG9ydCBpbnRlcmZhY2UgSVRvYXN0Tm90aWZpY2F0aW9uVXNlckNvbmZpZyB7XG4gICAgQnV0dG9ucz86IEdsb2JhbEludGVyZmFjZS5JQnV0dG9uW107XG4gICAgVG9hc3RDb3JlQ29uZmlnPzogVG9hc3ROb3RpZmljYXRpb25JbnRlcmZhY2UuSVRvYXN0Q29yZUNvbmZpZztcbiAgICBEaXNwYXRjaD86IEdsb2JhbEludGVyZmFjZS5JRGlzcGF0Y2g7XG4gICAgR2xvYmFsU2V0dGluZ3M/OiBUb2FzdE5vdGlmaWNhdGlvbkludGVyZmFjZS5JR2xvYmFsVG9hc3RTZXR0aW5ncztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgSUdsb2JhbFRvYXN0U2V0dGluZ3Mge1xuICAgIC8qKiBOdW1iZXIgb2YgcG9wdXBzIGFsbG93ZWQgb24gc2NyZWVuLCByZWNvbW1lbmQgMy01ICovXG4gICAgQWxsb3dlZE5vdGlmaWNhdGlvbnNBdE9uY2U6IG51bWJlcjtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgSVRvYXN0Q29yZUNvbmZpZyB7XG4gICAgVG9hc3RQb3NpdGlvbj86IFRvYXN0UG9zaXRpb25FbnVtO1xuICAgIFByb2dyZXNzQmFyPzogVG9hc3RQcm9ncmVzc0JhckVudW07XG4gICAgVG9hc3RVc2VyVmlld1R5cGU/OiBUb2FzdFVzZXJWaWV3VHlwZUVudW07XG4gICAgT3BlbkluRWxlbWVudElEPzogc3RyaW5nO1xuICAgIEJ1dHRvblBvc2l0aW9uPzogVmVydGljYWxQb3NpdGlvbjtcbiAgICBUZXh0UG9zaXRpb24/OiBWZXJ0aWNhbFBvc2l0aW9uO1xuICAgIExheW91dFR5cGU/OiBEaWFsb2dMYXlvdXREaXNwbGF5O1xuICAgIERpc3BhdGNoPzogR2xvYmFsSW50ZXJmYWNlLklEaXNwYXRjaDtcbiAgICAvKiogRGVmYXVsdCBjb25maXJtIGJ1dHRvbiBMYWJlbCAqL1xuICAgIENvbmZpcm1MYWJlbD86IHN0cmluZztcbiAgICAvKiogRGVmYXVsdCBkZWNsaW5lIGJ1dHRvbiBMYWJlbCAqL1xuICAgIERlY2xpbmVMYWJlbD86IHN0cmluZztcbiAgICAvKiogRXhwcmVzc2VkIGluIG1pbGxpc2Vjb25kcyAqL1xuICAgIEF1dG9DbG9zZURlbGF5PzogbnVtYmVyO1xuICAgIERpc2FibGVJY29uPzogYm9vbGVhbjtcbiAgICBBbGxvd0hUTUxNZXNzYWdlPzogYm9vbGVhbjtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgSVRvYXN0Tm90aWZpY2F0aW9uQmVsb25naW5nIHtcbiAgICBCdXR0b25zOiBHbG9iYWxJbnRlcmZhY2UuSUJ1dHRvbltdO1xuICAgIFRvYXN0Q29yZUNvbmZpZzogVG9hc3ROb3RpZmljYXRpb25JbnRlcmZhY2UuSVRvYXN0Q29yZUNvbmZpZztcbiAgICBFbnRpdHlVbmlxdWVJRDogc3RyaW5nO1xuICAgIEV2ZW50c0NvbnRyb2xsZXI6IFRvYXN0Tm90aWZpY2F0aW9uQ2xhc3MuVG9hc3ROb3RpZmljYXRpb25FdmVudHNDb250cm9sbGVyO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBJVG9hc3ROb3RpZmljYXRpb25SZXNwb25zZSB7XG4gICAgc2V0U3VjY2VzcyhfSXNTdWNjZXNzOiBib29sZWFuKTogdm9pZDtcblxuICAgIHNldENsaWNrZWRCdXR0b25JRChfQ2xpY2tlZEJ1dHRvbklEKTogdm9pZDtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgSVRvYXN0Tm90aWZpY2F0aW9uUHVibGljUmVzcG9uc2Uge1xuICAgIFN1Y2Nlc3M6IGJvb2xlYW47XG4gICAgQ2xpY2tlZEJ1dHRvbklEOiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIElQcml2YXRlUmVzcG9uc2VNZXJnZWRcbiAgICBleHRlbmRzIElUb2FzdE5vdGlmaWNhdGlvblJlc3BvbnNlLFxuICAgICAgR2xvYmFsSW50ZXJmYWNlLklQcml2YXRlUmVzcG9uc2Uge1xuICAgIHRvYXN0Tm90aWZpY2F0aW9uQmVsb25naW5nOiBUb2FzdE5vdGlmaWNhdGlvbkludGVyZmFjZS5JVG9hc3ROb3RpZmljYXRpb25CZWxvbmdpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIElUb2FzdE5vdGlmaWNhdGlvblJhd1N0YXRlIHtcbiAgICBXZWFrTWFwOiBXZWFrTWFwPFxuICAgICAgYW55LFxuICAgICAgVG9hc3ROb3RpZmljYXRpb25DbGFzcy5Ub2FzdE5vdGlmaWNhdGlvbkV2ZW50c0NvbnRyb2xsZXJcbiAgICA+O1xuICAgIFRvYXN0QmVsb25naW5nOiBUb2FzdE5vdGlmaWNhdGlvbkNsYXNzLlRvYXN0Tm90aWZpY2F0aW9uQmVsb25naW5nO1xuICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgVG9hc3ROb3RpZmljYXRpb25DbGFzcyB7XG4gIC8vIHJlZ2lvbiAqKiogUHVibGljICoqKlxuICBleHBvcnQgY2xhc3MgVG9hc3ROb3RpZmljYXRpb25Jbml0aWFsaXplciB7XG4gICAgcHJpdmF0ZSB0b2FzdE5vdGlmaWNhdGlvbkNhcnJpZXI6IFRvYXN0Tm90aWZpY2F0aW9uQ2xhc3MuVG9hc3ROb3RpZmljYXRpb25DYXJyaWVyID0gbmV3IFRvYXN0Tm90aWZpY2F0aW9uQ2xhc3MuVG9hc3ROb3RpZmljYXRpb25DYXJyaWVyKCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBvcGVuVG9hc3ROb3RpZmljYXRpb24kKCk6IE9ic2VydmFibGU8VG9hc3ROb3RpZmljYXRpb25JbnRlcmZhY2UuSVRvYXN0Tm90aWZpY2F0aW9uUHVibGljUmVzcG9uc2U+IHtcbiAgICAgIHJldHVybiB0aGlzLnRvYXN0Tm90aWZpY2F0aW9uQ2Fycmllci5vcGVuVG9hc3ROb3RpZmljYXRpb24kKCkucGlwZShcbiAgICAgICAgbWFwKChyZXNwKSA9PiB7XG4gICAgICAgICAgY29uc3QgYmFzaWNUb2FzdE5vdGlmaWNhdGlvblJlc3BvbnNlID0gbmV3IFRvYXN0Tm90aWZpY2F0aW9uUmVzcG9uc2UoKTtcbiAgICAgICAgICBjb25zdCBkYXRhQ29udHJvbCA9IG5ldyBHbG9iYWxDbGFzcy5EYXRhQ29udHJvbCgpO1xuICAgICAgICAgIGRhdGFDb250cm9sLmNvcHlWYWx1ZXNGcm9tKHJlc3AsIGJhc2ljVG9hc3ROb3RpZmljYXRpb25SZXNwb25zZSk7XG4gICAgICAgICAgcmV0dXJuIGJhc2ljVG9hc3ROb3RpZmljYXRpb25SZXNwb25zZTtcbiAgICAgICAgfSksXG4gICAgICAgIHRha2UoMSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgc2V0QnV0dG9ucyhfQnV0dG9uczogR2xvYmFsSW50ZXJmYWNlLklCdXR0b25bXSk6IHZvaWQge1xuICAgICAgdGhpcy50b2FzdE5vdGlmaWNhdGlvbkNhcnJpZXIuc2V0QnV0dG9ucyhfQnV0dG9ucyk7XG4gICAgfVxuXG4gICAgc2V0Q29uZmlnKFxuICAgICAgX1RvYXN0Tm90aWZpY2F0aW9uQ29uZmlnOiBUb2FzdE5vdGlmaWNhdGlvbkludGVyZmFjZS5JVG9hc3RDb3JlQ29uZmlnXG4gICAgKSB7XG4gICAgICB0aGlzLnRvYXN0Tm90aWZpY2F0aW9uQ2Fycmllci5zZXRDb25maWcoX1RvYXN0Tm90aWZpY2F0aW9uQ29uZmlnKTtcbiAgICB9XG5cbiAgICBzZXREaXNwYXRjaChfVGl0bGU6IHN0cmluZywgX01lc3NhZ2U6IHN0cmluZyA9IG51bGwpOiB2b2lkIHtcbiAgICAgIHRoaXMudG9hc3ROb3RpZmljYXRpb25DYXJyaWVyLnNldFRpdGxlKF9UaXRsZSk7XG4gICAgICB0aGlzLnRvYXN0Tm90aWZpY2F0aW9uQ2Fycmllci5zZXRNZXNzYWdlKF9NZXNzYWdlKTtcbiAgICB9XG5cbiAgICBzZXRUaXRsZShfVGl0bGU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy50b2FzdE5vdGlmaWNhdGlvbkNhcnJpZXIuc2V0VGl0bGUoX1RpdGxlKTtcbiAgICB9XG5cbiAgICBzZXRNZXNzYWdlKF9NZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMudG9hc3ROb3RpZmljYXRpb25DYXJyaWVyLnNldE1lc3NhZ2UoX01lc3NhZ2UpO1xuICAgIH1cblxuICAgIHNldEJ1dHRvbkxhYmVscyhfQ29uZmlybTogc3RyaW5nLCBfRGVjbGluZT86IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy50b2FzdE5vdGlmaWNhdGlvbkNhcnJpZXIuc2V0QnV0dG9uTGFiZWxzKF9Db25maXJtLCBfRGVjbGluZSk7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIFRvYXN0Tm90aWZpY2F0aW9uUmVzcG9uc2VcbiAgICBleHRlbmRzIEdsb2JhbENsYXNzLkRhdGFDb250cm9sXG4gICAgaW1wbGVtZW50c1xuICAgICAgVG9hc3ROb3RpZmljYXRpb25JbnRlcmZhY2UuSVRvYXN0Tm90aWZpY2F0aW9uUmVzcG9uc2UsXG4gICAgICBUb2FzdE5vdGlmaWNhdGlvbkludGVyZmFjZS5JVG9hc3ROb3RpZmljYXRpb25QdWJsaWNSZXNwb25zZSB7XG4gICAgLy8gcHJpdmF0ZSBSZXNwb25zZTogRGlhbG9nUHJlcGFyZVJlc3BvbnNlICAgICAgICAgICAgPSBuZXcgRGlhbG9nUHJlcGFyZVJlc3BvbnNlKCk7XG5cbiAgICBTdWNjZXNzOiBib29sZWFuID0gbnVsbDtcbiAgICBDbGlja2VkQnV0dG9uSUQ6IHN0cmluZyA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgc2V0U3VjY2VzcyhfSXNTdWNjZXNzOiBib29sZWFuKTogdm9pZCB7XG4gICAgICB0aGlzLlN1Y2Nlc3MgPSBfSXNTdWNjZXNzO1xuICAgIH1cblxuICAgIHNldENsaWNrZWRCdXR0b25JRChfQ2xpY2tlZEJ1dHRvbklEKTogdm9pZCB7XG4gICAgICB0aGlzLkNsaWNrZWRCdXR0b25JRCA9IF9DbGlja2VkQnV0dG9uSUQ7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIFRvYXN0Tm90aWZpY2F0aW9uRXZlbnRzQ29udHJvbGxlciB7XG4gICAgZGVmYXVsdFJlc3BvbnNlOiBUb2FzdE5vdGlmaWNhdGlvbkludGVyZmFjZS5JUHJpdmF0ZVJlc3BvbnNlTWVyZ2VkO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBfYWZ0ZXJDbG9zZWQ6IFN1YmplY3Q8VG9hc3ROb3RpZmljYXRpb25JbnRlcmZhY2UuSVByaXZhdGVSZXNwb25zZU1lcmdlZD4gPSBuZXcgU3ViamVjdDxUb2FzdE5vdGlmaWNhdGlvbkludGVyZmFjZS5JUHJpdmF0ZVJlc3BvbnNlTWVyZ2VkPigpO1xuICAgIGFmdGVyQ2xvc2VkJDogT2JzZXJ2YWJsZTxUb2FzdE5vdGlmaWNhdGlvbkludGVyZmFjZS5JUHJpdmF0ZVJlc3BvbnNlTWVyZ2VkPiA9IHRoaXMuX2FmdGVyQ2xvc2VkLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX29uQnV0dG9uQ2xpY2s6IFN1YmplY3Q8R2xvYmFsSW50ZXJmYWNlLklCdXR0b24+ID0gbmV3IFN1YmplY3Q8R2xvYmFsSW50ZXJmYWNlLklCdXR0b24+KCk7XG4gICAgb25CdXR0b25DbGljayQ6IE9ic2VydmFibGU8R2xvYmFsSW50ZXJmYWNlLklCdXR0b24+ID0gdGhpcy5fb25CdXR0b25DbGljay5hc09ic2VydmFibGUoKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9idXR0b25MaXN0OiBTdWJqZWN0PFxuICAgICAgR2xvYmFsSW50ZXJmYWNlLklCdXR0b25bXVxuICAgID4gPSBuZXcgU3ViamVjdDxHbG9iYWxJbnRlcmZhY2UuSUJ1dHRvbltdPigpO1xuICAgIGJ1dHRvbkxpc3QkOiBPYnNlcnZhYmxlPFxuICAgICAgR2xvYmFsSW50ZXJmYWNlLklCdXR0b25bXVxuICAgID4gPSB0aGlzLl9idXR0b25MaXN0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBFbnRpdHlVbmlxdWVJRDogc3RyaW5nKSB7fVxuXG4gICAgY2xvc2UoX1Jlc3BvbnNlPzogVG9hc3ROb3RpZmljYXRpb25JbnRlcmZhY2UuSVByaXZhdGVSZXNwb25zZU1lcmdlZCk6IHZvaWQge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBfUmVzcG9uc2UgPyBfUmVzcG9uc2UgOiB0aGlzLmRlZmF1bHRSZXNwb25zZTtcbiAgICAgIHRoaXMuX2FmdGVyQ2xvc2VkLm5leHQocmVzcG9uc2UpO1xuICAgIH1cblxuICAgIG9uQnV0dG9uQ2xpY2soX0J1dHRvbjogR2xvYmFsSW50ZXJmYWNlLklCdXR0b24pOiB2b2lkIHtcbiAgICAgIHRoaXMuZGVmYXVsdFJlc3BvbnNlLnNldENsaWNrZWRCdXR0b25JRChfQnV0dG9uLklEKTtcbiAgICAgIHRoaXMuX29uQnV0dG9uQ2xpY2submV4dChfQnV0dG9uKTtcbiAgICB9XG5cbiAgICBzZXRCdXR0b25MaXN0KF9CdXR0b25MaXN0OiBHbG9iYWxJbnRlcmZhY2UuSUJ1dHRvbltdKTogdm9pZCB7XG4gICAgICB0aGlzLl9idXR0b25MaXN0Lm5leHQoX0J1dHRvbkxpc3QpO1xuICAgIH1cblxuICAgIHNldERlZmF1bHRSZXNwb25zZShcbiAgICAgIF9SZXNwb25zZTogVG9hc3ROb3RpZmljYXRpb25JbnRlcmZhY2UuSVByaXZhdGVSZXNwb25zZU1lcmdlZFxuICAgICk6IHZvaWQge1xuICAgICAgdGhpcy5kZWZhdWx0UmVzcG9uc2UgPSBfUmVzcG9uc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG5cbiAgZXhwb3J0IGNsYXNzIFRvYXN0Tm90aWZpY2F0aW9uRGVmYXVsdFJlc3BvbnNlXG4gICAgZXh0ZW5kcyBUb2FzdE5vdGlmaWNhdGlvblJlc3BvbnNlXG4gICAgaW1wbGVtZW50cyBUb2FzdE5vdGlmaWNhdGlvbkludGVyZmFjZS5JUHJpdmF0ZVJlc3BvbnNlTWVyZ2VkIHtcbiAgICB0b2FzdE5vdGlmaWNhdGlvbkJlbG9uZ2luZzogVG9hc3ROb3RpZmljYXRpb25CZWxvbmdpbmcgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHNldEJlbG9uZ2luZyhfVG9hc3ROb3RpZmljYXRpb25CZWxvbmdpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMudG9hc3ROb3RpZmljYXRpb25CZWxvbmdpbmcgPSBfVG9hc3ROb3RpZmljYXRpb25CZWxvbmdpbmc7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIFRvYXN0Tm90aWZpY2F0aW9uQ2FycmllciB7XG4gICAgdG9hc3ROb3RpZmljYXRpb25CZWxvbmdpbmc6IFRvYXN0Tm90aWZpY2F0aW9uQ2xhc3MuVG9hc3ROb3RpZmljYXRpb25CZWxvbmdpbmcgPSBuZXcgVG9hc3ROb3RpZmljYXRpb25DbGFzcy5Ub2FzdE5vdGlmaWNhdGlvbkJlbG9uZ2luZygpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgc2V0QnV0dG9ucyhfQnV0dG9uczogR2xvYmFsSW50ZXJmYWNlLklCdXR0b25bXSkge1xuICAgICAgaWYgKF9CdXR0b25zLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnRvYXN0Tm90aWZpY2F0aW9uQmVsb25naW5nLkJ1dHRvbnMgPSBfQnV0dG9ucztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRUaXRsZShfVGl0bGU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy50b2FzdE5vdGlmaWNhdGlvbkJlbG9uZ2luZy5EaXNwYXRjaC5UaXRsZSA9IF9UaXRsZTtcbiAgICB9XG5cbiAgICBzZXRNZXNzYWdlKF9NZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMudG9hc3ROb3RpZmljYXRpb25CZWxvbmdpbmcuRGlzcGF0Y2guTWVzc2FnZSA9IF9NZXNzYWdlO1xuICAgIH1cblxuICAgIHNldEJ1dHRvbkxhYmVscyhfQ29uZmlybTogc3RyaW5nLCBfRGVjbGluZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLnRvYXN0Tm90aWZpY2F0aW9uQmVsb25naW5nLlRvYXN0Q29yZUNvbmZpZy5Db25maXJtTGFiZWwgPSBfQ29uZmlybTtcbiAgICAgIHRoaXMudG9hc3ROb3RpZmljYXRpb25CZWxvbmdpbmcuVG9hc3RDb3JlQ29uZmlnLkRlY2xpbmVMYWJlbCA9IF9EZWNsaW5lO1xuICAgIH1cblxuICAgIHNldENvbmZpZyhcbiAgICAgIF9Ub2FzdE5vdGlmaWNhdGlvbkJlbG9uZ2luZzogVG9hc3ROb3RpZmljYXRpb25JbnRlcmZhY2UuSVRvYXN0Q29yZUNvbmZpZ1xuICAgICkge1xuICAgICAgLy8gcmVnaW9uICoqKiBsb2NhbCBVc2VyQ29uZmlnIChkZWZpbmVkIG9uIHBsYWNlIHdoZXJlIGRpYWxvZyBpcyBjYWxsZWQpICoqKlxuICAgICAgY29uc3QgZGF0YUNvbnRyb2wgPSBuZXcgR2xvYmFsQ2xhc3MuRGF0YUNvbnRyb2woKTtcbiAgICAgIGRhdGFDb250cm9sLmNvcHlWYWx1ZXNGcm9tKFxuICAgICAgICBfVG9hc3ROb3RpZmljYXRpb25CZWxvbmdpbmcsXG4gICAgICAgIHRoaXMudG9hc3ROb3RpZmljYXRpb25CZWxvbmdpbmcuVG9hc3RDb3JlQ29uZmlnXG4gICAgICApO1xuICAgICAgLy8gZW5kcmVnaW9uXG4gICAgfVxuXG4gICAgb3BlblRvYXN0Tm90aWZpY2F0aW9uJCgpOiBPYnNlcnZhYmxlPFRvYXN0Tm90aWZpY2F0aW9uSW50ZXJmYWNlLklQcml2YXRlUmVzcG9uc2VNZXJnZWQ+IHtcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMudG9hc3ROb3RpZmljYXRpb25CZWxvbmdpbmcuRGlzcGF0Y2guVGl0bGUgJiZcbiAgICAgICAgIXRoaXMudG9hc3ROb3RpZmljYXRpb25CZWxvbmdpbmcuRGlzcGF0Y2guTWVzc2FnZVxuICAgICAgKSB7XG4gICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgIFwiVG9hc3Qgbm90aWZpY2F0aW9uIGNhbiBub3QgYmUgd2l0aG91dCBib3RoIG1lc3NhZ2UgYW5kIHRpdGxlLlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zdCBzZXJ2aWNlOiBUb2FzdE5vdGlmaWNhdGlvblNlcnZpY2UgPSBTZXJ2aWNlTG9jYXRvci5pbmplY3Rvci5nZXQoXG4gICAgICAgIFRvYXN0Tm90aWZpY2F0aW9uU2VydmljZVxuICAgICAgKTtcbiAgICAgIHJldHVybiBzZXJ2aWNlLm9wZW5Ub2FzdCQodGhpcy50b2FzdE5vdGlmaWNhdGlvbkJlbG9uZ2luZyk7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIEdsb2JhbFRvYXN0U2V0dGluZ3NcbiAgICBpbXBsZW1lbnRzIFRvYXN0Tm90aWZpY2F0aW9uSW50ZXJmYWNlLklHbG9iYWxUb2FzdFNldHRpbmdzIHtcbiAgICBBbGxvd2VkTm90aWZpY2F0aW9uc0F0T25jZTogbnVtYmVyID0gbnVsbDtcbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBSZXNldFRvYXN0R2xvYmFsU2V0dGluZ3Mge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgZ2xvYmFsVG9hc3RDb25maWc/OiBUb2FzdE5vdGlmaWNhdGlvbkludGVyZmFjZS5JR2xvYmFsVG9hc3RTZXR0aW5nc1xuICAgICkge1xuICAgICAgY29uc3QgZ2xvYmFsVG9hc3RDb25maWdTZXJ2aWNlOiBUb2FzdE5vdGlmaWNhdGlvbkNvbmZpZ1NlcnZpY2UgPSBTZXJ2aWNlTG9jYXRvci5pbmplY3Rvci5nZXQoXG4gICAgICAgIFRvYXN0Tm90aWZpY2F0aW9uQ29uZmlnU2VydmljZVxuICAgICAgKTtcbiAgICAgIGlmIChnbG9iYWxUb2FzdENvbmZpZ1NlcnZpY2UpIHtcbiAgICAgICAgZ2xvYmFsVG9hc3RDb25maWdTZXJ2aWNlLnNldFJlc2V0R2xvYmFsVG9hc3RDb25maWcoZ2xvYmFsVG9hc3RDb25maWcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2xvYmFsVG9hc3RDb25maWdTZXJ2aWNlLnNldFJlc2V0R2xvYmFsVG9hc3RDb25maWcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgU2V0dGluZ3Mge1xuICAgIEJ1dHRvbnM6IEdsb2JhbEludGVyZmFjZS5JQnV0dG9uW10gPSBbXTtcbiAgICBUb2FzdENvcmVDb25maWc6IFRvYXN0Tm90aWZpY2F0aW9uSW50ZXJmYWNlLklUb2FzdENvcmVDb25maWcgPSBuZXcgVG9hc3RDb3JlQ29uZmlnKCk7XG4gICAgRGlzcGF0Y2g6IEdsb2JhbEludGVyZmFjZS5JRGlzcGF0Y2ggPSBuZXcgR2xvYmFsQ2xhc3MuRGlzcGF0Y2goKTtcbiAgICBHbG9iYWxTZXR0aW5nczogR2xvYmFsVG9hc3RTZXR0aW5ncyA9IG5ldyBHbG9iYWxUb2FzdFNldHRpbmdzKCk7XG4gIH1cblxuICBleHBvcnQgY2xhc3MgVG9hc3RDb3JlQ29uZmlnXG4gICAgaW1wbGVtZW50cyBUb2FzdE5vdGlmaWNhdGlvbkludGVyZmFjZS5JVG9hc3RDb3JlQ29uZmlnIHtcbiAgICBUb2FzdFBvc2l0aW9uOiBUb2FzdFBvc2l0aW9uRW51bSA9IG51bGw7XG4gICAgUHJvZ3Jlc3NCYXI6IFRvYXN0UHJvZ3Jlc3NCYXJFbnVtID0gbnVsbDtcbiAgICBUb2FzdFVzZXJWaWV3VHlwZTogVG9hc3RVc2VyVmlld1R5cGVFbnVtID0gbnVsbDtcbiAgICBPcGVuSW5FbGVtZW50SUQ6IHN0cmluZyA9IG51bGw7XG4gICAgQnV0dG9uUG9zaXRpb246IFZlcnRpY2FsUG9zaXRpb24gPSBudWxsO1xuICAgIFRleHRQb3NpdGlvbjogVmVydGljYWxQb3NpdGlvbiA9IG51bGw7XG4gICAgTGF5b3V0VHlwZTogRGlhbG9nTGF5b3V0RGlzcGxheSA9IG51bGw7XG4gICAgRGlzcGF0Y2g6IEdsb2JhbEludGVyZmFjZS5JRGlzcGF0Y2ggPSBudWxsO1xuICAgIENvbmZpcm1MYWJlbDogc3RyaW5nID0gbnVsbDtcbiAgICBEZWNsaW5lTGFiZWw6IHN0cmluZyA9IG51bGw7XG4gICAgQXV0b0Nsb3NlRGVsYXk6IG51bWJlciA9IG51bGw7XG4gICAgRGlzYWJsZUljb246IGJvb2xlYW4gPSBudWxsO1xuICAgIEFsbG93SFRNTE1lc3NhZ2U6IGJvb2xlYW4gPSBudWxsO1xuICB9XG5cbiAgZXhwb3J0IGNsYXNzIFRvYXN0Tm90aWZpY2F0aW9uQmVsb25naW5nXG4gICAgZXh0ZW5kcyBUb2FzdE5vdGlmaWNhdGlvbkNsYXNzLlNldHRpbmdzXG4gICAgaW1wbGVtZW50cyBUb2FzdE5vdGlmaWNhdGlvbkludGVyZmFjZS5JVG9hc3ROb3RpZmljYXRpb25CZWxvbmdpbmcge1xuICAgIEVudGl0eVVuaXF1ZUlEOiBzdHJpbmcgPSBcIlRcIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KTtcbiAgICBFdmVudHNDb250cm9sbGVyOiBUb2FzdE5vdGlmaWNhdGlvbkV2ZW50c0NvbnRyb2xsZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLkV2ZW50c0NvbnRyb2xsZXIgPSBuZXcgVG9hc3ROb3RpZmljYXRpb25FdmVudHNDb250cm9sbGVyKFxuICAgICAgICB0aGlzLkVudGl0eVVuaXF1ZUlEXG4gICAgICApO1xuICAgICAgY29uc3QgdG9hc3ROb3RpZmljYXRpb25Db25maWd1cmF0b3I6IFRvYXN0Tm90aWZpY2F0aW9uQ29uZmlnU2VydmljZSA9IFNlcnZpY2VMb2NhdG9yLmluamVjdG9yLmdldChcbiAgICAgICAgVG9hc3ROb3RpZmljYXRpb25Db25maWdTZXJ2aWNlXG4gICAgICApO1xuICAgICAgY29uc3QgYmFzZVNldHRpbmdzID0gbmV3IFRvYXN0Tm90aWZpY2F0aW9uQ2xhc3MuU2V0dGluZ3MoKTtcbiAgICAgIGNvbnN0IGRhdGFDb250cm9sID0gbmV3IEdsb2JhbENsYXNzLkRhdGFDb250cm9sKCk7XG4gICAgICBkYXRhQ29udHJvbC5jb3B5VmFsdWVzRnJvbShcbiAgICAgICAgdG9hc3ROb3RpZmljYXRpb25Db25maWd1cmF0b3IucHJvZHVjdGlvbkNvbmZpZy5Ub2FzdENvcmVDb25maWcsXG4gICAgICAgIGJhc2VTZXR0aW5ncy5Ub2FzdENvcmVDb25maWdcbiAgICAgICk7XG4gICAgICB0aGlzLlRvYXN0Q29yZUNvbmZpZyA9IGJhc2VTZXR0aW5ncy5Ub2FzdENvcmVDb25maWc7XG4gICAgICB0aGlzLkJ1dHRvbnMgPSB0b2FzdE5vdGlmaWNhdGlvbkNvbmZpZ3VyYXRvci5wcm9kdWN0aW9uQ29uZmlnLkJ1dHRvbnMuc2xpY2UoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGVudW0gVG9hc3RQcm9ncmVzc0JhckVudW0ge1xuICBOT05FID0gMCxcbiAgSU5DUkVBU0UgPSAxLFxuICBERUNSRUFTRSA9IDIsXG59XG5cbmV4cG9ydCBlbnVtIFRvYXN0UG9zaXRpb25FbnVtIHtcbiAgVE9QX0xFRlQgPSBcInRvcC1sZWZ0XCIsXG4gIFRPUF9DRU5URVIgPSBcInRvcC1jZW50ZXJcIixcbiAgVE9QX1JJR0hUID0gXCJ0b3AtcmlnaHRcIixcbiAgVE9QX0ZVTExfV0lEVEggPSBcInRvcC1mdWxsd2lkdGhcIixcbiAgQk9UVE9NX0xFRlQgPSBcImJvdHRvbS1sZWZ0XCIsXG4gIEJPVFRPTV9DRU5URVIgPSBcImJvdHRvbS1jZW50ZXJcIixcbiAgQk9UVE9NX1JJR0hUID0gXCJib3R0b20tcmlnaHRcIixcbiAgQk9UVE9NX0ZVTExfV0lEVEggPSBcImJvdHRvbS1mdWxsd2lkdGhcIixcbn1cblxuZXhwb3J0IGVudW0gVG9hc3RVc2VyVmlld1R5cGVFbnVtIHtcbiAgU0lNUExFID0gXCJzaW1wbGVcIixcbiAgU1RBTkRBUkQgPSBcInN0YW5kYXJkXCIsXG59XG4iXX0=