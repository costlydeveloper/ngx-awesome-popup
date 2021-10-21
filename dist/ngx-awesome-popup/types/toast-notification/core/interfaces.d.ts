import { DialogLayoutDisplay, VerticalPosition } from '../../../core/enums';
import { IButton, IDispatch, IPrivateResponse } from '../../../core/global-interfaces';
import { ToastNotificationBelonging, ToastNotificationEventsController } from './classes';
import { ToastPositionEnum, ToastProgressBarEnum, ToastUserViewTypeEnum } from './enums';
export interface IToastNotificationUserConfig {
    Buttons?: IButton[];
    ToastCoreConfig?: IToastCoreConfig;
    Dispatch?: IDispatch;
    GlobalSettings?: IGlobalToastSettings;
}
export interface IGlobalToastSettings {
    /** Number of popups allowed on screen, recommend 3-5 */
    AllowedNotificationsAtOnce: number;
}
export interface IToastCoreConfig {
    ToastPosition?: ToastPositionEnum;
    ProgressBar?: ToastProgressBarEnum;
    ToastUserViewType?: ToastUserViewTypeEnum;
    OpenInElementID?: string;
    ButtonPosition?: VerticalPosition;
    TextPosition?: VerticalPosition;
    LayoutType?: DialogLayoutDisplay;
    Dispatch?: IDispatch;
    /** Default confirm button Label */
    ConfirmLabel?: string;
    /** Default decline button Label */
    DeclineLabel?: string;
    /** Expressed in milliseconds */
    AutoCloseDelay?: number;
    DisableIcon?: boolean;
    AllowHTMLMessage?: boolean;
}
export interface IToastNotificationBelonging {
    Buttons: IButton[];
    ToastCoreConfig: IToastCoreConfig;
    EntityUniqueID: string;
    EventsController: ToastNotificationEventsController;
}
export interface IToastNotificationResponse {
    setSuccess(_IsSuccess: boolean): void;
    setClickedButtonID(_ClickedButtonID: any): void;
}
export interface IToastNotificationPublicResponse {
    Success: boolean;
    ClickedButtonID: string;
}
export interface IPrivateResponseMerged extends IToastNotificationResponse, IPrivateResponse {
    toastNotificationBelonging: IToastNotificationBelonging;
}
export interface IToastNotificationRawState {
    WeakMap: WeakMap<any, ToastNotificationEventsController>;
    ToastBelonging: ToastNotificationBelonging;
}
