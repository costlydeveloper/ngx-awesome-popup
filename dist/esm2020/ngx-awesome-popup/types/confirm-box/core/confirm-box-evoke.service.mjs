var _ConfirmBoxEvokeService_instances, _ConfirmBoxEvokeService_extender;
import { __classPrivateFieldGet } from "tslib";
import { Injectable } from '@angular/core';
import { DialogLayoutDisplay } from '../../../core/enums';
import { ConfirmBoxInitializer } from './classes';
import * as i0 from "@angular/core";
export class ConfirmBoxEvokeService {
    constructor() {
        _ConfirmBoxEvokeService_instances.add(this);
    }
    success(title, message, confirmLabel, declineLabel) {
        const confirmBox = __classPrivateFieldGet(this, _ConfirmBoxEvokeService_instances, "m", _ConfirmBoxEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
        confirmBox.setConfig({
            layoutType: DialogLayoutDisplay.SUCCESS
        });
        return confirmBox.openConfirmBox$();
    }
    info(title, message, confirmLabel, declineLabel) {
        const confirmBox = __classPrivateFieldGet(this, _ConfirmBoxEvokeService_instances, "m", _ConfirmBoxEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
        confirmBox.setConfig({
            layoutType: DialogLayoutDisplay.INFO
        });
        return confirmBox.openConfirmBox$();
    }
    warning(title, message, confirmLabel, declineLabel) {
        const confirmBox = __classPrivateFieldGet(this, _ConfirmBoxEvokeService_instances, "m", _ConfirmBoxEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
        confirmBox.setConfig({
            layoutType: DialogLayoutDisplay.WARNING
        });
        return confirmBox.openConfirmBox$();
    }
    danger(title, message, confirmLabel, declineLabel) {
        const confirmBox = __classPrivateFieldGet(this, _ConfirmBoxEvokeService_instances, "m", _ConfirmBoxEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
        confirmBox.setConfig({
            layoutType: DialogLayoutDisplay.DANGER
        });
        return confirmBox.openConfirmBox$();
    }
    customOne(title, message, confirmLabel, declineLabel) {
        const confirmBox = __classPrivateFieldGet(this, _ConfirmBoxEvokeService_instances, "m", _ConfirmBoxEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
        confirmBox.setConfig({
            layoutType: DialogLayoutDisplay.CUSTOM_ONE
        });
        return confirmBox.openConfirmBox$();
    }
    customTwo(title, message, confirmLabel, declineLabel) {
        const confirmBox = __classPrivateFieldGet(this, _ConfirmBoxEvokeService_instances, "m", _ConfirmBoxEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
        confirmBox.setConfig({
            layoutType: DialogLayoutDisplay.CUSTOM_TWO
        });
        return confirmBox.openConfirmBox$();
    }
    customThree(title, message, confirmLabel, declineLabel) {
        const confirmBox = __classPrivateFieldGet(this, _ConfirmBoxEvokeService_instances, "m", _ConfirmBoxEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
        confirmBox.setConfig({
            layoutType: DialogLayoutDisplay.CUSTOM_THREE
        });
        return confirmBox.openConfirmBox$();
    }
    customFour(title, message, confirmLabel, declineLabel) {
        const confirmBox = __classPrivateFieldGet(this, _ConfirmBoxEvokeService_instances, "m", _ConfirmBoxEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
        confirmBox.setConfig({
            layoutType: DialogLayoutDisplay.CUSTOM_FOUR
        });
        return confirmBox.openConfirmBox$();
    }
    customFive(title, message, confirmLabel, declineLabel) {
        const confirmBox = __classPrivateFieldGet(this, _ConfirmBoxEvokeService_instances, "m", _ConfirmBoxEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
        confirmBox.setConfig({
            layoutType: DialogLayoutDisplay.CUSTOM_FIVE
        });
        return confirmBox.openConfirmBox$();
    }
}
_ConfirmBoxEvokeService_instances = new WeakSet(), _ConfirmBoxEvokeService_extender = function _ConfirmBoxEvokeService_extender(title, message, confirmLabel, declineLabel) {
    const confirmBox = new ConfirmBoxInitializer();
    confirmBox.setTitle(title);
    confirmBox.setMessage(message);
    confirmBox.setButtonLabels(confirmLabel, declineLabel);
    return confirmBox;
};
ConfirmBoxEvokeService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.2", ngImport: i0, type: ConfirmBoxEvokeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ConfirmBoxEvokeService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.2", ngImport: i0, type: ConfirmBoxEvokeService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.2", ngImport: i0, type: ConfirmBoxEvokeService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1ib3gtZXZva2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL25neC1hd2Vzb21lLXBvcHVwL3R5cGVzL2NvbmZpcm0tYm94L2NvcmUvY29uZmlybS1ib3gtZXZva2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sV0FBVyxDQUFDOztBQU1sRCxNQUFNLE9BQU8sc0JBQXNCO0lBSG5DOztLQW1GQztJQS9FQyxPQUFPLENBQUMsS0FBYSxFQUFFLE9BQWUsRUFBRSxZQUFvQixFQUFFLFlBQXFCO1FBQ2pGLE1BQU0sVUFBVSxHQUFHLHVCQUFBLElBQUksMkVBQVUsTUFBZCxJQUFJLEVBQVcsS0FBSyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDOUUsVUFBVSxDQUFDLFNBQVMsQ0FBQztZQUNuQixVQUFVLEVBQUUsbUJBQW1CLENBQUMsT0FBTztTQUN4QyxDQUFDLENBQUM7UUFDSCxPQUFPLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQWEsRUFBRSxPQUFlLEVBQUUsWUFBb0IsRUFBRSxZQUFxQjtRQUM5RSxNQUFNLFVBQVUsR0FBRyx1QkFBQSxJQUFJLDJFQUFVLE1BQWQsSUFBSSxFQUFXLEtBQUssRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzlFLFVBQVUsQ0FBQyxTQUFTLENBQUM7WUFDbkIsVUFBVSxFQUFFLG1CQUFtQixDQUFDLElBQUk7U0FDckMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDdEMsQ0FB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QUFDO1lBQ25CLFVBQVUsRUFBRSxtQkFBbUIsQ0FBQyxXQUFXO1NBQzVDLENBQUMsQ0FBQztRQUNILE9BQU8sVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3RDLENBQUM7O2dJQUVTLEtBQWEsRUFBRSxPQUFlLEVBQUUsWUFBb0IsRUFBRSxZQUFxQjtJQUNuRixNQUFNLFVBQVUsR0FBRyxJQUFJLHFCQUFxQixFQUFFLENBQUM7SUFDL0MsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLFVBQVUsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3ZELE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUM7bUhBL0VVLHNCQUFzQjt1SEFBdEIsc0JBQXNCLGNBRnJCLE1BQU07MkZBRVAsc0JBQXNCO2tCQUhsQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERpYWxvZ0xheW91dERpc3BsYXkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2VudW1zJztcbmltcG9ydCB7IENvbmZpcm1Cb3hJbml0aWFsaXplciB9IGZyb20gJy4vY2xhc3Nlcyc7XG5pbXBvcnQgeyBJQ29uZmlybUJveFB1YmxpY1Jlc3BvbnNlIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybUJveEV2b2tlU2VydmljZSB7XG4gIHN1Y2Nlc3ModGl0bGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBjb25maXJtTGFiZWw6IHN0cmluZywgZGVjbGluZUxhYmVsPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxJQ29uZmlybUJveFB1YmxpY1Jlc3BvbnNlPiB7XG4gICAgY29uc3QgY29uZmlybUJveCA9IHRoaXMuI2V4dGVuZGVyKHRpdGxlLCBtZXNzYWdlLCBjb25maXJtTGFiZWwsIGRlY2xpbmVMYWJlbCk7XG4gICAgY29uZmlybUJveC5zZXRDb25maWcoe1xuICAgICAgbGF5b3V0VHlwZTogRGlhbG9nTGF5b3V0RGlzcGxheS5TVUNDRVNTXG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbmZpcm1Cb3gub3BlbkNvbmZpcm1Cb3gkKCk7XG4gIH1cblxuICBpbmZvKHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgY29uZmlybUxhYmVsOiBzdHJpbmcsIGRlY2xpbmVMYWJlbD86IHN0cmluZyk6IE9ic2VydmFibGU8SUNvbmZpcm1Cb3hQdWJsaWNSZXNwb25zZT4ge1xuICAgIGNvbnN0IGNvbmZpcm1Cb3ggPSB0aGlzLiNleHRlbmRlcih0aXRsZSwgbWVzc2FnZSwgY29uZmlybUxhYmVsLCBkZWNsaW5lTGFiZWwpO1xuICAgIGNvbmZpcm1Cb3guc2V0Q29uZmlnKHtcbiAgICAgIGxheW91dFR5cGU6IERpYWxvZ0xheW91dERpc3BsYXkuSU5GT1xuICAgIH0pO1xuICAgIHJldHVybiBjb25maXJtQm94Lm9wZW5Db25maXJtQm94JCgpO1xuICB9XG5cbiAgd2FybmluZyh0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIGNvbmZpcm1MYWJlbDogc3RyaW5nLCBkZWNsaW5lTGFiZWw/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPElDb25maXJtQm94UHVibGljUmVzcG9uc2U+IHtcbiAgICBjb25zdCBjb25maXJtQm94ID0gdGhpcy4jZXh0ZW5kZXIodGl0bGUsIG1lc3NhZ2UsIGNvbmZpcm1MYWJlbCwgZGVjbGluZUxhYmVsKTtcbiAgICBjb25maXJtQm94LnNldENvbmZpZyh7XG4gICAgICBsYXlvdXRUeXBlOiBEaWFsb2dMYXlvdXREaXNwbGF5LldBUk5JTkdcbiAgICB9KTtcbiAgICByZXR1cm4gY29uZmlybUJveC5vcGVuQ29uZmlybUJveCQoKTtcbiAgfVxuXG4gIGRhbmdlcih0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIGNvbmZpcm1MYWJlbDogc3RyaW5nLCBkZWNsaW5lTGFiZWw/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPElDb25maXJtQm94UHVibGljUmVzcG9uc2U+IHtcbiAgICBjb25zdCBjb25maXJtQm94ID0gdGhpcy4jZXh0ZW5kZXIodGl0bGUsIG1lc3NhZ2UsIGNvbmZpcm1MYWJlbCwgZGVjbGluZUxhYmVsKTtcbiAgICBjb25maXJtQm94LnNldENvbmZpZyh7XG4gICAgICBsYXlvdXRUeXBlOiBEaWFsb2dMYXlvdXREaXNwbGF5LkRBTkdFUlxuICAgIH0pO1xuICAgIHJldHVybiBjb25maXJtQm94Lm9wZW5Db25maXJtQm94JCgpO1xuICB9XG5cbiAgY3VzdG9tT25lKHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgY29uZmlybUxhYmVsOiBzdHJpbmcsIGRlY2xpbmVMYWJlbD86IHN0cmluZyk6IE9ic2VydmFibGU8SUNvbmZpcm1Cb3hQdWJsaWNSZXNwb25zZT4ge1xuICAgIGNvbnN0IGNvbmZpcm1Cb3ggPSB0aGlzLiNleHRlbmRlcih0aXRsZSwgbWVzc2FnZSwgY29uZmlybUxhYmVsLCBkZWNsaW5lTGFiZWwpO1xuICAgIGNvbmZpcm1Cb3guc2V0Q29uZmlnKHtcbiAgICAgIGxheW91dFR5cGU6IERpYWxvZ0xheW91dERpc3BsYXkuQ1VTVE9NX09ORVxuICAgIH0pO1xuICAgIHJldHVybiBjb25maXJtQm94Lm9wZW5Db25maXJtQm94JCgpO1xuICB9XG5cbiAgY3VzdG9tVHdvKHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgY29uZmlybUxhYmVsOiBzdHJpbmcsIGRlY2xpbmVMYWJlbD86IHN0cmluZyk6IE9ic2VydmFibGU8SUNvbmZpcm1Cb3hQdWJsaWNSZXNwb25zZT4ge1xuICAgIGNvbnN0IGNvbmZpcm1Cb3ggPSB0aGlzLiNleHRlbmRlcih0aXRsZSwgbWVzc2FnZSwgY29uZmlybUxhYmVsLCBkZWNsaW5lTGFiZWwpO1xuICAgIGNvbmZpcm1Cb3guc2V0Q29uZmlnKHtcbiAgICAgIGxheW91dFR5cGU6IERpYWxvZ0xheW91dERpc3BsYXkuQ1VTVE9NX1RXT1xuICAgIH0pO1xuICAgIHJldHVybiBjb25maXJtQm94Lm9wZW5Db25maXJtQm94JCgpO1xuICB9XG5cbiAgY3VzdG9tVGhyZWUodGl0bGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBjb25maXJtTGFiZWw6IHN0cmluZywgZGVjbGluZUxhYmVsPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxJQ29uZmlybUJveFB1YmxpY1Jlc3BvbnNlPiB7XG4gICAgY29uc3QgY29uZmlybUJveCA9IHRoaXMuI2V4dGVuZGVyKHRpdGxlLCBtZXNzYWdlLCBjb25maXJtTGFiZWwsIGRlY2xpbmVMYWJlbCk7XG4gICAgY29uZmlybUJveC5zZXRDb25maWcoe1xuICAgICAgbGF5b3V0VHlwZTogRGlhbG9nTGF5b3V0RGlzcGxheS5DVVNUT01fVEhSRUVcbiAgICB9KTtcbiAgICByZXR1cm4gY29uZmlybUJveC5vcGVuQ29uZmlybUJveCQoKTtcbiAgfVxuXG4gIGN1c3RvbUZvdXIodGl0bGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBjb25maXJtTGFiZWw6IHN0cmluZywgZGVjbGluZUxhYmVsPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxJQ29uZmlybUJveFB1YmxpY1Jlc3BvbnNlPiB7XG4gICAgY29uc3QgY29uZmlybUJveCA9IHRoaXMuI2V4dGVuZGVyKHRpdGxlLCBtZXNzYWdlLCBjb25maXJtTGFiZWwsIGRlY2xpbmVMYWJlbCk7XG4gICAgY29uZmlybUJveC5zZXRDb25maWcoe1xuICAgICAgbGF5b3V0VHlwZTogRGlhbG9nTGF5b3V0RGlzcGxheS5DVVNUT01fRk9VUlxuICAgIH0pO1xuICAgIHJldHVybiBjb25maXJtQm94Lm9wZW5Db25maXJtQm94JCgpO1xuICB9XG5cbiAgY3VzdG9tRml2ZSh0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIGNvbmZpcm1MYWJlbDogc3RyaW5nLCBkZWNsaW5lTGFiZWw/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPElDb25maXJtQm94UHVibGljUmVzcG9uc2U+IHtcbiAgICBjb25zdCBjb25maXJtQm94ID0gdGhpcy4jZXh0ZW5kZXIodGl0bGUsIG1lc3NhZ2UsIGNvbmZpcm1MYWJlbCwgZGVjbGluZUxhYmVsKTtcbiAgICBjb25maXJtQm94LnNldENvbmZpZyh7XG4gICAgICBsYXlvdXRUeXBlOiBEaWFsb2dMYXlvdXREaXNwbGF5LkNVU1RPTV9GSVZFXG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbmZpcm1Cb3gub3BlbkNvbmZpcm1Cb3gkKCk7XG4gIH1cblxuICAjZXh0ZW5kZXIodGl0bGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBjb25maXJtTGFiZWw6IHN0cmluZywgZGVjbGluZUxhYmVsPzogc3RyaW5nKTogQ29uZmlybUJveEluaXRpYWxpemVyIHtcbiAgICBjb25zdCBjb25maXJtQm94ID0gbmV3IENvbmZpcm1Cb3hJbml0aWFsaXplcigpO1xuICAgIGNvbmZpcm1Cb3guc2V0VGl0bGUodGl0bGUpO1xuICAgIGNvbmZpcm1Cb3guc2V0TWVzc2FnZShtZXNzYWdlKTtcbiAgICBjb25maXJtQm94LnNldEJ1dHRvbkxhYmVscyhjb25maXJtTGFiZWwsIGRlY2xpbmVMYWJlbCk7XG4gICAgcmV0dXJuIGNvbmZpcm1Cb3g7XG4gIH1cbn1cbiJdfQ==