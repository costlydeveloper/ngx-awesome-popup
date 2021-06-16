(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{xaJI:function(o,n,t){"use strict";t.r(n),t.d(n,"AdvancedExamplesModule",function(){return d});var e=t("ofXK"),i=t("3Pt+"),a=t("R9Cn"),l=t("tyNb"),c=t("TEsR"),s=t("FIf5"),r=t("fXoL"),u=t("VKAB");const b=[{path:"global-config",component:(()=>{class o{constructor(o){this.webTitleService=o,this.ngxAwesomePopupModuleBasic="// app.module imports:\nNgxAwesomePopupModule.forRoot()",this.ngxAwesomePopupModule="// app.module imports:\nNgxAwesomePopupModule.forRoot({\n    ColorList: {\n           Primary  : '#ff9e00', // optional\n           Secondary: '#989ea5', // optional\n           Info     : '#2f8ee5', // optional\n           Success  : '#3caea3', // optional\n           Warning  : '#ffc107', // optional\n           Danger   : '#e46464', // optional\n           Light    : '#fbfbfb', // optional\n           Dark     : '#343a40'  // optional\n          }\n})",this.toastNotificationConfigModuleBasic="// app.module imports:\nToastNotificationConfigModule.forRoot()",this.toastNotificationConfigModule="// app.module imports:\nToastNotificationConfigModule.forRoot({\n   ToastCoreConfig: {\n      ToastPosition: ToastPositionEnum.TOP_FULL_WIDTH, // check API documentation ToastPositionEnum\n      ProgressBar: ToastProgressBarEnum.INCREASE, // check API documentation ToastProgressBarEnum\n      ToastUserViewType: ToastUserViewTypeEnum.SIMPLE, // check API documentation ToastUserViewTypeEnum\n      LayoutType: DialogLayoutDisplay.WARNING, // check API documentation DialogLayoutDisplay\n      ButtonPosition: 'right', // check API documentation VerticalPosition\n      TextPosition: 'right', // check API documentation VerticalPosition\n      ConfirmLabel: 'Confirm', // default confirmation button label\n      DeclineLabel: 'Decline', // default declination button label\n      AutoCloseDelay: 3000, // Milliseconds it will be ignored if buttons are included.\n      DisableIcon: true, // Disable icon by default\n      AllowHTMLMessage: true, // Allow HTML content in message by default\n      // Optional default dispatch object.\n      Dispatch: {\n        Title: 'Global default title.',\n        Message: 'Global default message.'\n      },\n      // OpenInElementID: 'custom-toast-wrapper-id', // it can be any element as wrapper anywhere in the DOM\n   },\n   GlobalSettings: {\n      AllowedNotificationsAtOnce: 4  // The number of toast notifications that can be shown at once.\n   },\n   // custom buttons overrides the buttons set with ConfirmLabel & DeclineLabel\n   Buttons: [\n     new ButtonMaker('Ok', 'ok', ButtonLayoutDisplay.PRIMARY), // check API documentation ButtonLayoutDisplay\n     new ButtonMaker('Cancel', 'cancel', ButtonLayoutDisplay.SECONDARY)\n  ]\n})",this.confirmBoxConfigModuleBasic="// app.module imports:\nConfirmBoxConfigModule.forRoot()",this.confirmBoxConfigModule="// app.module imports:\nConfirmBoxConfigModule.forRoot({\n   ConfirmBoxCoreConfig: {\n      Width: '50%', // string value with '%' or 'px' as the suffix\n      Height: '50%', // string value with '%' or 'px' as the suffix\n      ButtonPosition: 'right', // check API documentation VerticalPosition\n      LayoutType: DialogLayoutDisplay.WARNING, // check API documentation DialogLayoutDisplay\n      Dispatch: {\n        Title: 'Global default title.',\n        Message: 'Global default message.'\n      },\n      ConfirmLabel: 'Confirm', // default confirmation button label\n      DeclineLabel: 'Decline', // default declination button label\n      DisableIcon: true, // Disable icon by default\n      AllowHTMLMessage: true, // Allow HTML content in message by default\n   }\n   // custom buttons overrides the buttons set with ConfirmLabel & DeclineLabel\n   Buttons: [\n     new ButtonMaker('Ok', 'ok', ButtonLayoutDisplay.PRIMARY), // check API documentation ButtonLayoutDisplay\n     new ButtonMaker('Cancel', 'cancel', ButtonLayoutDisplay.SECONDARY)\n  ]\n})",this.dialogConfigModuleBasic="// app.module imports:\nDialogConfigModule.forRoot()",this.dialogConfigModule="// app.module imports:\nDialogConfigModule.forRoot({\n   DialogCoreConfig: {\n      LayoutType: DialogLayoutDisplay.WARNING, // check API documentation DialogLayoutDisplay\n      ButtonPosition: 'right', // check API documentation VerticalPosition\n      DisplayLoader: true, // display the integrated loader by default\n      // LoaderComponent: TheRealAngularComponent, // it will appear as loader before content shows\n   },\n   Buttons: [\n     new ButtonMaker('Ok', 'ok', ButtonLayoutDisplay.PRIMARY), // check API documentation ButtonLayoutDisplay\n     new ButtonMaker('Cancel', 'cancel', ButtonLayoutDisplay.SECONDARY)\n  ]\n})",o.setTitle("Global config")}ngAfterViewInit(){s.highlightAll()}}return o.\u0275fac=function(n){return new(n||o)(r.Ob(u.a))},o.\u0275cmp=r.Ib({type:o,selectors:[["app-global-config"]],decls:57,vars:8,consts:[[1,"container"],[1,"row","m-4"],[1,"px-4","pt-2","mt-2","text-start"],[1,"row","m-0","mb-5"],[1,"language-typescript",3,"innerHTML"],["routerLink","/documentation/Interface: IGlobalUserConfig"]],template:function(o,n){1&o&&(r.Tb(0,"div",0),r.Tb(1,"div",1),r.Tb(2,"div",2),r.Tb(3,"div",3),r.Tb(4,"h3"),r.zc(5,"NgxAwesomePopupModule"),r.Sb(),r.Tb(6,"p"),r.zc(7," Imported module globally can have own settings which will reflect on the entire application. "),r.Sb(),r.Tb(8,"h6"),r.zc(9,"Basic example:"),r.Sb(),r.Tb(10,"pre"),r.Pb(11,"code",4),r.Sb(),r.Tb(12,"h6"),r.zc(13,"Example with configuration:"),r.Sb(),r.Tb(14,"p"),r.zc(15,' The "'),r.Tb(16,"a",5),r.zc(17,"ColorList"),r.Sb(),r.zc(18,'" object gives the ability to harmonize the colors of the application with different awesome popup types. The shade of '),r.Tb(19,"strong"),r.zc(20,'"Primary"'),r.Sb(),r.zc(21," color is used for overlay and primary buttons, we suggest that you match this color with your application dominant color. "),r.Sb(),r.Tb(22,"pre"),r.Pb(23,"code",4),r.Sb(),r.Sb(),r.Tb(24,"div",3),r.Tb(25,"h3"),r.zc(26,"ToastNotificationConfigModule"),r.Sb(),r.Tb(27,"h6"),r.zc(28,"Basic example:"),r.Sb(),r.Tb(29,"pre"),r.Pb(30,"code",4),r.Sb(),r.Tb(31,"h6"),r.zc(32,"Example with configuration:"),r.Sb(),r.Tb(33,"pre"),r.Pb(34,"code",4),r.Sb(),r.Sb(),r.Tb(35,"div",3),r.Tb(36,"h3"),r.zc(37,"ConfirmBoxConfigModule"),r.Sb(),r.Tb(38,"h6"),r.zc(39,"Basic example:"),r.Sb(),r.Tb(40,"pre"),r.Pb(41,"code",4),r.Sb(),r.Tb(42,"h6"),r.zc(43,"Example with configuration:"),r.Sb(),r.Tb(44,"pre"),r.Pb(45,"code",4),r.Sb(),r.Sb(),r.Tb(46,"div",3),r.Tb(47,"h3"),r.zc(48,"DialogConfigModule"),r.Sb(),r.Tb(49,"h6"),r.zc(50,"Basic example:"),r.Sb(),r.Tb(51,"pre"),r.Pb(52,"code",4),r.Sb(),r.Tb(53,"h6"),r.zc(54,"Example with configuration:"),r.Sb(),r.Tb(55,"pre"),r.Pb(56,"code",4),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb()),2&o&&(r.Cb(11),r.ic("innerHTML",n.ngxAwesomePopupModuleBasic,r.sc),r.Cb(12),r.ic("innerHTML",n.ngxAwesomePopupModule,r.sc),r.Cb(7),r.ic("innerHTML",n.toastNotificationConfigModuleBasic,r.sc),r.Cb(4),r.ic("innerHTML",n.toastNotificationConfigModule,r.sc),r.Cb(7),r.ic("innerHTML",n.confirmBoxConfigModuleBasic,r.sc),r.Cb(4),r.ic("innerHTML",n.confirmBoxConfigModule,r.sc),r.Cb(7),r.ic("innerHTML",n.dialogConfigModuleBasic,r.sc),r.Cb(4),r.ic("innerHTML",n.dialogConfigModule,r.sc))},directives:[l.f],styles:[""]}),o})()},{path:"showcase",component:c.a}];let p=(()=>{class o{}return o.\u0275mod=r.Mb({type:o}),o.\u0275inj=r.Lb({factory:function(n){return new(n||o)},imports:[[l.g.forChild(b)],l.g]}),o})(),d=(()=>{class o{}return o.\u0275mod=r.Mb({type:o}),o.\u0275inj=r.Lb({factory:function(n){return new(n||o)},imports:[[e.b,p,i.d,a.b]]}),o})()}}]);