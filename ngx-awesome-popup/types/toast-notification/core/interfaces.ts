import { AppearanceAnimation, DialogLayoutDisplay, DisappearanceAnimation, VerticalPosition } from '../../../core/enums';
import { IButton, IDispatch, IPrivateResponse } from '../../../core/global-interfaces';
import { ToastNotificationBelonging, ToastNotificationeventsController } from './classes';
import { ToastPositionEnum, ToastProgressBarEnum, ToastUserViewTypeEnum } from './enums';

export interface IToastNotificationUserConfig {
  buttons?: IButton[];
  toastCoreConfig?: IToastCoreConfig;
  dispatch?: IDispatch;
  globalSettings?: IGlobalToastSettings;
}

export interface IGlobalToastSettings {
  /** Number of popups allowed on screen (recommend 3-5) */
  allowedNotificationsAtOnce: number;
}

export interface IToastCustomStyles {
  titleCSS?: string;
  textCSS?: string;
  buttonSectionCSS?: string;
  buttonCSS?: string;
}

export interface IToastCoreConfig {
  toastPosition?: ToastPositionEnum;
  progressBar?: ToastProgressBarEnum;
  toastUserViewType?: ToastUserViewTypeEnum;
  openInElementID?: string;
  buttonPosition?: VerticalPosition;
  textPosition?: VerticalPosition;
  layoutType?: DialogLayoutDisplay;
  dispatch?: IDispatch;
  /** Default confirm button Label */
  confirmLabel?: string;
  /** Default decline button Label */
  declineLabel?: string;
  /** Expressed in milliseconds */
  autoCloseDelay?: number;
  disableIcon?: boolean;
  allowHtmlMessage?: boolean;
  animationIn?: AppearanceAnimation;
  animationOut?: DisappearanceAnimation;
  customStyles?: IToastCustomStyles;
  iconStyleClass?: string;
}

export interface IToastNotificationBelonging {
  buttons: IButton[];
  toastCoreConfig: IToastCoreConfig;
  entityUniqueID: string;
  eventsController: ToastNotificationeventsController;
}

export interface IToastNotificationResponse {
  setSuccess(_IsSuccess: boolean): void;

  setClickedButtonID(_ClickedButtonID): void;
}

export interface IToastNotificationPublicResponse {
  success: boolean;
  clickedButtonID: string;
}

export interface IPrivateResponseMerged extends IToastNotificationResponse, IPrivateResponse {
  toastNotificationBelonging: IToastNotificationBelonging;
}

export interface IToastNotificationRawState {
  weakMap: WeakMap<any, ToastNotificationeventsController>;
  toastBelonging: ToastNotificationBelonging;
}
