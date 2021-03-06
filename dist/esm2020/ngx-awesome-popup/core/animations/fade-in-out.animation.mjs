import { animate, animateChild, query, state, style, transition, trigger } from '@angular/animations';
export function fadeInOut() {
    return trigger('fadeInOut', [
        state('open', style({
            opacity: 1
        })),
        state('close-fast', style({
            opacity: 0
        })),
        state('close-instant', style({
            opacity: 0
        })),
        transition('* => close-fast', [query('*', [animateChild()]), animate('{{closeDelay}}')]),
        transition('* => open', [animate(100)]),
        transition('* => close-instant', [animate(0)])
    ]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFkZS1pbi1vdXQuYW5pbWF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbmd4LWF3ZXNvbWUtcG9wdXAvY29yZS9hbmltYXRpb25zL2ZhZGUtaW4tb3V0LmFuaW1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUNQLFlBQVksRUFFWixLQUFLLEVBQ0wsS0FBSyxFQUNMLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNSLE1BQU0scUJBQXFCLENBQUM7QUFFN0IsTUFBTSxVQUFVLFNBQVM7SUFDdkIsT0FBTyxPQUFPLENBQUMsV0FBVyxFQUFFO1FBQzFCLEtBQUssQ0FDSCxNQUFNLEVBQ04sS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLENBQUM7U0FDWCxDQUFDLENBQ0g7UUFDRCxLQUFLLENBQ0gsWUFBWSxFQUNaLEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxDQUFDO1NBQ1gsQ0FBQyxDQUNIO1FBQ0QsS0FBSyxDQUNILGVBQWUsRUFDZixLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztTQUNYLENBQUMsQ0FDSDtRQUNELFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUN4RixVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLG9CQUFvQixFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDL0MsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFuaW1hdGUsXG4gIGFuaW1hdGVDaGlsZCxcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxuICBxdWVyeSxcbiAgc3RhdGUsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICB0cmlnZ2VyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZmFkZUluT3V0KCk6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSB7XG4gIHJldHVybiB0cmlnZ2VyKCdmYWRlSW5PdXQnLCBbXG4gICAgc3RhdGUoXG4gICAgICAnb3BlbicsXG4gICAgICBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0pXG4gICAgKSxcbiAgICBzdGF0ZShcbiAgICAgICdjbG9zZS1mYXN0JyxcbiAgICAgIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSlcbiAgICApLFxuICAgIHN0YXRlKFxuICAgICAgJ2Nsb3NlLWluc3RhbnQnLFxuICAgICAgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9KVxuICAgICksXG4gICAgdHJhbnNpdGlvbignKiA9PiBjbG9zZS1mYXN0JywgW3F1ZXJ5KCcqJywgW2FuaW1hdGVDaGlsZCgpXSksIGFuaW1hdGUoJ3t7Y2xvc2VEZWxheX19JyldKSxcbiAgICB0cmFuc2l0aW9uKCcqID0+IG9wZW4nLCBbYW5pbWF0ZSgxMDApXSksXG4gICAgdHJhbnNpdGlvbignKiA9PiBjbG9zZS1pbnN0YW50JywgW2FuaW1hdGUoMCldKVxuICBdKTtcbn1cbiJdfQ==