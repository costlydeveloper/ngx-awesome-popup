(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/operators'), require('@angular/core'), require('@angular/animations'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/platform-browser/animations')) :
    typeof define === 'function' && define.amd ? define('@costlydeveloper/ngx-awesome-popup', ['exports', 'rxjs', 'rxjs/operators', '@angular/core', '@angular/animations', '@angular/common', '@angular/platform-browser', '@angular/platform-browser/animations'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.costlydeveloper = global.costlydeveloper || {}, global.costlydeveloper["ngx-awesome-popup"] = {}), global.rxjs, global.rxjs.operators, global.ng.core, global.ng.animations, global.ng.common, global.ng.platformBrowser, global.ng.platformBrowser.animations));
})(this, (function (exports, rxjs, operators, i0, animations, common, platformBrowser, animations$1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    // @dynamic
    var ServiceLocator = /** @class */ (function () {
        function ServiceLocator() {
        }
        return ServiceLocator;
    }());

    exports.DialogLayoutDisplay = void 0;
    (function (DialogLayoutDisplay) {
        DialogLayoutDisplay[DialogLayoutDisplay["NONE"] = 0] = "NONE";
        DialogLayoutDisplay[DialogLayoutDisplay["SUCCESS"] = 1] = "SUCCESS";
        DialogLayoutDisplay[DialogLayoutDisplay["INFO"] = 2] = "INFO";
        DialogLayoutDisplay[DialogLayoutDisplay["WARNING"] = 3] = "WARNING";
        DialogLayoutDisplay[DialogLayoutDisplay["DANGER"] = 4] = "DANGER";
    })(exports.DialogLayoutDisplay || (exports.DialogLayoutDisplay = {}));
    exports.ButtonLayoutDisplay = void 0;
    (function (ButtonLayoutDisplay) {
        ButtonLayoutDisplay[ButtonLayoutDisplay["NONE"] = 0] = "NONE";
        ButtonLayoutDisplay[ButtonLayoutDisplay["SUCCESS"] = 1] = "SUCCESS";
        ButtonLayoutDisplay[ButtonLayoutDisplay["INFO"] = 2] = "INFO";
        ButtonLayoutDisplay[ButtonLayoutDisplay["WARNING"] = 3] = "WARNING";
        ButtonLayoutDisplay[ButtonLayoutDisplay["DANGER"] = 4] = "DANGER";
        ButtonLayoutDisplay[ButtonLayoutDisplay["DARK"] = 5] = "DARK";
        ButtonLayoutDisplay[ButtonLayoutDisplay["LIGHT"] = 6] = "LIGHT";
        ButtonLayoutDisplay[ButtonLayoutDisplay["PRIMARY"] = 7] = "PRIMARY";
        ButtonLayoutDisplay[ButtonLayoutDisplay["SECONDARY"] = 8] = "SECONDARY";
        ButtonLayoutDisplay[ButtonLayoutDisplay["LINK"] = 9] = "LINK";
    })(exports.ButtonLayoutDisplay || (exports.ButtonLayoutDisplay = {}));
    var ColorVariance;
    (function (ColorVariance) {
        ColorVariance[ColorVariance["SUCCESS"] = 1] = "SUCCESS";
        ColorVariance[ColorVariance["INFO"] = 2] = "INFO";
        ColorVariance[ColorVariance["WARNING"] = 3] = "WARNING";
        ColorVariance[ColorVariance["DANGER"] = 4] = "DANGER";
        ColorVariance[ColorVariance["DARK"] = 5] = "DARK";
        ColorVariance[ColorVariance["LIGHT"] = 6] = "LIGHT";
        ColorVariance[ColorVariance["PRIMARY"] = 7] = "PRIMARY";
        ColorVariance[ColorVariance["SECONDARY"] = 8] = "SECONDARY";
    })(ColorVariance || (ColorVariance = {}));
    exports.AppearanceAnimation = void 0;
    (function (AppearanceAnimation) {
        AppearanceAnimation[AppearanceAnimation["NONE"] = 0] = "NONE";
        AppearanceAnimation["BOUNCE_IN"] = "bounceIn";
        AppearanceAnimation["SWING"] = "swing";
        AppearanceAnimation["ZOOM_IN"] = "zoomIn";
        AppearanceAnimation["ZOOM_IN_ROTATE"] = "zoomInRotate";
        AppearanceAnimation["ELASTIC"] = "elastic";
        AppearanceAnimation["JELLO"] = "jello";
        AppearanceAnimation["FADE_IN"] = "fadeIn";
        AppearanceAnimation["SLIDE_IN_UP"] = "slideInUp";
        AppearanceAnimation["SLIDE_IN_DOWN"] = "slideInDown";
        AppearanceAnimation["SLIDE_IN_LEFT"] = "slideInLeft";
        AppearanceAnimation["SLIDE_IN_RIGHT"] = "slideInRight";
    })(exports.AppearanceAnimation || (exports.AppearanceAnimation = {}));
    exports.DisappearanceAnimation = void 0;
    (function (DisappearanceAnimation) {
        DisappearanceAnimation[DisappearanceAnimation["NONE"] = 0] = "NONE";
        DisappearanceAnimation["ZOOM_OUT_WIND"] = "zoomOutWind";
        DisappearanceAnimation["BOUNCE_OUT"] = "bounceOut";
        DisappearanceAnimation["FLIP_OUT"] = "flipOutY";
        DisappearanceAnimation["ZOOM_OUT"] = "zoomOut";
        DisappearanceAnimation["ZOOM_OUT_ROTATE"] = "zoomOutRotate";
        DisappearanceAnimation["SLIDE_OUT_UP"] = "slideOutUp";
        DisappearanceAnimation["SLIDE_OUT_DOWN"] = "slideOutDown";
        DisappearanceAnimation["SLIDE_OUT_LEFT"] = "slideOutLeft";
        DisappearanceAnimation["SLIDE_OUT_RIGHT"] = "slideOutRight";
    })(exports.DisappearanceAnimation || (exports.DisappearanceAnimation = {}));
    var MotionBlockAnimation;
    (function (MotionBlockAnimation) {
        MotionBlockAnimation[MotionBlockAnimation["NONE"] = 0] = "NONE";
        MotionBlockAnimation["WOBBLE"] = "wobble";
    })(MotionBlockAnimation || (MotionBlockAnimation = {}));

    var GlobalConfigService = /** @class */ (function () {
        function GlobalConfigService(userGlobalConfig) {
            this.userGlobalConfig = userGlobalConfig;
            this.authorGlobalConfig = new GlobalConfig();
            this.productionGlobalConfig = new GlobalConfig();
            this.userGeneratedConfig = new GlobalUserConfig(userGlobalConfig);
            // region *** author global config values (if there is no user input) ***
            this.authorGlobalConfig.DisplayColor.Primary = null; // new ColorProvider('#ff9e00');
            this.authorGlobalConfig.DisplayColor.Secondary = null; // new ColorProvider('#989ea5');
            this.authorGlobalConfig.DisplayColor.Success = null; // new ColorProvider('#3caea3');
            this.authorGlobalConfig.DisplayColor.Info = null; // new ColorProvider('#2f8ee5');
            this.authorGlobalConfig.DisplayColor.Warning = null; // new ColorProvider('#ffc107');
            this.authorGlobalConfig.DisplayColor.Danger = null; // new ColorProvider('#e46464');
            this.authorGlobalConfig.DisplayColor.Light = null; // new ColorProvider('#f8f9fa');
            this.authorGlobalConfig.DisplayColor.Dark = null; // new ColorProvider('#343a40');
            // endregion
            this.productionGlobalConfig.DisplayColor = this.authorGlobalConfig.DisplayColor;
            // region *** global userConfig (user input app-module) ***
            this.setUserColors(this.userGeneratedConfig.ColorList);
            // endregion
            this.setNodeStyles(this.productionGlobalConfig.DisplayColor);
        }
        GlobalConfigService.prototype.resetStyles = function () {
            this.setUserColors(this.userGeneratedConfig.ColorList);
            this.setNodeStyles(this.productionGlobalConfig.DisplayColor, true);
        };
        GlobalConfigService.prototype.setNodeStyles = function (_ProductionColorTypes, _Reset) {
            var _this = this;
            if (_Reset === void 0) { _Reset = false; }
            if (_Reset) {
                var evolveDialogStyleNode = document.getElementById('ngx-awesome-popup-glob-styles');
                if (evolveDialogStyleNode) {
                    evolveDialogStyleNode.remove();
                }
            }
            this.setToastStyles();
            Object.keys(_ProductionColorTypes).forEach(function (key) {
                if (_ProductionColorTypes[key]) {
                    _this.setButtonStyling(key, _ProductionColorTypes[key]);
                    _this.setIconStyling(key, _ProductionColorTypes[key]);
                    _this.setToastStyling(key, _ProductionColorTypes[key]);
                    _this.setDialogFrame(key, _ProductionColorTypes[key]);
                    if (ColorVariance[key.toUpperCase()] === ColorVariance.PRIMARY) {
                        _this.getSheet('ngx-awesome-popup-styles').addRule('.ngx-awesome-popup-overlay', "background:  " + _ProductionColorTypes[key].TransparentDarkenVariance + "!important;");
                    }
                }
            });
        };
        GlobalConfigService.prototype.setUserColors = function (_UserColorTypes) {
            var _this = this;
            if (typeof _UserColorTypes !== 'object') {
                return;
            }
            var userKeys = Object.keys(_UserColorTypes);
            var productionObjectKeys = Object.keys(this.productionGlobalConfig.DisplayColor);
            userKeys.forEach(function (key) {
                if (productionObjectKeys.find(function (tKey) { return tKey === key; })) {
                    if (_UserColorTypes[key]) {
                        var baseColorProvider = new ColorProvider(_UserColorTypes[key]);
                        if (baseColorProvider.Base) {
                            _this.productionGlobalConfig.DisplayColor[key] = baseColorProvider;
                        }
                    }
                    else {
                        _this.productionGlobalConfig.DisplayColor[key] = null;
                    }
                }
            });
        };
        GlobalConfigService.prototype.getSheet = function (_StyleID) {
            // Create the <style> tag
            var evolveDialogStyleNode = document.getElementById(_StyleID);
            if (!evolveDialogStyleNode) {
                var headNode = document.head || document.getElementsByTagName('head')[0];
                if (!headNode) {
                    return;
                }
                evolveDialogStyleNode = document.createElement('style');
                evolveDialogStyleNode.setAttribute('id', _StyleID);
                evolveDialogStyleNode.appendChild(document.createTextNode(''));
                headNode.appendChild(evolveDialogStyleNode);
            }
            return evolveDialogStyleNode ? evolveDialogStyleNode.sheet : null;
        };
        GlobalConfigService.prototype.setToastStyling = function (_Key, _ColorProvider) {
            var standardToast = ".toast-wrapper.standard-toast .evolve-toast." + _Key.toLowerCase() + "-dialog";
            var standardToastStyle = "\n        background:  " + _ColorProvider.BrightShade + "!important;\n        border-color: " + _ColorProvider.Brighten + "!important;\n        ";
            var simpleToast = ".toast-wrapper.simple-toast .evolve-toast." + _Key.toLowerCase() + "-dialog";
            var simpleToastStyle = "\n        background:  " + _ColorProvider.BrightWarmly + "!important;\n        color:  " + _ColorProvider.Darken + "!important;\n        ";
            var baseProgress = ".toast-wrapper .evolve-toast." + _Key.toLowerCase() + "-dialog .progress-bar";
            var baseProgressStyle = "\n        background-color:  " + _ColorProvider.Brighten + "!important;\n        ";
            this.getSheet('ngx-awesome-popup-glob-styles').addRule(baseProgress, baseProgressStyle);
            this.getSheet('ngx-awesome-popup-glob-styles').addRule(standardToast, standardToastStyle);
            this.getSheet('ngx-awesome-popup-glob-styles').addRule(simpleToast, simpleToastStyle);
        };
        GlobalConfigService.prototype.setButtonStyling = function (_Key, _ColorProvider) {
            var baseButtonClass = ".ed-btn-" + _Key.toLowerCase();
            var baseStyle = "\n        color: " + _ColorProvider.ContrastColor + "!important;\n        background:  " + _ColorProvider.Base + "!important;\n        border-color: " + _ColorProvider.BrightenForShade + "!important;\n        ";
            var hoverButtonClass = ".ed-btn-" + _Key.toLowerCase() + ":hover";
            var hoverStyle = "\n        background:  " + (_ColorProvider.IsBaseBright ? _ColorProvider.DarkenForShade : _ColorProvider.BrightenForShade) + "!important;\n        border-color: " + (_ColorProvider.IsBaseBright ? _ColorProvider.Darken : _ColorProvider.Brighten) + "!important;\n        ";
            var focusActiveButtonClass = ".ed-btn-" + _Key.toLowerCase() + ":focus, .ed-btn-" + _Key.toLowerCase() + ":active";
            var focusActiveStyle = "\n        box-shadow: 0 0 1px 2px " + (_ColorProvider.IsBaseBright ? _ColorProvider.Darken : _ColorProvider.Brighten) + "!important;\n        ";
            this.getSheet('ngx-awesome-popup-glob-styles').addRule(baseButtonClass, baseStyle);
            this.getSheet('ngx-awesome-popup-glob-styles').addRule(hoverButtonClass, hoverStyle);
            this.getSheet('ngx-awesome-popup-glob-styles').addRule(focusActiveButtonClass, focusActiveStyle);
        };
        GlobalConfigService.prototype.setIconStyling = function (_Key, _ColorProvider) {
            var baseIconClass = ".ap-icon-" + _Key.toLowerCase();
            var baseStyle = "color: " + _ColorProvider.BrightenForShade + "!important;";
            this.getSheet('ngx-awesome-popup-glob-styles').addRule(baseIconClass, baseStyle);
        };
        GlobalConfigService.prototype.setDialogFrame = function (_Key, _ColorProvider) {
            var baseDialogFrameClass = ".ngx-awesome-popup-overlay ." + _Key.toLowerCase() + "-dialog";
            var baseStyle = "\n        border-color: " + _ColorProvider.Brighten + "!important;\n        ";
            this.getSheet('ngx-awesome-popup-glob-styles').addRule(baseDialogFrameClass, baseStyle);
        };
        GlobalConfigService.prototype.setToastStyles = function () {
            this.getSheet('ngx-awesome-popup-styles').addRule(".toast-entity", "all 0.5s ease;");
            this.getSheet('ngx-awesome-popup-styles').addRule(".toast-entity:first-child", "animation: move 0.7s ease-out;");
            var isIEOrEdge = /msie\s|trident\//i.test(window.navigator.userAgent);
            if (!isIEOrEdge) {
                this.getSheet('ngx-awesome-popup-styles').addRule("@-webkit-keyframes move", "\n                                        0% {margin-top: -5px; opacity: 0.4;}\n                                        30% {margin-top: -4px; opacity: 0.7;}\n                                        100% {margin-top: 0px; opacity: 1;}\n                                        ");
                this.getSheet('ngx-awesome-popup-styles').addRule("@keyframes move", "\n                                        0% {margin-top: -5px; opacity: 0.4;}\n                                        30% {margin-top: -4px; opacity: 0.7;}\n                                        100% {margin-top: 0px; opacity: 1;}\n                                        ");
            }
        };
        return GlobalConfigService;
    }());
    GlobalConfigService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function GlobalConfigService_Factory() { return new GlobalConfigService(i0__namespace.ɵɵinject("cdGlobalConfig")); }, token: GlobalConfigService, providedIn: "root" });
    GlobalConfigService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    GlobalConfigService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: ['cdGlobalConfig',] }] }
    ]; };

    var Sizes = /** @class */ (function () {
        function Sizes() {
            this.Width = null;
            this.MinWidth = null;
            this.MaxWidth = null;
            this.Height = null;
            this.MinHeight = null;
            this.MaxHeight = null;
            this.FullScreen = null;
        }
        return Sizes;
    }());
    var Dispatch = /** @class */ (function () {
        function Dispatch() {
            this.Title = null;
            this.Message = null;
        }
        return Dispatch;
    }());
    var ButtonMaker = /** @class */ (function () {
        function ButtonMaker(Label, ID, LayoutType) {
            if (LayoutType === void 0) { LayoutType = exports.ButtonLayoutDisplay.PRIMARY; }
            this.Label = Label;
            this.ID = ID;
            this.LayoutType = LayoutType;
        }
        return ButtonMaker;
    }());
    var GlobalUserConfig = /** @class */ (function () {
        function GlobalUserConfig(_GlobalUserConfig) {
            this.ColorList = new ColorTypes();
            if (_GlobalUserConfig) {
                var dataControl = new DataControl();
                dataControl.copyValuesFrom(_GlobalUserConfig, this);
                var colorList = new ColorTypes();
                this.ColorList = dataControl.copyValuesFrom(this.ColorList, colorList);
            }
        }
        return GlobalUserConfig;
    }());
    var ColorTypes = /** @class */ (function () {
        function ColorTypes() {
            this.Primary = null;
            this.Secondary = null;
            this.Success = null;
            this.Info = null;
            this.Warning = null;
            this.Danger = null;
            this.Light = null;
            this.Dark = null;
        }
        return ColorTypes;
    }());
    var ResetGlobalConfig = /** @class */ (function () {
        function ResetGlobalConfig(globalConfig) {
            var globalConfigService = ServiceLocator.injector.get(GlobalConfigService);
            if (globalConfig) {
                globalConfigService.setUserColors(globalConfig.ColorList);
                globalConfigService.setNodeStyles(globalConfigService.productionGlobalConfig.DisplayColor, true);
            }
            else {
                globalConfigService.resetStyles();
            }
        }
        return ResetGlobalConfig;
    }());
    var GlobalConfig = /** @class */ (function () {
        function GlobalConfig() {
            this.DisplayColor = new DisplayColor();
        }
        return GlobalConfig;
    }());
    var DisplayColor = /** @class */ (function () {
        function DisplayColor() {
            this.Primary = null;
            this.Secondary = null;
            this.Success = null;
            this.Info = null;
            this.Warning = null;
            this.Danger = null;
            this.Light = null;
            this.Dark = null;
        }
        return DisplayColor;
    }());
    var ColorProvider = /** @class */ (function () {
        function ColorProvider(_Color) {
            this.Base = null;
            this.Brighten = null;
            this.BrightenForShade = null;
            this.Darken = null;
            this.DarkenForShade = null;
            this.ContrastColor = null;
            this.TransparentDarkenVariance = null;
            this.BrightShade = null;
            this.BrightWarmly = null;
            this.IsBaseBright = null;
            if ((this.Base = this.isColor(_Color))) {
                this.Brighten = this.brightness(this.Base, 'brighten', 25);
                this.BrightenForShade = this.brightness(this.Base, 'brighten', 10);
                this.Darken = this.brightness(this.Base, 'darken', 20);
                this.DarkenForShade = this.brightness(this.Base, 'darken', 10);
                var luminance = Math.floor(this.luminance(this.Base) * 100);
                var darken = luminance > 50 ? 5 : luminance > 40 ? 10 : luminance > 20 ? 15 : luminance;
                var brighten = luminance > 55 ? 65 : luminance > 45 ? 60 : luminance > 20 ? 55 : luminance > 10 ? 45 : 80;
                this.BrightShade = this.brightness(this.brightness(this.Base, 'darken', darken), 'brighten', brighten);
                this.BrightWarmly = this.brightness(this.brightness(this.saturate(this.Base), 'darken', darken - 10), 'brighten', brighten - 5);
                this.TransparentDarkenVariance = this.brightness(this.transparentize(this.Base, 80), 'darken', 40);
                if (this.isBright(this.Base)) {
                    this.ContrastColor = 'rgba(58,65,71,0.5)';
                    this.IsBaseBright = true;
                }
                else {
                    this.ContrastColor = 'rgb(255,255,255, 0.7)';
                    this.IsBaseBright = false;
                }
                /*	       console.log('%c BrightShade ', `background: ${this.BrightShade}; color: ${this.ContrastColor}`, this.BrightShade);
                                     console.log('%c BrightWarmly ', `background: ${this.BrightWarmly}; color: ${this.ContrastColor}`, this.BrightWarmly);
                                     console.log('%c Brighten ', `background: ${this.Brighten}; color: ${this.ContrastColor}`, this.Brighten);
                                     console.log('%c BrightenForShade ', `background: ${this.BrightenForShade}; color: ${this.ContrastColor}`, this.BrightenForShade);
                                     console.log('%c Base ', `background: ${this.Base}; color: ${this.ContrastColor}`, this.Base);
                                     console.log('%c DarkenForShade ', `background: ${this.DarkenForShade}; color: ${this.ContrastColor}`, this.DarkenForShade);
                                     console.log('%c Darken ', `background: ${this.Darken}; color: ${this.ContrastColor}`, this.Darken);
                                     console.log('%c TransparentDarkenVariance ', `background: ${this.TransparentDarkenVariance}; color: ${this.ContrastColor}`, this.TransparentDarkenVariance);
                      */
            }
        }
        ColorProvider.prototype.saturate = function (_Rgb) {
            var rgbIntArray = this.getRGBArray(_Rgb);
            var greyVal = this.getLightnessOfRGB(_Rgb) * 55;
            var _a = __read(this.getLowMidHi(rgbIntArray), 3), lowest = _a[0], middle = _a[1], highest = _a[2];
            if (lowest.val === highest.val) {
                return _Rgb;
            }
            var saturationRange = Math.round(Math.min(255 - greyVal, greyVal));
            var maxChange = Math.min(255 - highest.val, lowest.val);
            var changeAmount = Math.min(saturationRange / 10, maxChange);
            var middleValueRatio = (greyVal - middle.val) / (greyVal - highest.val) + 0.07;
            var returnArray = [];
            returnArray[highest.index] = Math.round(highest.val + changeAmount);
            returnArray[lowest.index] = Math.round(lowest.val - changeAmount);
            returnArray[middle.index] = Math.round(greyVal + (returnArray[highest.index] - greyVal) * middleValueRatio + 5);
            return "rgb(" + [returnArray].join() + ")";
        };
        ColorProvider.prototype.brightness = function (_Rgb, _Action, _Percentage) {
            var rgbIntArray = this.getRGBArray(_Rgb);
            var _a = __read(this.getLowMidHi(rgbIntArray), 3), lowest = _a[0], middle = _a[1], highest = _a[2];
            if (_Action === 'brighten' && lowest.val === 255) {
                return _Rgb;
            }
            if (_Action === 'darken' && highest.val === 0) {
                return _Rgb;
            }
            var amount = (_Percentage / 100) * 255;
            var returnList = [];
            if (_Action === 'brighten') {
                returnList[lowest.index] = Math.round(lowest.val + Math.min(255 - lowest.val, amount));
                var increaseFraction = (returnList[lowest.index] - lowest.val) / (255 - lowest.val);
                returnList[middle.index] = middle.val + (255 - middle.val) * increaseFraction;
                returnList[highest.index] = highest.val + (255 - highest.val) * increaseFraction;
            }
            if (_Action === 'darken') {
                returnList[highest.index] = highest.val - Math.min(highest.val, amount);
                var decreaseFraction = (highest.val - returnList[highest.index]) / highest.val;
                returnList[middle.index] = middle.val - middle.val * decreaseFraction;
                returnList[lowest.index] = lowest.val - lowest.val * decreaseFraction;
            }
            returnList = returnList.map(function (item) { return Math.round(item); });
            if (rgbIntArray.length > 3) {
                returnList.push(rgbIntArray[3]);
                return "rgba(" + returnList.join() + ")";
            }
            return "rgb(" + returnList.join() + ")";
        };
        ColorProvider.prototype.getLightnessOfRGB = function (_Rgb) {
            var rgbIntArray = this.getRGBArray(_Rgb);
            var highest = Math.max.apply(Math, __spreadArray([], __read(rgbIntArray)));
            var lowest = Math.min.apply(Math, __spreadArray([], __read(rgbIntArray)));
            return (highest + lowest) / 2 / 255;
        };
        ColorProvider.prototype.isBright = function (_Rgb) {
            return this.contrast(this.luminance(_Rgb));
        };
        //
        ColorProvider.prototype.getLowMidHi = function (_RgbArray) {
            var rgbArrayCopy = _RgbArray.slice();
            var rgbArrayWithoutAlpha = _RgbArray.length > 3 ? rgbArrayCopy.reverse().slice(1).reverse() : _RgbArray;
            var highest = { val: -1, index: -1 };
            var lowest = { val: Infinity, index: -1 };
            rgbArrayWithoutAlpha.map(function (val, index) {
                if (val > highest.val) {
                    highest = { val: val, index: index };
                }
                if (val < lowest.val) {
                    lowest = { val: val, index: index };
                }
            });
            if (lowest.index === highest.index) {
                lowest.index = highest.index + 1;
            }
            var middleIndex = 3 - highest.index - lowest.index;
            var middle = {
                val: rgbArrayWithoutAlpha[middleIndex],
                index: middleIndex
            };
            return [lowest, middle, highest];
        };
        ColorProvider.prototype.contrast = function (_Luminance) {
            var brightest = Math.max(1.05, _Luminance + 0.05);
            var darkest = Math.min(1.05, _Luminance + 0.05);
            var contrast = brightest / darkest;
            return contrast < 2.7;
        };
        ColorProvider.prototype.isColor = function (_StrColor) {
            var CSSDeclaration = new Option().style;
            CSSDeclaration.color = _StrColor;
            return CSSDeclaration.color ? CSSDeclaration.color : null;
        };
        ColorProvider.prototype.getRGBArray = function (_Rgb) {
            return _Rgb
                .replace(/^(rgb|rgba)\(/, '')
                .replace(/\)$/, '')
                .replace(/\s/g, '')
                .split(',')
                .map(function (x) { return +x; });
        };
        ColorProvider.prototype.luminance = function (_Rgb) {
            var rgbIntArray = this.getRGBArray(_Rgb);
            var W3algorithm = rgbIntArray.map(function (item) {
                item /= 255;
                return item <= 0.03928 ? item / 12.92 : Math.pow((item + 0.055) / 1.055, 2.4);
            });
            return W3algorithm[0] * 0.2126 + W3algorithm[1] * 0.7152 + W3algorithm[2] * 0.0722;
        };
        ColorProvider.prototype.transparentize = function (_Rgb, _Percentage) {
            var baseArray = this.Base.replace(/^(rgb|rgba)\(/, '')
                .replace(/\)$/, '')
                .replace(/\s/g, '')
                .split(',')
                .map(function (x) { return +x; });
            if (baseArray.length > 3) {
                baseArray.pop();
            }
            var amount = (100 - _Percentage) / 100;
            baseArray.push(amount);
            return "rgb(" + baseArray.join() + ")";
        };
        return ColorProvider;
    }());
    var DataControl = /** @class */ (function () {
        function DataControl() {
        }
        /**
         * @ignore
         */
        DataControl.prototype.copyValuesFrom = function (_Data, _DestinationObject) {
            if (typeof _Data !== 'object') {
                return _DestinationObject;
            }
            var dataKeys = Object.keys(_Data);
            var destinationObjectKeys = Object.keys(_DestinationObject);
            dataKeys.forEach(function (key) {
                if (destinationObjectKeys.find(function (tKey) { return tKey === key || tKey === '_' + key; })) {
                    if (key.includes('Date')) {
                        var date = Date.parse(_Data[key]);
                        if (date) {
                            _DestinationObject[key] = new Date(date);
                        }
                        else {
                            if (_Data[key] !== null) {
                                _DestinationObject[key] = _Data[key];
                            }
                        }
                    }
                    else {
                        if (_Data[key] !== null) {
                            _DestinationObject[key] = _Data[key];
                        }
                    }
                }
            });
            return _DestinationObject;
        };
        return DataControl;
    }());
    var Timer = /** @class */ (function () {
        function Timer() {
            this.TimePassed = 0;
            this.Progress = 0;
            this.Remaining = 100;
        }
        Timer.prototype.setMilliseconds = function (_Milliseconds) {
            this.Milliseconds = _Milliseconds;
        };
        Timer.prototype.reset = function () {
            this.TimePassed = 0;
            this.Progress = 0;
        };
        Timer.prototype.pause = function () {
            this.TimePassed = 0;
            this.Progress = 0;
        };
        Timer.prototype.stop = function () {
            this.TimePassed = 0;
            clearInterval(this.Timer);
        };
        Timer.prototype.start = function () {
            var _this = this;
            this.Timer = setInterval(function () {
                if (_this.TimePassed >= _this.Milliseconds) {
                    clearInterval(_this.Timer);
                    return;
                }
                _this.TimePassed += 100;
                _this.Progress = (_this.TimePassed * 100) / _this.Milliseconds;
                _this.Remaining = 100 - _this.Progress;
            }, 100);
        };
        return Timer;
    }());

    var ConfirmBoxConfigService = /** @class */ (function () {
        function ConfirmBoxConfigService(userConfig) {
            if (userConfig === void 0) { userConfig = {}; }
            this.userConfig = userConfig;
            this.authorConfig = new ConfirmBoxSettings();
            this.productionConfig = new ConfirmBoxSettings();
            // region *** confirmBox userConfig (user input app-module) ***
            var userConfigBase = new ConfirmBoxSettings();
            var dataControl = new DataControl();
            dataControl.copyValuesFrom(userConfig.ConfirmBoxCoreConfig, userConfigBase.ConfirmBoxCoreConfig); // this will make sure that object has right properties
            userConfig.ConfirmBoxCoreConfig = userConfigBase.ConfirmBoxCoreConfig;
            // endregion
            // region *** author default config values (if there is no user input) ***
            this.authorConfig.ConfirmBoxCoreConfig.Width = 'auto';
            this.authorConfig.ConfirmBoxCoreConfig.Height = 'auto';
            this.authorConfig.ConfirmBoxCoreConfig.ButtonPosition = 'center';
            this.authorConfig.ConfirmBoxCoreConfig.ConfirmLabel = 'Confirm';
            this.authorConfig.ConfirmBoxCoreConfig.DeclineLabel = 'Decline';
            this.authorConfig.ConfirmBoxCoreConfig.DisableIcon = false;
            this.authorConfig.ConfirmBoxCoreConfig.AllowHTMLMessage = false;
            this.authorConfig.ConfirmBoxCoreConfig.LayoutType = exports.DialogLayoutDisplay.NONE;
            this.authorConfig.ConfirmBoxCoreConfig.AnimationIn = exports.AppearanceAnimation.ZOOM_IN;
            this.authorConfig.ConfirmBoxCoreConfig.AnimationOut = exports.DisappearanceAnimation.ZOOM_OUT;
            this.authorConfig.ConfirmBoxCoreConfig.CustomStyles = new ConfirmBoxCustomStyles();
            // endregion
            // region *** Production setup ***
            dataControl.copyValuesFrom(this.authorConfig.ConfirmBoxCoreConfig, this.productionConfig.ConfirmBoxCoreConfig);
            dataControl.copyValuesFrom(userConfig.ConfirmBoxCoreConfig, this.productionConfig.ConfirmBoxCoreConfig);
            // endregion
        }
        return ConfirmBoxConfigService;
    }());
    ConfirmBoxConfigService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function ConfirmBoxConfigService_Factory() { return new ConfirmBoxConfigService(i0__namespace.ɵɵinject("confirmBoxConfig")); }, token: ConfirmBoxConfigService, providedIn: "root" });
    ConfirmBoxConfigService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    ConfirmBoxConfigService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: ['confirmBoxConfig',] }] }
    ]; };

    var DialogInjector = /** @class */ (function () {
        function DialogInjector(ParentInjector, AdditionalTokens) {
            this.ParentInjector = ParentInjector;
            this.AdditionalTokens = AdditionalTokens;
        }
        DialogInjector.prototype.get = function (token, notFoundValue, flags) {
            var value = this.AdditionalTokens.get(token);
            if (value) {
                return value;
            }
            return this.ParentInjector.get(token, notFoundValue);
        };
        return DialogInjector;
    }());

    // in
    var bounceIn = [
        animations.style({
            transform: 'scale3d(0.7, 0.7, 0.7)',
            offset: 0,
            opacity: 0
        }),
        animations.style({
            transform: 'scale3d(1.3, 1.3, 1.3)',
            offset: 0.3,
            opacity: 0.3
        }),
        animations.style({
            transform: 'scale3d(0.95, 0.95, 0.95)',
            offset: 0.6,
            opacity: 1
        }),
        animations.style({
            transform: 'scale3d(1.03, 1.03, 1.03)',
            opacity: 1,
            offset: 0.8
        }),
        animations.style({
            transform: 'transform: scale3d(0.97, 0.97, 0.97)',
            offset: 0.9
        }),
        animations.style({
            transform: 'scale3d(1, 1, 1)',
            offset: 1,
            opacity: 1
        })
    ];
    var swing = [
        animations.style({ offset: 0, opacity: 0 }),
        animations.style({ transform: 'rotate3d(0, 0, 1, 10deg)', offset: 0.2 }),
        animations.style({ transform: 'rotate3d(0, 0, 1, -7deg)', offset: 0.3, opacity: 1 }),
        animations.style({ transform: 'rotate3d(0, 0, 1, 3deg)', offset: 0.55 }),
        animations.style({ transform: 'rotate3d(0, 0, 1, -3deg)', offset: 0.8 }),
        animations.style({ transform: 'none', offset: 1 })
    ];
    var zoomIn = [
        animations.style({
            transform: 'scale3d(0.3, 0.3, 0.3)',
            offset: 0
        }),
        animations.style({
            offset: 0.1,
            opacity: 1
        }),
        animations.style({
            transform: 'scale3d(1, 1, 1)',
            offset: 1
        })
    ];
    var zoomInRotate = [
        animations.style({
            transform: 'scale(0.1) rotate(30deg)',
            offset: 0,
            opacity: 0
        }),
        animations.style({
            transform: 'rotate(-10deg)',
            offset: 0.5,
            opacity: 1
        }),
        animations.style({
            transform: 'rotate(3deg)',
            offset: 0.7
        }),
        animations.style({
            transform: 'scale(1)',
            offset: 1
        })
    ];
    var elastic = [
        animations.style({ transform: 'scale3d(1, 1, 1)', offset: 0, opacity: 0 }),
        animations.style({ transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3 }),
        animations.style({ transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4, opacity: 1 }),
        animations.style({ transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5 }),
        animations.style({ transform: 'scale3d(0.95, 1.05, 1)', offset: 0.6 }),
        animations.style({ transform: 'scale3d(1.05, 0.95, 1)', offset: 0.7 }),
        animations.style({ transform: 'scale3d(1, 1, 1)', offset: 1 })
    ];
    var jello = [
        animations.style({ offset: 0, opacity: 0 }),
        animations.style({ transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.111 }),
        animations.style({ transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.222 }),
        animations.style({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.333, opacity: 1 }),
        animations.style({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.444 }),
        animations.style({ transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.555 }),
        animations.style({ transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.666 }),
        animations.style({ transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.777 }),
        animations.style({
            transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)',
            offset: 0.888
        }),
        animations.style({ transform: 'none', offset: 1 })
    ];
    var fadeIn = [animations.style({ offset: 0, opacity: 0 }), animations.style({ offset: 1, opacity: 1 })];
    var slideInUp = [
        animations.style({ offset: 0, opacity: 0, transform: 'translate3d(0, 100%, 0)' }),
        animations.style({ offset: 1, opacity: 1, transform: 'translate3d(0, 0, 0)' })
    ];
    var slideInDown = [
        animations.style({ offset: 0, opacity: 0, transform: 'translate3d(0, -100%, 0)' }),
        animations.style({ offset: 1, opacity: 1, transform: 'translate3d(0, 0, 0)' })
    ];
    var slideInLeft = [
        animations.style({ offset: 0, opacity: 0, transform: 'translate3d(-100%, 0, 0)' }),
        animations.style({ offset: 1, opacity: 1, transform: 'translate3d(0, 0, 0)' })
    ];
    var slideInRight = [
        animations.style({ offset: 0, opacity: 0, transform: 'translate3d(100%, 0, 0)' }),
        animations.style({ offset: 1, opacity: 1, transform: 'translate3d(0, 0, 0)' })
    ];
    // out
    var zoomOutWind = [
        animations.style({
            transform: 'scale3d(.475, .475, .475) translate3d(-42px, 0, 0)',
            offset: 0.4
        }),
        animations.style({
            transform: 'scale(.1) translate3d(400px, 0, 0)',
            'transform-origin': 'top center',
            offset: 1,
            opacity: 0
        })
    ];
    var bounceOut = [
        animations.style({
            transform: 'scale3d(1.3, 1.3, 1.3)',
            offset: 0.3
        }),
        animations.style({
            transform: 'scale3d(0.9, 0.9, 0.9)',
            offset: 0.5
        }),
        animations.style({
            transform: 'scale3d(0.3, 0.3, 0.3)',
            opacity: 0,
            offset: 1
        })
    ];
    var flipOutY = [
        animations.style({ transform: 'perspective(400px)', offset: 0 }),
        animations.style({
            transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)',
            opacity: 1,
            offset: 0.33
        }),
        animations.style({
            transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
            opacity: 0,
            offset: 0.9
        })
    ];
    var zoomOut = [
        animations.style({
            opacity: 1,
            offset: 0
        }),
        animations.style({
            offset: 0.5,
            transform: 'scale3d(0.3, 0.3, 0.3)',
            opacity: 0
        }),
        animations.style({
            offset: 1,
            opacity: 0
        })
    ];
    var zoomOutRotate = [
        animations.style({
            opacity: 1,
            offset: 0
        }),
        animations.style({
            offset: 0.9,
            transform: 'rotate(200deg) scale(0.1)',
            opacity: 0
        })
    ];
    var slideOutUp = [
        animations.style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
        animations.style({ transform: 'translate3d(0, -100%, 0)', opacity: 0, offset: 1 })
    ];
    var slideOutDown = [
        animations.style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
        animations.style({ transform: 'translate3d(0, 100%, 0)', opacity: 0, offset: 1 })
    ];
    var slideOutLeft = [
        animations.style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
        animations.style({ transform: 'translate3d(-100%, 0, 0)', opacity: 0, offset: 1 })
    ];
    var slideOutRight = [
        animations.style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
        animations.style({ transform: 'translate3d(100%, 0, 0)', opacity: 0, offset: 1 })
    ];
    // motion
    var wobble = [
        animations.style({
            transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)',
            offset: 0.15
        }),
        animations.style({
            transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)',
            offset: 0.3
        }),
        animations.style({
            transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)',
            offset: 0.45
        }),
        animations.style({
            transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)',
            offset: 0.6
        }),
        animations.style({
            transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)',
            offset: 0.75
        }),
        animations.style({ transform: 'none', offset: 1 })
    ];

    function boxAnimations() {
        return animations.trigger('boxAnimations', [
            animations.state('reset', animations.style({ opacity: 1 })),
            // in
            animations.state('0', animations.style({ opacity: 1 })),
            animations.state('bounceIn', animations.style({ opacity: 1 })),
            animations.state('swing', animations.style({ opacity: 1 })),
            animations.state('zoomIn', animations.style({ opacity: 1 })),
            animations.state('zoomInRotate', animations.style({ opacity: 1 })),
            animations.state('elastic', animations.style({ opacity: 1 })),
            animations.state('jello', animations.style({ opacity: 1 })),
            animations.state('fadeIn', animations.style({ opacity: 1 })),
            animations.state('slideInUp', animations.style({ opacity: 1 })),
            animations.state('slideInDown', animations.style({ opacity: 1 })),
            animations.state('slideInLeft', animations.style({ opacity: 1 })),
            animations.state('slideInRight', animations.style({ opacity: 1 })),
            animations.transition('* => 0', animations.animate('10ms', animations.keyframes(fadeIn))),
            animations.transition('* => bounceIn', animations.animate('1000ms cubic-bezier(0.215, 0.61, 0.355, 1)', animations.keyframes(bounceIn))),
            animations.transition('* => swing', animations.animate('800ms', animations.keyframes(swing))),
            animations.transition('* => zoomIn', animations.animate('400ms', animations.keyframes(zoomIn))),
            animations.transition('* => zoomInRotate', animations.animate('800ms ease-out', animations.keyframes(zoomInRotate))),
            animations.transition('* => elastic', animations.animate('1000ms', animations.keyframes(elastic))),
            animations.transition('* => jello', animations.animate(1000, animations.keyframes(jello))),
            animations.transition('* => fadeIn', animations.animate('400ms ease-out', animations.keyframes(fadeIn))),
            animations.transition('* => slideInUp', animations.animate('400ms ease-out', animations.keyframes(slideInUp))),
            animations.transition('* => slideInDown', animations.animate('400ms ease-out', animations.keyframes(slideInDown))),
            animations.transition('* => slideInLeft', animations.animate('400ms ease-out', animations.keyframes(slideInLeft))),
            animations.transition('* => slideInRight', animations.animate('400ms ease-out', animations.keyframes(slideInRight))),
            animations.transition('* => reset', animations.style({ opacity: 1 })),
            // out
            animations.state('zoomOutWind', animations.style({ opacity: 0 })),
            animations.state('bounceOut', animations.style({ opacity: 0 })),
            animations.state('flipOutY', animations.style({ opacity: 0 })),
            animations.state('zoomOut', animations.style({ opacity: 0 })),
            animations.state('zoomOutRotate', animations.style({ opacity: 0 })),
            animations.state('slideOutUp', animations.style({ opacity: 0 })),
            animations.state('slideOutDown', animations.style({ opacity: 0 })),
            animations.state('slideOutLeft', animations.style({ opacity: 0 })),
            animations.state('slideOutRight', animations.style({ opacity: 0 })),
            animations.transition('* => zoomOutWind', animations.animate('400ms ease-in', animations.keyframes(zoomOutWind))),
            animations.transition('* => bounceOut', animations.animate('400ms ease-in', animations.keyframes(bounceOut))),
            animations.transition('* => flipOutY', animations.animate('400ms ease-in', animations.keyframes(flipOutY))),
            animations.transition('* => zoomOut', animations.animate('400ms ease-in', animations.keyframes(zoomOut))),
            animations.transition('* => zoomOutRotate', animations.animate('400ms ease-out', animations.keyframes(zoomOutRotate))),
            animations.transition('* => slideOutUp', animations.animate('300ms ease-in', animations.keyframes(slideOutUp))),
            animations.transition('* => slideOutDown', animations.animate('300ms ease-in', animations.keyframes(slideOutDown))),
            animations.transition('* => slideOutLeft', animations.animate('300ms ease-in', animations.keyframes(slideOutLeft))),
            animations.transition('* => slideOutRight', animations.animate('300ms ease-in', animations.keyframes(slideOutRight))),
            // motion
            animations.transition('* => wobble', animations.animate(1000, animations.keyframes(wobble)))
        ]);
    }

    function fadeInOut() {
        return animations.trigger('fadeInOut', [
            animations.state('open', animations.style({
                opacity: 1
            })),
            animations.state('close-fast', animations.style({
                opacity: 0
            })),
            animations.state('close-instant', animations.style({
                opacity: 0
            })),
            animations.transition('* => close-fast', [animations.query('*', [animations.animateChild()]), animations.animate('{{closeDelay}}')]),
            animations.transition('* => open', [animations.animate(100)]),
            animations.transition('* => close-instant', [animations.animate(0)])
        ]);
    }

    var ConfirmBoxWrapperComponent = /** @class */ (function () {
        function ConfirmBoxWrapperComponent(confirmBoxBelonging, cd) {
            var _this = this;
            this.confirmBoxBelonging = confirmBoxBelonging;
            this.cd = cd;
            this.fadeInOutAnimation = 'open';
            this.animationFlyDirection = 'none';
            setTimeout(function () {
                _this.boxAnimation = _this.confirmBoxBelonging.ConfirmBoxCoreConfig.AnimationIn;
            }, 1);
        }
        ConfirmBoxWrapperComponent.prototype.ngAfterViewInit = function () {
            this.setResponse(false);
            this.cd.detectChanges();
            this.setCustomStyles();
        };
        ConfirmBoxWrapperComponent.prototype.setResponse = function (_IsSuccess, _ClickedButtonID) {
            var response = new ConfirmBoxDefaultResponse();
            if (_ClickedButtonID) {
                response.ClickedButtonID = _ClickedButtonID;
            }
            response.setSuccess(_IsSuccess);
            response.setBelonging(this.confirmBoxBelonging);
            this.confirmBoxBelonging.EventsController.setDefaultResponse(response);
        };
        ConfirmBoxWrapperComponent.prototype.onOverlayClicked = function (evt) {
            // console.log('onOverlayClicked');
        };
        ConfirmBoxWrapperComponent.prototype.onCustomButton = function (_Button) {
            this.confirmBoxBelonging.EventsController.onButtonClick(_Button);
            this.setResponse(true, _Button.ID);
            this.confirmBoxBelonging.EventsController.close();
        };
        ConfirmBoxWrapperComponent.prototype.onButtonClick = function (_Type) {
            var buttonID;
            if (_Type === 'confirm') {
                buttonID = this.confirmBoxBelonging.ConfirmBoxCoreConfig.ConfirmLabel.toLowerCase();
            }
            else if (_Type === 'decline') {
                buttonID = this.confirmBoxBelonging.ConfirmBoxCoreConfig.DeclineLabel.toLowerCase();
            }
            this.setResponse(_Type === 'confirm', buttonID);
            this.confirmBoxBelonging.EventsController.close();
        };
        ConfirmBoxWrapperComponent.prototype.closeParent$ = function () {
            this.boxAnimation = this.confirmBoxBelonging.ConfirmBoxCoreConfig.AnimationOut;
            var closeDuration = this.confirmBoxBelonging.ConfirmBoxCoreConfig.AnimationOut ? 800 : 200;
            this.fadeInOutAnimation = 'close-fast';
            return new rxjs.Observable(function (observer) {
                observer.next('');
                observer.complete();
            }).pipe(operators.delay(closeDuration));
        };
        ConfirmBoxWrapperComponent.prototype.setCustomStyles = function () {
            var _this = this;
            if (this.confirmBoxBelonging.ConfirmBoxCoreConfig.CustomStyles.WrapperCSS && this.elConfirmBoxWrapper) {
                this.elConfirmBoxWrapper.nativeElement.style.cssText +=
                    this.confirmBoxBelonging.ConfirmBoxCoreConfig.CustomStyles.WrapperCSS;
            }
            if (this.confirmBoxBelonging.ConfirmBoxCoreConfig.CustomStyles.TextCSS && this.elTextWrapper) {
                this.elTextWrapper.nativeElement.style.cssText +=
                    this.confirmBoxBelonging.ConfirmBoxCoreConfig.CustomStyles.TextCSS;
            }
            if (this.confirmBoxBelonging.ConfirmBoxCoreConfig.CustomStyles.TitleCSS && this.elTitleWrapper) {
                this.elTitleWrapper.nativeElement.style.cssText +=
                    this.confirmBoxBelonging.ConfirmBoxCoreConfig.CustomStyles.TitleCSS;
            }
            if (this.confirmBoxBelonging.ConfirmBoxCoreConfig.CustomStyles.ButtonSectionCSS && this.elButtonWrapper) {
                this.elButtonWrapper.nativeElement.style.cssText +=
                    this.confirmBoxBelonging.ConfirmBoxCoreConfig.CustomStyles.ButtonSectionCSS;
            }
            if (this.confirmBoxBelonging.ConfirmBoxCoreConfig.CustomStyles.ButtonCSS && this.elButton) {
                this.elButton.forEach(function (el) {
                    el.nativeElement.style.cssText += _this.confirmBoxBelonging.ConfirmBoxCoreConfig.CustomStyles.ButtonCSS;
                });
            }
        };
        return ConfirmBoxWrapperComponent;
    }());
    ConfirmBoxWrapperComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'app-confirm-box-wrapper',
                    template: "<div\n  class=\"ngx-awesome-popup-overlay confirm-box-overlay\"\n  (dblclick)=\"onOverlayClicked($event)\"\n  [@fadeInOut]=\"{\n    value: fadeInOutAnimation,\n    params: {\n      closeDelay: confirmBoxBelonging.ConfirmBoxCoreConfig.AnimationOut === 0 ? '200ms' : '300ms'\n    }\n  }\"\n>\n  <div\n    class=\"evolve-confirm-box\"\n    [@.disabled]=\"\n      confirmBoxBelonging.ConfirmBoxCoreConfig.AnimationIn === 0 &&\n      confirmBoxBelonging.ConfirmBoxCoreConfig.AnimationOut === 0\n    \"\n    [@boxAnimations]=\"boxAnimation\"\n    #elConfirmBoxWrapper\n    [ngClass]=\"{\n      'standard-dialog': confirmBoxBelonging.ConfirmBoxCoreConfig.LayoutType === 0,\n      'success-dialog': confirmBoxBelonging.ConfirmBoxCoreConfig.LayoutType === 1,\n      'info-dialog': confirmBoxBelonging.ConfirmBoxCoreConfig.LayoutType === 2,\n      'warning-dialog': confirmBoxBelonging.ConfirmBoxCoreConfig.LayoutType === 3,\n      'danger-dialog': confirmBoxBelonging.ConfirmBoxCoreConfig.LayoutType === 4\n    }\"\n    [ngStyle]=\"{\n      width: confirmBoxBelonging.ConfirmBoxCoreConfig.Width,\n      height: confirmBoxBelonging.ConfirmBoxCoreConfig.Height,\n      opacity: confirmBoxBelonging.ConfirmBoxCoreConfig.AnimationIn === 0 ? 1 : 0\n    }\"\n  >\n    <div class=\"confirm-box-title-content\" #elTitleWrapper *ngIf=\"confirmBoxBelonging.Dispatch.Title\">\n      <div class=\"dont-break-out\">\n        <div class=\"text-wrapper dont-break-out\">\n          <div class=\"confirm-box-title-text\">\n            {{ confirmBoxBelonging.Dispatch.Title }}\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div\n      class=\"content-holder\"\n      #elTextWrapper\n      [ngClass]=\"confirmBoxBelonging.Dispatch.Title ? '' : 'without-title'\"\n      *ngIf=\"confirmBoxBelonging.Dispatch.Message\"\n    >\n      <div class=\"icon-section\" *ngIf=\"!confirmBoxBelonging.ConfirmBoxCoreConfig.DisableIcon\">\n        <span\n          class=\"icon-type-confirm-box\"\n          [ngClass]=\"{\n            '': confirmBoxBelonging.ConfirmBoxCoreConfig.LayoutType === 0,\n            'ap-icon-success icon-check-circle': confirmBoxBelonging.ConfirmBoxCoreConfig.LayoutType === 1,\n            'ap-icon-info icon-info-circle': confirmBoxBelonging.ConfirmBoxCoreConfig.LayoutType === 2,\n            'ap-icon-warning icon-warning': confirmBoxBelonging.ConfirmBoxCoreConfig.LayoutType === 3,\n            'ap-icon-danger icon-times-circle': confirmBoxBelonging.ConfirmBoxCoreConfig.LayoutType === 4\n          }\"\n        ></span>\n      </div>\n      <div class=\"text-wrapper-section confirm-box-inner-content\">\n        <!--<div class=\"dont-break-out\" [ngClass]=\"{'text-wrapper-section-with-icon': showIcon, 'text-wrapper-section': !showIcon}\">-->\n        <div class=\"dont-break-out\">\n          <div class=\"text-wrapper dont-break-out\" *ngIf=\"!confirmBoxBelonging.ConfirmBoxCoreConfig.AllowHTMLMessage\">\n            {{ confirmBoxBelonging.Dispatch.Message }}\n          </div>\n          <div\n            class=\"text-wrapper\"\n            *ngIf=\"confirmBoxBelonging.ConfirmBoxCoreConfig.AllowHTMLMessage\"\n            [innerHTML]=\"confirmBoxBelonging.Dispatch.Message\"\n          ></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"button-holder\" #elButtonWrapper>\n      <div\n        class=\"button-section\"\n        *ngIf=\"confirmBoxBelonging.Buttons.length\"\n        [ngStyle]=\"{\n          'text-align': confirmBoxBelonging.ConfirmBoxCoreConfig.ButtonPosition\n        }\"\n      >\n        <button\n          class=\"ed-btn ed-btn-md\"\n          #elButton\n          *ngFor=\"let button of confirmBoxBelonging.Buttons\"\n          (click)=\"onCustomButton(button)\"\n          [ngClass]=\"{\n            '': button.LayoutType ? button.LayoutType === 0 : false,\n            'ed-btn-success': button.LayoutType ? button.LayoutType === 1 : false,\n            'ed-btn-info': button.LayoutType ? button.LayoutType === 2 : false,\n            'ed-btn-warning': button.LayoutType ? button.LayoutType === 3 : false,\n            'ed-btn-danger': button.LayoutType ? button.LayoutType === 4 : false,\n            'ed-btn-dark': button.LayoutType ? button.LayoutType === 5 : false,\n            'ed-btn-light': button.LayoutType ? button.LayoutType === 6 : false,\n            'ed-btn-primary': button.LayoutType ? button.LayoutType === 7 : false,\n            'ed-btn-secondary': button.LayoutType ? button.LayoutType === 8 : false,\n            'ed-btn-link': button.LayoutType ? button.LayoutType === 9 : false\n          }\"\n        >\n          {{ button.Label }}\n        </button>\n      </div>\n      <div\n        class=\"button-section\"\n        *ngIf=\"!confirmBoxBelonging.Buttons.length\"\n        [ngStyle]=\"{\n          'text-align': confirmBoxBelonging.ConfirmBoxCoreConfig.ButtonPosition\n        }\"\n      >\n        <button\n          class=\"ed-btn ed-btn-md\"\n          #elButton\n          (click)=\"onButtonClick('confirm')\"\n          [ngClass]=\"{\n            'ed-btn-primary': confirmBoxBelonging.ConfirmBoxCoreConfig.LayoutType === 0,\n            'ed-btn-success': confirmBoxBelonging.ConfirmBoxCoreConfig.LayoutType === 1,\n            'ed-btn-info': confirmBoxBelonging.ConfirmBoxCoreConfig.LayoutType === 2,\n            'ed-btn-warning': confirmBoxBelonging.ConfirmBoxCoreConfig.LayoutType === 3,\n            'ed-btn-danger': confirmBoxBelonging.ConfirmBoxCoreConfig.LayoutType === 4\n          }\"\n        >\n          {{ confirmBoxBelonging.ConfirmBoxCoreConfig.ConfirmLabel }}\n        </button>\n        <button\n          class=\"ed-btn ed-btn-md ed-btn-secondary\"\n          #elButton\n          (click)=\"onButtonClick('decline')\"\n          *ngIf=\"confirmBoxBelonging.ConfirmBoxCoreConfig.DeclineLabel\"\n        >\n          {{ confirmBoxBelonging.ConfirmBoxCoreConfig.DeclineLabel }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    // styleUrls: ['../../../styles/types/confirm-box.scss'],
                    animations: [fadeInOut(), boxAnimations()]
                },] }
    ];
    ConfirmBoxWrapperComponent.ctorParameters = function () { return [
        { type: ConfirmBoxBelonging, decorators: [{ type: i0.Inject, args: ['confirmBoxBelonging',] }] },
        { type: i0.ChangeDetectorRef }
    ]; };
    ConfirmBoxWrapperComponent.propDecorators = {
        elConfirmBoxWrapper: [{ type: i0.ViewChild, args: ['elConfirmBoxWrapper',] }],
        elTextWrapper: [{ type: i0.ViewChild, args: ['elTextWrapper',] }],
        elTitleWrapper: [{ type: i0.ViewChild, args: ['elTitleWrapper',] }],
        elButtonWrapper: [{ type: i0.ViewChild, args: ['elButtonWrapper',] }],
        elButton: [{ type: i0.ViewChildren, args: ['elButton',] }]
    };

    var ConfirmBoxService = /** @class */ (function () {
        function ConfirmBoxService(componentFactoryResolver, injector, appRef) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.injector = injector;
            this.appRef = appRef;
            this.confirmBoxComponentRefList = [];
        }
        ConfirmBoxService.prototype.open = function (_ConfirmBoxBelonging) {
            var dialogController = _ConfirmBoxBelonging.EventsController;
            var componentRef = this.getComponentRef(dialogController, _ConfirmBoxBelonging);
            this.confirmBoxComponentRefList.push(componentRef);
            componentRef.instance.confirmBoxBelonging = _ConfirmBoxBelonging;
            this.appendToBodyParentComponent(componentRef);
            this.listeners(dialogController);
            return dialogController;
        };
        ConfirmBoxService.prototype.getComponentRef = function (_EventsController, _ConfirmBoxBelonging) {
            var componentFactory;
            var dialogIndex = this.findDialogIndex(_ConfirmBoxBelonging.EntityUniqueID);
            if (dialogIndex === -1) {
                var weakMap = new WeakMap();
                weakMap.set(ConfirmBoxEventsController, _EventsController);
                componentFactory = this.componentFactoryResolver.resolveComponentFactory(ConfirmBoxWrapperComponent);
                return componentFactory.create(new DialogInjector(this.injector, weakMap));
            }
            return null;
        };
        ConfirmBoxService.prototype.listeners = function (_EventsController) {
            var _this = this;
            // Listener for closing dialog
            var closeDialogSubscription = _EventsController.afterClosed$.subscribe(function (response) {
                var modalIndex = _this.findDialogIndex(response.confirmBoxBelonging.EntityUniqueID);
                _this.removeFromBodyParentComponent(modalIndex);
                closeDialogSubscription.unsubscribe();
            });
        };
        ConfirmBoxService.prototype.appendToBodyParentComponent = function (_ComponentRef) {
            // attach view to ignite lifecycle hooks
            this.appRef.attachView(_ComponentRef.hostView);
            // DOM
            var domElem = _ComponentRef.hostView.rootNodes[0];
            document.body.appendChild(domElem);
        };
        ConfirmBoxService.prototype.closeDialogWrapperComponent = function (_DialogUniqueID) {
            var modalIndex = this.findDialogIndex(_DialogUniqueID);
            this.removeFromBodyParentComponent(modalIndex);
        };
        ConfirmBoxService.prototype.removeFromBodyParentComponent = function (_DialogIndex) {
            var _this = this;
            if (_DialogIndex > -1) {
                this.confirmBoxComponentRefList[_DialogIndex].instance
                    .closeParent$()
                    .pipe(operators.tap(function (item) {
                    _this.appRef.detachView(_this.confirmBoxComponentRefList[_DialogIndex].hostView);
                    _this.confirmBoxComponentRefList[_DialogIndex].destroy();
                    _this.confirmBoxComponentRefList.splice(_DialogIndex, 1);
                }), operators.take(1))
                    .subscribe();
            }
        };
        ConfirmBoxService.prototype.findDialogIndex = function (_DialogUniqueID) {
            return this.confirmBoxComponentRefList.findIndex(function (item) {
                return _DialogUniqueID === item.instance.confirmBoxBelonging.EntityUniqueID;
            });
        };
        return ConfirmBoxService;
    }());
    ConfirmBoxService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function ConfirmBoxService_Factory() { return new ConfirmBoxService(i0__namespace.ɵɵinject(i0__namespace.ComponentFactoryResolver), i0__namespace.ɵɵinject(i0__namespace.INJECTOR), i0__namespace.ɵɵinject(i0__namespace.ApplicationRef)); }, token: ConfirmBoxService, providedIn: "root" });
    ConfirmBoxService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    ConfirmBoxService.ctorParameters = function () { return [
        { type: i0.ComponentFactoryResolver },
        { type: i0.Injector },
        { type: i0.ApplicationRef }
    ]; };

    var ConfirmBoxInitializer = /** @class */ (function () {
        function ConfirmBoxInitializer() {
            /** @internal */
            this.confirmBoxCarrier = new ConfirmBoxCarrier();
        }
        ConfirmBoxInitializer.prototype.openConfirmBox$ = function () {
            return this.confirmBoxCarrier.openConfirmBox$().pipe(operators.map(function (resp) {
                var basicConfirmBoxResponse = new ConfirmBoxResponse();
                var dataControl = new DataControl();
                dataControl.copyValuesFrom(resp, basicConfirmBoxResponse);
                return basicConfirmBoxResponse;
            }), operators.take(1));
        };
        ConfirmBoxInitializer.prototype.setButtons = function (_Buttons) {
            this.confirmBoxCarrier.setButtons(_Buttons);
        };
        ConfirmBoxInitializer.prototype.setConfig = function (_ConfirmBoxCoreConfig) {
            this.confirmBoxCarrier.setConfig(_ConfirmBoxCoreConfig);
        };
        ConfirmBoxInitializer.prototype.setDispatch = function (_Title, _Message) {
            if (_Message === void 0) { _Message = null; }
            this.confirmBoxCarrier.setTitle(_Title);
            this.confirmBoxCarrier.setMessage(_Message);
        };
        ConfirmBoxInitializer.prototype.setTitle = function (_Title) {
            this.confirmBoxCarrier.setTitle(_Title);
        };
        ConfirmBoxInitializer.prototype.setMessage = function (_Message) {
            this.confirmBoxCarrier.setMessage(_Message);
        };
        ConfirmBoxInitializer.prototype.setButtonLabels = function (_Confirm, _Decline) {
            this.confirmBoxCarrier.setButtonLabels(_Confirm, _Decline);
        };
        return ConfirmBoxInitializer;
    }());
    var ConfirmBoxResponse = /** @class */ (function (_super) {
        __extends(ConfirmBoxResponse, _super);
        function ConfirmBoxResponse() {
            var _this = _super.call(this) || this;
            // private Response: DialogPrepareResponse            = new DialogPrepareResponse();
            _this.Success = null;
            _this.ClickedButtonID = null;
            return _this;
        }
        ConfirmBoxResponse.prototype.setSuccess = function (_IsSuccess) {
            this.Success = _IsSuccess;
        };
        ConfirmBoxResponse.prototype.setClickedButtonID = function (_ClickedButtonID) {
            this.ClickedButtonID = _ClickedButtonID;
        };
        return ConfirmBoxResponse;
    }(DataControl));
    var ConfirmBoxEventsController = /** @class */ (function () {
        function ConfirmBoxEventsController(EntityUniqueID) {
            this.EntityUniqueID = EntityUniqueID;
            this._afterClosed = new rxjs.Subject();
            this._onButtonClick = new rxjs.Subject();
            this._buttonList = new rxjs.Subject();
            this.afterClosed$ = this._afterClosed.asObservable();
            this.onButtonClick$ = this._onButtonClick.asObservable();
            this.buttonList$ = this._buttonList.asObservable();
        }
        ConfirmBoxEventsController.prototype.close = function (_Response) {
            var response = _Response ? _Response : this.defaultResponse;
            this._afterClosed.next(response);
        };
        ConfirmBoxEventsController.prototype.onButtonClick = function (_Button) {
            this.defaultResponse.setClickedButtonID(_Button.ID);
            this._onButtonClick.next(_Button);
        };
        ConfirmBoxEventsController.prototype.setButtonList = function (_ButtonList) {
            this._buttonList.next(_ButtonList);
        };
        ConfirmBoxEventsController.prototype.setDefaultResponse = function (_Response) {
            this.defaultResponse = _Response;
        };
        return ConfirmBoxEventsController;
    }());
    // endregion
    var ConfirmBoxDefaultResponse = /** @class */ (function (_super) {
        __extends(ConfirmBoxDefaultResponse, _super);
        function ConfirmBoxDefaultResponse() {
            var _this = _super.call(this) || this;
            _this.confirmBoxBelonging = null;
            return _this;
        }
        ConfirmBoxDefaultResponse.prototype.setBelonging = function (_ConfirmBoxBelonging) {
            this.confirmBoxBelonging = _ConfirmBoxBelonging;
        };
        return ConfirmBoxDefaultResponse;
    }(ConfirmBoxResponse));
    var ConfirmBoxCarrier = /** @class */ (function () {
        function ConfirmBoxCarrier() {
            this.confirmBoxBelonging = new ConfirmBoxBelonging();
        }
        ConfirmBoxCarrier.prototype.setButtons = function (_Buttons) {
            if (_Buttons.length) {
                this.confirmBoxBelonging.Buttons = _Buttons;
            }
        };
        ConfirmBoxCarrier.prototype.setTitle = function (_Title) {
            this.confirmBoxBelonging.Dispatch.Title = _Title;
        };
        ConfirmBoxCarrier.prototype.setMessage = function (_Message) {
            this.confirmBoxBelonging.Dispatch.Message = _Message;
        };
        ConfirmBoxCarrier.prototype.setButtonLabels = function (_Confirm, _Decline) {
            this.confirmBoxBelonging.ConfirmBoxCoreConfig.ConfirmLabel = _Confirm;
            this.confirmBoxBelonging.ConfirmBoxCoreConfig.DeclineLabel = _Decline;
        };
        ConfirmBoxCarrier.prototype.setConfig = function (_ConfirmBoxBelonging) {
            // region *** local UserConfig (defined on place where dialog is called) ***
            var dataControl = new DataControl();
            dataControl.copyValuesFrom(_ConfirmBoxBelonging, this.confirmBoxBelonging.ConfirmBoxCoreConfig);
            // endregion
        };
        ConfirmBoxCarrier.prototype.openConfirmBox$ = function () {
            var service = ServiceLocator.injector.get(ConfirmBoxService);
            var confirmBoxController = service.open(this.confirmBoxBelonging);
            return confirmBoxController.afterClosed$;
        };
        return ConfirmBoxCarrier;
    }());
    var ConfirmBoxSettings = /** @class */ (function () {
        function ConfirmBoxSettings() {
            this.Buttons = [];
            this.ConfirmBoxCoreConfig = new ConfirmBoxCoreConfig();
            this.Dispatch = new Dispatch();
        }
        return ConfirmBoxSettings;
    }());
    var ConfirmBoxCustomStyles = /** @class */ (function () {
        function ConfirmBoxCustomStyles() {
            this.TitleCSS = null;
            this.TextCSS = null;
            this.ButtonSectionCSS = null;
            this.ButtonCSS = null;
            this.WrapperCSS = null;
        }
        return ConfirmBoxCustomStyles;
    }());
    var ConfirmBoxCoreConfig = /** @class */ (function () {
        function ConfirmBoxCoreConfig() {
            this.Width = null;
            this.Height = null;
            this.ButtonPosition = null;
            this.LayoutType = null;
            this.Dispatch = null;
            this.ConfirmLabel = null;
            this.DeclineLabel = null;
            this.DisableIcon = null;
            this.AllowHTMLMessage = null;
            this.AnimationIn = null;
            this.AnimationOut = null;
            this.CustomStyles = new ConfirmBoxCustomStyles();
        }
        return ConfirmBoxCoreConfig;
    }());
    var ConfirmBoxBelonging = /** @class */ (function (_super) {
        __extends(ConfirmBoxBelonging, _super);
        function ConfirmBoxBelonging() {
            var _this = _super.call(this) || this;
            _this.EntityUniqueID = 'C' + Math.random().toString(36).substr(2, 9);
            _this.EventsController = new ConfirmBoxEventsController(_this.EntityUniqueID);
            var ConfirmBoxCoreConfigurator = ServiceLocator.injector.get(ConfirmBoxConfigService);
            var baseSettings = new ConfirmBoxSettings();
            var dataControl = new DataControl();
            dataControl.copyValuesFrom(ConfirmBoxCoreConfigurator.productionConfig.ConfirmBoxCoreConfig, baseSettings.ConfirmBoxCoreConfig);
            _this.ConfirmBoxCoreConfig = baseSettings.ConfirmBoxCoreConfig;
            _this.Buttons = ConfirmBoxCoreConfigurator.productionConfig.Buttons.slice();
            return _this;
        }
        return ConfirmBoxBelonging;
    }(ConfirmBoxSettings));

    var DefaultLoaderComponent = /** @class */ (function () {
        function DefaultLoaderComponent() {
        }
        return DefaultLoaderComponent;
    }());
    DefaultLoaderComponent.decorators = [
        { type: i0.Component, args: [{
                    template: "<div class=\"box-position\">\n  <div class=\"loader-center\">\n    <div class=\"lds-ring\">\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n  </div>\n</div>\n",
                    styles: [".box-position{height:auto;left:50%;margin:0 auto;position:absolute;text-align:center;top:44%;transform:translate(-50%,-40%)}.box-position .loader-center{align-items:center;display:flex;justify-content:center}.box-position .loader-center .lds-ring{display:inline-block;height:80px;position:relative;width:80px}.box-position .loader-center .lds-ring div{animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border:8px solid;border-color:#d4d4d4 transparent transparent transparent;border-radius:50%;box-sizing:border-box;display:block;height:64px;margin:8px;position:absolute;width:64px}.box-position .loader-center .lds-ring div:nth-child(1){animation-delay:-.45s}.box-position .loader-center .lds-ring div:nth-child(2){animation-delay:-.3s}.box-position .loader-center .lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"]
                },] }
    ];

    var DialogConfigService = /** @class */ (function () {
        function DialogConfigService(userConfig) {
            if (userConfig === void 0) { userConfig = {}; }
            this.userConfig = userConfig;
            this.authorConfig = new DialogSettings();
            this.productionConfig = new DialogSettings();
            // region *** dialog userConfig (user input app-module) ***
            var userConfigBase = new DialogSettings();
            var dataControl = new DataControl();
            dataControl.copyValuesFrom(userConfig.DialogCoreConfig, userConfigBase.DialogCoreConfig); // this will make sure that object has right properties
            userConfig.DialogCoreConfig = userConfigBase.DialogCoreConfig;
            if (userConfig.DialogCoreConfig.LoaderComponent !== null) {
                userConfig.DialogCoreConfig.DisplayLoader = userConfig.DialogCoreConfig.DisplayLoader === null;
            }
            // endregion
            // region *** author default config values (if there is no user input) ***
            this.authorConfig.DialogCoreConfig.Width = 'auto';
            this.authorConfig.DialogCoreConfig.Height = 'auto';
            this.authorConfig.DialogCoreConfig.HideScrollbar = false;
            this.authorConfig.DialogCoreConfig.EscapeKeyClose = false;
            this.authorConfig.DialogCoreConfig.ButtonPosition = 'right';
            this.authorConfig.DialogCoreConfig.DisplayLoader = false;
            this.authorConfig.DialogCoreConfig.FullScreen = false;
            this.authorConfig.DialogCoreConfig.LayoutType = exports.DialogLayoutDisplay.NONE;
            this.authorConfig.DialogCoreConfig.LoaderComponent = DefaultLoaderComponent;
            this.authorConfig.DialogCoreConfig.AnimationIn = exports.AppearanceAnimation.ZOOM_IN;
            this.authorConfig.DialogCoreConfig.AnimationOut = exports.DisappearanceAnimation.ZOOM_OUT;
            this.authorConfig.DialogCoreConfig.CustomStyles = new DialogCustomStyles();
            // endregion
            dataControl.copyValuesFrom(this.authorConfig.DialogCoreConfig, this.productionConfig.DialogCoreConfig);
            dataControl.copyValuesFrom(userConfig.DialogCoreConfig, this.productionConfig.DialogCoreConfig);
            // Buttons
            /*if(userConfig.Buttons){
                    this.config.Buttons.push(
                        new ButtonMaker('Ok', 'ok', ButtonLayoutDisplay.PRIMARY)
                        ,new ButtonMaker('Cancel', 'cancel', ButtonLayoutDisplay.SECONDARY)
                    );
                }*/
        }
        return DialogConfigService;
    }());
    DialogConfigService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function DialogConfigService_Factory() { return new DialogConfigService(i0__namespace.ɵɵinject("dialogConfig")); }, token: DialogConfigService, providedIn: "root" });
    DialogConfigService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    DialogConfigService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: ['dialogConfig',] }] }
    ]; };

    var InsertionLoaderDirective = /** @class */ (function () {
        function InsertionLoaderDirective(viewContainerRef) {
            this.viewContainerRef = viewContainerRef;
        }
        return InsertionLoaderDirective;
    }());
    InsertionLoaderDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[appInsertionLoader]'
                },] }
    ];
    InsertionLoaderDirective.ctorParameters = function () { return [
        { type: i0.ViewContainerRef }
    ]; };

    var InsertionDirective = /** @class */ (function () {
        function InsertionDirective(viewContainerRef) {
            this.viewContainerRef = viewContainerRef;
        }
        return InsertionDirective;
    }());
    InsertionDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[appInsertion]'
                },] }
    ];
    InsertionDirective.ctorParameters = function () { return [
        { type: i0.ViewContainerRef }
    ]; };

    var DialogWrapperComponent = /** @class */ (function () {
        function DialogWrapperComponent(dialogBelonging, componentFactoryResolver, cd) {
            var _this = this;
            this.dialogBelonging = dialogBelonging;
            this.componentFactoryResolver = componentFactoryResolver;
            this.cd = cd;
            this.fadeInOutAnimation = 'open';
            this.showLoader = true;
            setTimeout(function () {
                _this.boxAnimation = _this.dialogBelonging.DialogCoreConfig.AnimationIn;
            }, 1);
        }
        DialogWrapperComponent.prototype.ngAfterViewInit = function () {
            this.hideScrollbar(); // hide scrollbar if config enabled
            this.loadChildComponent(this.childComponentType);
            this.loadLoaderComponent(this.dialogBelonging.DialogCoreConfig.LoaderComponent);
            this.setDefaultResponse();
            this.cd.detectChanges();
            this.setCustomStyles();
        };
        DialogWrapperComponent.prototype.hideScrollbar = function () {
            if (this.dialogBelonging.DialogCoreConfig.HideScrollbar) {
                this.bodyOverflow = document.body.style.overflow;
                document.body.style.overflow = 'hidden';
            }
        };
        DialogWrapperComponent.prototype.revertScrollbarSettings = function () {
            if (this.dialogBelonging.DialogCoreConfig.HideScrollbar) {
                document.body.style.overflow = this.bodyOverflow;
            }
        };
        DialogWrapperComponent.prototype.setDefaultResponse = function () {
            var dialogResponse = new DialogDefaultResponse();
            dialogResponse.setBelonging(this.dialogBelonging);
            this.dialogBelonging.EventsController.setDefaultResponse(dialogResponse);
        };
        DialogWrapperComponent.prototype.ngOnDestroy = function () {
            this.revertScrollbarSettings();
            if (this.childComponentRef) {
                this.childComponentRef.destroy();
            }
            if (this.loaderComponentRef) {
                this.loaderComponentRef.destroy();
            }
        };
        DialogWrapperComponent.prototype.hideScroller = function () { };
        DialogWrapperComponent.prototype.loadChildComponent = function (_ComponentType) {
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(_ComponentType);
            var viewContainerRef = this.insertionPoint.viewContainerRef;
            viewContainerRef.clear();
            this.childComponentRef = viewContainerRef.createComponent(componentFactory);
            this.childComponentRef.instance.dialogBelonging = this.dialogBelonging;
        };
        DialogWrapperComponent.prototype.loadLoaderComponent = function (_LoaderRef) {
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(_LoaderRef);
            var viewContainerRef = this.loaderInsertionPoint.viewContainerRef;
            viewContainerRef.clear();
            this.loaderComponentRef = viewContainerRef.createComponent(componentFactory);
        };
        DialogWrapperComponent.prototype.close = function () {
            this.dialogBelonging.EventsController.close();
        };
        DialogWrapperComponent.prototype.closeParent$ = function () {
            this.boxAnimation = this.dialogBelonging.DialogCoreConfig.AnimationOut;
            var closeDuration = this.dialogBelonging.DialogCoreConfig.AnimationOut ? 800 : 200;
            this.fadeInOutAnimation = 'close-fast';
            return new rxjs.Observable(function (observer) {
                observer.next('');
                observer.complete();
            }).pipe(operators.delay(closeDuration));
        };
        DialogWrapperComponent.prototype.onOverlayClicked = function (evt) {
            // console.log('onOverlayClicked');
        };
        DialogWrapperComponent.prototype.onCustomButton = function (_Button) {
            this.dialogBelonging.EventsController.onButtonClick(_Button);
        };
        DialogWrapperComponent.prototype.closeLoader = function () {
            this.showLoader = false;
        };
        DialogWrapperComponent.prototype.setCustomStyles = function () {
            var _this = this;
            if (this.dialogBelonging.DialogCoreConfig.CustomStyles.WrapperCSS && this.elDialogWrapper) {
                this.elDialogWrapper.nativeElement.style.cssText += this.dialogBelonging.DialogCoreConfig.CustomStyles.WrapperCSS;
            }
            if (this.dialogBelonging.DialogCoreConfig.CustomStyles.ButtonSectionCSS && this.elButtonWrapper) {
                this.elButtonWrapper.nativeElement.style.cssText +=
                    this.dialogBelonging.DialogCoreConfig.CustomStyles.ButtonSectionCSS;
            }
            if (this.dialogBelonging.DialogCoreConfig.CustomStyles.ButtonCSS && this.elButton) {
                this.elButton.forEach(function (el) {
                    el.nativeElement.style.cssText += _this.dialogBelonging.DialogCoreConfig.CustomStyles.ButtonCSS;
                });
            }
        };
        DialogWrapperComponent.prototype.keyEvent = function (event) {
            if (event.key === 'Escape') {
                this.close();
            }
        };
        return DialogWrapperComponent;
    }());
    DialogWrapperComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'dialog-popup-wrapper',
                    template: "<div\n  class=\"ngx-awesome-popup-overlay aw-dialog-modal\"\n  (dblclick)=\"onOverlayClicked($event)\"\n  [@fadeInOut]=\"{\n    value: fadeInOutAnimation,\n    params: {\n      closeDelay: dialogBelonging.DialogCoreConfig.AnimationOut === 0 ? '200ms' : '300ms'\n    }\n  }\"\n>\n  <div\n    class=\"evolve-parent-dialog\"\n    [@.disabled]=\"\n      dialogBelonging.DialogCoreConfig.AnimationIn === 0 && dialogBelonging.DialogCoreConfig.AnimationOut === 0\n    \"\n    [@boxAnimations]=\"boxAnimation\"\n    #elDialogWrapper\n    [ngStyle]=\"\n      dialogBelonging.DialogCoreConfig.FullScreen && {\n        maxWidth: '100%',\n        maxHeight: '100%',\n        height: '100%',\n        width: '100%',\n        borderRadius: '0'\n      }\n    \"\n    [ngClass]=\"{\n      'standard-dialog': dialogBelonging.DialogCoreConfig.LayoutType === 0,\n      'success-dialog': dialogBelonging.DialogCoreConfig.LayoutType === 1,\n      'info-dialog': dialogBelonging.DialogCoreConfig.LayoutType === 2,\n      'warning-dialog': dialogBelonging.DialogCoreConfig.LayoutType === 3,\n      'danger-dialog': dialogBelonging.DialogCoreConfig.LayoutType === 4\n    }\"\n  >\n    <div\n      class=\"loader-holder\"\n      [ngClass]=\"\n        !dialogBelonging.DialogCoreConfig.DisplayLoader\n          ? 'dialog-loader-off'\n          : showLoader\n          ? 'dialog-loader-active'\n          : 'dialog-loader-gone'\n      \"\n    >\n      <!--dialogBelonging.DialogCoreConfig.DisplayLoader => initial config-->\n      <div class=\"dialog-loader\">\n        <ng-template appInsertionLoader></ng-template>\n      </div>\n    </div>\n    <ng-container *ngIf=\"!dialogBelonging.DialogCoreConfig.FullScreen; else fullScreen\"></ng-container>\n    <ng-template #fullScreen></ng-template>\n    <div\n      class=\"content-holder\"\n      [ngStyle]=\"\n        dialogBelonging.DialogCoreConfig.FullScreen\n          ? {\n              width: '100%',\n              height: '100%'\n            }\n          : {\n              width: dialogBelonging.DialogCoreConfig.Width,\n              minWidth: dialogBelonging.DialogCoreConfig.MinWidth,\n              maxWidth: dialogBelonging.DialogCoreConfig.MaxWidth,\n              height: dialogBelonging.DialogCoreConfig.Height,\n              minHeight: dialogBelonging.DialogCoreConfig.MinHeight,\n              maxHeight: dialogBelonging.DialogCoreConfig.MaxHeight\n            }\n      \"\n    >\n      <!--      <div\n      class=\"content-holder\"\n      [ngStyle]=\"\n        dialogBelonging.DialogCoreConfig.FullScreen\n          ? {\n              width: dialogBelonging.DialogCoreConfig.Width,\n              minWidth: dialogBelonging.DialogCoreConfig.MinWidth,\n              maxWidth: dialogBelonging.DialogCoreConfig.MaxWidth,\n              height: dialogBelonging.DialogCoreConfig.Height,\n              minHeight: dialogBelonging.DialogCoreConfig.MinHeight,\n              maxHeight: dialogBelonging.DialogCoreConfig.MaxHeight\n            }\n          : {\n              width: '100vw',\n              height: '100vh'\n            }\n      \"\n    >-->\n      <!--dialogBelonging.DialogCoreConfig.DisplayLoader => initial config-->\n      <div\n        class=\"component-content\"\n        [ngClass]=\"\n          !dialogBelonging.DialogCoreConfig.DisplayLoader\n            ? 'component-content-loader-off'\n            : showLoader\n            ? 'component-content-preparing'\n            : 'component-content-ready'\n        \"\n      >\n        <ng-template appInsertion></ng-template>\n      </div>\n    </div>\n\n    <div class=\"button-holder\" #elButtonWrapper>\n      <div\n        class=\"button-section\"\n        *ngIf=\"dialogBelonging.Buttons.length > 0\"\n        [ngStyle]=\"{\n          'text-align': dialogBelonging.DialogCoreConfig.ButtonPosition\n        }\"\n      >\n        <button\n          class=\"ed-btn ed-btn-lg\"\n          #elButton\n          *ngFor=\"let button of dialogBelonging.Buttons\"\n          (click)=\"onCustomButton(button)\"\n          [ngClass]=\"{\n            '': button.LayoutType ? button.LayoutType === 0 : false,\n            'ed-btn-success': button.LayoutType ? button.LayoutType === 1 : false,\n            'ed-btn-info': button.LayoutType ? button.LayoutType === 2 : false,\n            'ed-btn-warning': button.LayoutType ? button.LayoutType === 3 : false,\n            'ed-btn-danger': button.LayoutType ? button.LayoutType === 4 : false,\n            'ed-btn-dark': button.LayoutType ? button.LayoutType === 5 : false,\n            'ed-btn-light': button.LayoutType ? button.LayoutType === 6 : false,\n            'ed-btn-primary': button.LayoutType ? button.LayoutType === 7 : false,\n            'ed-btn-secondary': button.LayoutType ? button.LayoutType === 8 : false,\n            'ed-btn-link': button.LayoutType ? button.LayoutType === 9 : false\n          }\"\n        >\n          {{ button.Label }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    // styleUrls: ['../../../styles/types/dialog-modal.scss'],
                    animations: [fadeInOut(), boxAnimations()]
                },] }
    ];
    DialogWrapperComponent.ctorParameters = function () { return [
        { type: DialogBelonging, decorators: [{ type: i0.Inject, args: ['dialogBelonging',] }] },
        { type: i0.ComponentFactoryResolver },
        { type: i0.ChangeDetectorRef }
    ]; };
    DialogWrapperComponent.propDecorators = {
        elDialogWrapper: [{ type: i0.ViewChild, args: ['elDialogWrapper',] }],
        elButtonWrapper: [{ type: i0.ViewChild, args: ['elButtonWrapper',] }],
        elButton: [{ type: i0.ViewChildren, args: ['elButton',] }],
        insertionPoint: [{ type: i0.ViewChild, args: [InsertionDirective, { static: true },] }],
        loaderInsertionPoint: [{ type: i0.ViewChild, args: [InsertionLoaderDirective, { static: true },] }],
        keyEvent: [{ type: i0.HostListener, args: ['window:keyup', ['$event'],] }]
    };

    var DialogService = /** @class */ (function () {
        function DialogService(componentFactoryResolver, injector, appRef) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.injector = injector;
            this.appRef = appRef;
            this.dialogParentComponentRefList = [];
        }
        DialogService.prototype.open = function (_ComponentType, _DialogBelonging) {
            var dialogController = _DialogBelonging.EventsController;
            var componentRef = this.getComponentRef(dialogController, _DialogBelonging);
            this.dialogParentComponentRefList.push(componentRef);
            componentRef.instance.dialogBelonging = _DialogBelonging;
            componentRef.instance.childComponentType = _ComponentType;
            this.appendToBodyParentComponent(componentRef);
            this.listeners(dialogController);
            return dialogController;
        };
        DialogService.prototype.getComponentRef = function (_EventsController, _DialogBelonging) {
            var componentFactory;
            var dialogIndex = this.findDialogIndex(_DialogBelonging.EntityUniqueID);
            if (dialogIndex === -1) {
                var weakMap = new WeakMap();
                weakMap.set(DialogEventsController, _EventsController);
                componentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogWrapperComponent);
                return componentFactory.create(new DialogInjector(this.injector, weakMap));
            }
            return null;
        };
        DialogService.prototype.listeners = function (_EventsController) {
            var _this = this;
            // Listener for closing dialog
            var closeDialogSubscription = _EventsController.afterClosed$.subscribe(function (response) {
                var modalIndex = _this.findDialogIndex(response.DialogBelonging.EntityUniqueID);
                _this.removeFromBodyDialogWrapperComponent(modalIndex);
                closeDialogSubscription.unsubscribe();
            });
            // Listener for turning off loader
            var closeLoaderSubscription = _EventsController.afterLoader$.subscribe(function (_DialogUniqueID) {
                if (_DialogUniqueID) {
                    var modalIndex = _this.findDialogIndex(_DialogUniqueID);
                    if (modalIndex !== -1) {
                        _this.dialogParentComponentRefList[modalIndex].instance.closeLoader();
                    }
                }
                closeLoaderSubscription.unsubscribe();
            });
        };
        DialogService.prototype.childComponentResolver = function () { };
        DialogService.prototype.appendToBodyParentComponent = function (_ComponentRef) {
            // attach view to ignite lifecycle hooks
            this.appRef.attachView(_ComponentRef.hostView);
            // DOM
            var domElem = _ComponentRef.hostView.rootNodes[0];
            document.body.appendChild(domElem);
        };
        DialogService.prototype.closeDialogWrapperComponent = function (_DialogUniqueID) {
            var modalIndex = this.findDialogIndex(_DialogUniqueID);
            this.removeFromBodyDialogWrapperComponent(modalIndex);
        };
        DialogService.prototype.removeFromBodyDialogWrapperComponent = function (_DialogIndex) {
            var _this = this;
            if (_DialogIndex > -1) {
                this.dialogParentComponentRefList[_DialogIndex].instance
                    .closeParent$()
                    .pipe(operators.tap(function (item) {
                    _this.appRef.detachView(_this.dialogParentComponentRefList[_DialogIndex].hostView);
                    _this.dialogParentComponentRefList[_DialogIndex].destroy();
                    _this.dialogParentComponentRefList.splice(_DialogIndex, 1);
                }), operators.take(1))
                    .subscribe();
            }
        };
        DialogService.prototype.findDialogIndex = function (_DialogUniqueID) {
            return this.dialogParentComponentRefList.findIndex(function (item) {
                return _DialogUniqueID === item.instance.dialogBelonging.EntityUniqueID;
            });
        };
        return DialogService;
    }());
    DialogService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function DialogService_Factory() { return new DialogService(i0__namespace.ɵɵinject(i0__namespace.ComponentFactoryResolver), i0__namespace.ɵɵinject(i0__namespace.INJECTOR), i0__namespace.ɵɵinject(i0__namespace.ApplicationRef)); }, token: DialogService, providedIn: "root" });
    DialogService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    DialogService.ctorParameters = function () { return [
        { type: i0.ComponentFactoryResolver },
        { type: i0.Injector },
        { type: i0.ApplicationRef }
    ]; };

    // region *** Public ***
    var DialogInitializer = /** @class */ (function () {
        function DialogInitializer(component) {
            this.component = component;
            this.dialogCarrier = new DialogCarrier();
            this.dialogCarrier.setComponent(this.component);
        }
        /** Generic method accept expected payload from dynamic child component.*/
        DialogInitializer.prototype.openDialog$ = function () {
            return this.dialogCarrier.openDialog$().pipe(operators.map(function (resp) {
                var basicDialogResponse = new DialogResponse();
                var dataControl = new DataControl();
                dataControl.copyValuesFrom(resp, basicDialogResponse);
                return basicDialogResponse;
            }), operators.take(1));
        };
        /** It accepts list of custom buttons */
        DialogInitializer.prototype.setButtons = function (_Buttons) {
            this.dialogCarrier.setButtons(_Buttons);
        };
        DialogInitializer.prototype.setCustomData = function (_CustomData) {
            this.dialogCarrier.setCustomData(_CustomData);
        };
        DialogInitializer.prototype.setConfig = function (_DialogConfig) {
            this.dialogCarrier.setConfig(_DialogConfig);
        };
        return DialogInitializer;
    }());
    var DialogResponse = /** @class */ (function (_super) {
        __extends(DialogResponse, _super);
        function DialogResponse() {
            var _this = _super.call(this) || this;
            // private Response: DialogPrepareResponse            = new DialogPrepareResponse();
            _this.Payload = null;
            _this.Success = null;
            _this.ClickedButtonID = null;
            return _this;
        }
        /**
         * @ignore
         */
        DialogResponse.prototype.setPayload = function (_Payload) {
            this.Payload = _Payload;
        };
        /**
         * @ignore
         */
        DialogResponse.prototype.setClickedButtonID = function (_ClickedButtonID) {
            this.ClickedButtonID = _ClickedButtonID;
        };
        return DialogResponse;
    }(DataControl));
    var DialogEventsController = /** @class */ (function () {
        function DialogEventsController(EntityUniqueID) {
            this.EntityUniqueID = EntityUniqueID;
            this._afterClosed = new rxjs.Subject();
            this._afterLoader = new rxjs.Subject();
            this._onButtonClick = new rxjs.Subject();
            this._buttonList = new rxjs.Subject();
            this.onButtonClick$ = this._onButtonClick.asObservable();
            this.afterClosed$ = this._afterClosed.asObservable();
            this.afterLoader$ = this._afterLoader.asObservable();
            this.buttonList$ = this._buttonList.asObservable();
        }
        DialogEventsController.prototype.close = function (_Payload) {
            if (_Payload === void 0) { _Payload = null; }
            this.defaultResponse.setPayload(_Payload);
            this._afterClosed.next(this.defaultResponse);
        };
        DialogEventsController.prototype.onButtonClick = function (_Button) {
            this.defaultResponse.setClickedButtonID(_Button.ID);
            this._onButtonClick.next(_Button);
        };
        DialogEventsController.prototype.setButtonList = function (_ButtonList) {
            this._buttonList.next(_ButtonList);
        };
        DialogEventsController.prototype.closeLoader = function () {
            var _this = this;
            setTimeout(function () {
                _this._afterLoader.next(_this.EntityUniqueID);
            }, 0);
        };
        DialogEventsController.prototype.setDefaultResponse = function (_Response) {
            this.defaultResponse = _Response;
        };
        return DialogEventsController;
    }());
    // endregion
    var DialogDefaultResponse = /** @class */ (function (_super) {
        __extends(DialogDefaultResponse, _super);
        function DialogDefaultResponse() {
            var _this = _super.call(this) || this;
            _this.DialogBelonging = null;
            return _this;
        }
        DialogDefaultResponse.prototype.setBelonging = function (_DialogBelonging) {
            this.DialogBelonging = _DialogBelonging;
        };
        return DialogDefaultResponse;
    }(DialogResponse));
    var DialogCarrier = /** @class */ (function () {
        function DialogCarrier() {
            this.dialogBelonging = new DialogBelonging();
        }
        DialogCarrier.prototype.setComponent = function (_Component) {
            this.component = _Component;
        };
        DialogCarrier.prototype.setButtons = function (_Buttons) {
            if (_Buttons.length) {
                this.dialogBelonging.Buttons = _Buttons;
            }
        };
        DialogCarrier.prototype.setCustomData = function (_CustomData) {
            this.dialogBelonging.CustomData = _CustomData;
        };
        DialogCarrier.prototype.setConfig = function (_DialogConfig) {
            // region *** local UserConfig (defined on place where dialog is called) ***
            var dataControl = new DataControl();
            dataControl.copyValuesFrom(_DialogConfig, this.dialogBelonging.DialogCoreConfig);
            if (_DialogConfig === null || _DialogConfig === void 0 ? void 0 : _DialogConfig.LoaderComponent) {
                this.dialogBelonging.DialogCoreConfig.DisplayLoader = true;
            }
            // endregion
        };
        DialogCarrier.prototype.openDialog$ = function () {
            var service = ServiceLocator.injector.get(DialogService);
            var dialogController = service.open(this.component, this.dialogBelonging);
            return dialogController.afterClosed$;
        };
        return DialogCarrier;
    }());
    var DialogCustomStyles = /** @class */ (function () {
        function DialogCustomStyles() {
            this.ButtonSectionCSS = null;
            this.ButtonCSS = null;
            this.WrapperCSS = null;
        }
        return DialogCustomStyles;
    }());
    var DialogCoreConfig = /** @class */ (function (_super) {
        __extends(DialogCoreConfig, _super);
        function DialogCoreConfig() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments))) || this;
            _this.EscapeKeyClose = null;
            _this.HideScrollbar = null;
            _this.ButtonPosition = null;
            _this.LayoutType = null;
            _this.DisplayLoader = null;
            _this.LoaderComponent = null;
            _this.AnimationIn = null;
            _this.AnimationOut = null;
            _this.CustomStyles = new DialogCustomStyles();
            return _this;
        }
        return DialogCoreConfig;
    }(Sizes));
    var DialogSettings = /** @class */ (function () {
        function DialogSettings() {
            this.Buttons = [];
            this.DialogCoreConfig = new DialogCoreConfig();
        }
        return DialogSettings;
    }());
    var DialogBelonging = /** @class */ (function (_super) {
        __extends(DialogBelonging, _super);
        function DialogBelonging() {
            var _this = _super.call(this) || this;
            /** @internal */
            _this.EntityUniqueID = 'D' + Math.random().toString(36).substr(2, 9);
            _this.CustomData = null;
            _this.EventsController = new DialogEventsController(_this.EntityUniqueID);
            var dialogConfigurator = ServiceLocator.injector.get(DialogConfigService);
            var baseSettings = new DialogSettings();
            var dataControl = new DataControl();
            dataControl.copyValuesFrom(dialogConfigurator.productionConfig.DialogCoreConfig, baseSettings.DialogCoreConfig);
            _this.DialogCoreConfig = baseSettings.DialogCoreConfig;
            _this.Buttons = dialogConfigurator.productionConfig.Buttons.slice();
            return _this;
        }
        return DialogBelonging;
    }(DialogSettings));

    exports.ToastProgressBarEnum = void 0;
    (function (ToastProgressBarEnum) {
        ToastProgressBarEnum[ToastProgressBarEnum["NONE"] = 0] = "NONE";
        ToastProgressBarEnum[ToastProgressBarEnum["INCREASE"] = 1] = "INCREASE";
        ToastProgressBarEnum[ToastProgressBarEnum["DECREASE"] = 2] = "DECREASE";
    })(exports.ToastProgressBarEnum || (exports.ToastProgressBarEnum = {}));
    exports.ToastPositionEnum = void 0;
    (function (ToastPositionEnum) {
        ToastPositionEnum["TOP_LEFT"] = "top-left";
        ToastPositionEnum["TOP_CENTER"] = "top-center";
        ToastPositionEnum["TOP_RIGHT"] = "top-right";
        ToastPositionEnum["TOP_FULL_WIDTH"] = "top-fullwidth";
        ToastPositionEnum["BOTTOM_LEFT"] = "bottom-left";
        ToastPositionEnum["BOTTOM_CENTER"] = "bottom-center";
        ToastPositionEnum["BOTTOM_RIGHT"] = "bottom-right";
        ToastPositionEnum["BOTTOM_FULL_WIDTH"] = "bottom-fullwidth";
    })(exports.ToastPositionEnum || (exports.ToastPositionEnum = {}));
    exports.ToastUserViewTypeEnum = void 0;
    (function (ToastUserViewTypeEnum) {
        ToastUserViewTypeEnum["SIMPLE"] = "simple";
        ToastUserViewTypeEnum["STANDARD"] = "standard";
    })(exports.ToastUserViewTypeEnum || (exports.ToastUserViewTypeEnum = {}));

    var ToastNotificationConfigService = /** @class */ (function () {
        function ToastNotificationConfigService(userConfig) {
            if (userConfig === void 0) { userConfig = {}; }
            this.userConfig = userConfig;
            this.dataControl = new DataControl();
            this.authorConfig = new ToastSettings();
            this.productionConfig = new ToastSettings();
            // region *** toastNotification userConfig (user input app-module) ***
            var userConfigBase = new ToastSettings();
            this.dataControl.copyValuesFrom(userConfig.ToastCoreConfig, userConfigBase.ToastCoreConfig); // this will make sure that object has right properties
            userConfig.ToastCoreConfig = userConfigBase.ToastCoreConfig;
            // endregion
            // region *** author default config values (if there is no user input) ***
            this.authorConfig.ToastCoreConfig.ButtonPosition = 'right';
            this.authorConfig.ToastCoreConfig.TextPosition = 'left';
            this.authorConfig.ToastCoreConfig.ToastPosition = exports.ToastPositionEnum.TOP_RIGHT;
            this.authorConfig.ToastCoreConfig.ProgressBar = exports.ToastProgressBarEnum.INCREASE;
            this.authorConfig.ToastCoreConfig.ToastUserViewType = exports.ToastUserViewTypeEnum.SIMPLE;
            this.authorConfig.ToastCoreConfig.AutoCloseDelay = 2500;
            this.authorConfig.ToastCoreConfig.DisableIcon = false;
            this.authorConfig.ToastCoreConfig.AllowHTMLMessage = true;
            this.authorConfig.ToastCoreConfig.LayoutType = exports.DialogLayoutDisplay.NONE;
            this.authorConfig.GlobalSettings.AllowedNotificationsAtOnce = 5;
            this.authorConfig.ToastCoreConfig.AnimationIn = exports.AppearanceAnimation.ZOOM_IN;
            this.authorConfig.ToastCoreConfig.AnimationOut = exports.DisappearanceAnimation.ZOOM_OUT;
            this.authorConfig.ToastCoreConfig.CustomStyles = new ToastCustomStyles();
            // endregion
            // region *** Production setup ***
            this.setResetGlobalToastConfig();
            this.dataControl.copyValuesFrom(this.authorConfig.ToastCoreConfig, this.productionConfig.ToastCoreConfig);
            this.dataControl.copyValuesFrom(this.userConfig.ToastCoreConfig, this.productionConfig.ToastCoreConfig);
            // endregion
        }
        ToastNotificationConfigService.prototype.setResetGlobalToastConfig = function (globalToastConfig) {
            this.dataControl.copyValuesFrom(this.authorConfig.GlobalSettings, this.productionConfig.GlobalSettings);
            this.dataControl.copyValuesFrom(globalToastConfig ? globalToastConfig : this.userConfig.GlobalSettings, this.productionConfig.GlobalSettings);
        };
        return ToastNotificationConfigService;
    }());
    ToastNotificationConfigService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function ToastNotificationConfigService_Factory() { return new ToastNotificationConfigService(i0__namespace.ɵɵinject("toastNotificationConfig")); }, token: ToastNotificationConfigService, providedIn: "root" });
    ToastNotificationConfigService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    ToastNotificationConfigService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: ['toastNotificationConfig',] }] }
    ]; };

    var WrapperAbstraction = /** @class */ (function () {
        function WrapperAbstraction(toastNotificationBelonging) {
            var _this = this;
            this.toastNotificationBelonging = toastNotificationBelonging;
            this.closeIsClicked = false;
            this.autoClosingHasStarted = false;
            this.fadeInOutAnimation = 'open';
            this.timerStarted$ = new rxjs.BehaviorSubject('start-counter');
            this.isTimerStarted = false;
            this.timer = new Timer();
            setTimeout(function () {
                _this.boxAnimation = _this.toastNotificationBelonging.ToastCoreConfig.AnimationIn;
            }, 1);
        }
        Object.defineProperty(WrapperAbstraction.prototype, "autoCloseCondition", {
            get: function () {
                return (this.toastNotificationBelonging.ToastCoreConfig.AutoCloseDelay &&
                    !(this.toastNotificationBelonging.Buttons.length ||
                        this.toastNotificationBelonging.ToastCoreConfig.DeclineLabel ||
                        this.toastNotificationBelonging.ToastCoreConfig.ConfirmLabel));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(WrapperAbstraction.prototype, "buttonsExist", {
            get: function () {
                return (!!this.toastNotificationBelonging.Buttons.length ||
                    !!this.toastNotificationBelonging.ToastCoreConfig.DeclineLabel ||
                    !!this.toastNotificationBelonging.ToastCoreConfig.ConfirmLabel);
            },
            enumerable: false,
            configurable: true
        });
        WrapperAbstraction.prototype.setCustomStyles = function () {
            var _this = this;
            if (this.toastNotificationBelonging.ToastCoreConfig.CustomStyles.TextCSS && this.elTextWrapper) {
                this.elTextWrapper.nativeElement.style.cssText +=
                    this.toastNotificationBelonging.ToastCoreConfig.CustomStyles.TextCSS;
            }
            if (this.toastNotificationBelonging.ToastCoreConfig.CustomStyles.TitleCSS && this.elTitleWrapper) {
                this.elTitleWrapper.nativeElement.style.cssText +=
                    this.toastNotificationBelonging.ToastCoreConfig.CustomStyles.TitleCSS;
            }
            if (this.toastNotificationBelonging.ToastCoreConfig.CustomStyles.ButtonSectionCSS && this.elButtonWrapper) {
                this.elButtonWrapper.nativeElement.style.cssText +=
                    this.toastNotificationBelonging.ToastCoreConfig.CustomStyles.ButtonSectionCSS;
            }
            if (this.toastNotificationBelonging.ToastCoreConfig.CustomStyles.ButtonCSS && this.elButton) {
                this.elButton.forEach(function (el) {
                    el.nativeElement.style.cssText += _this.toastNotificationBelonging.ToastCoreConfig.CustomStyles.ButtonCSS;
                });
            }
        };
        WrapperAbstraction.prototype.mouseOver = function () {
            var _a;
            if (!this.buttonsExist && !this.closeIsClicked && !this.autoClosingHasStarted) {
                this.timerStarted$.next('stop-counter');
                this.fadeInOutAnimation = 'open';
                (_a = this.subsToClosingDelay) === null || _a === void 0 ? void 0 : _a.unsubscribe();
                this.boxAnimation = 'reset';
            }
        };
        WrapperAbstraction.prototype.mouseOut = function () {
            if (!this.buttonsExist && !this.closeIsClicked && !this.autoClosingHasStarted) {
                this.timerStarted$.next('start-counter');
            }
        };
        WrapperAbstraction.prototype.onOverlayClicked = function (evt) {
            //  console.log('onOverlayClicked');
        };
        WrapperAbstraction.prototype.onToastClicked = function (evt) {
            // console.log('onOverlayClicked');
        };
        WrapperAbstraction.prototype.setResponse = function (_IsSuccess, _ClickedButtonID) {
            var response = new ToastNotificationDefaultResponse();
            if (_ClickedButtonID) {
                response.ClickedButtonID = _ClickedButtonID;
            }
            response.setSuccess(_IsSuccess);
            response.setBelonging(this.toastNotificationBelonging);
            this.toastNotificationBelonging.EventsController.setDefaultResponse(response);
        };
        WrapperAbstraction.prototype.onCustomButton = function (_Button) {
            this.toastNotificationBelonging.EventsController.onButtonClick(_Button);
            this.setResponse(true, _Button.ID);
            this.toastNotificationBelonging.EventsController.close();
        };
        WrapperAbstraction.prototype.onButtonClick = function (_Type) {
            var buttonID;
            if (_Type === 'confirm') {
                buttonID = this.toastNotificationBelonging.ToastCoreConfig.ConfirmLabel.toLowerCase();
            }
            else if (_Type === 'decline') {
                buttonID = this.toastNotificationBelonging.ToastCoreConfig.DeclineLabel.toLowerCase();
            }
            this.setResponse(_Type === 'confirm', buttonID);
            this.toastNotificationBelonging.EventsController.close();
        };
        WrapperAbstraction.prototype.autoClose = function () {
            var _this = this;
            if (this.autoCloseCondition) {
                this.timer.setMilliseconds(this.toastNotificationBelonging.ToastCoreConfig.AutoCloseDelay);
                this.subTimer = this.timerStarted$
                    .pipe(operators.tap(function (next) {
                    if ('start-counter' === next) {
                        _this.timer.start();
                        _this.isTimerStarted = true;
                        _this.timeout = setTimeout(function () {
                            _this.subsToClosingDelay = _this.closeParent$().subscribe(function (resp) {
                                _this.toastNotificationBelonging.EventsController.close();
                            });
                        }, _this.toastNotificationBelonging.ToastCoreConfig.AutoCloseDelay);
                    }
                    else if ('stop-counter' === next) {
                        if (_this.isTimerStarted) {
                            _this.timer.stop();
                            clearTimeout(_this.timeout);
                            _this.isTimerStarted = false;
                        }
                    }
                }))
                    .subscribe();
            }
        };
        WrapperAbstraction.prototype.closeParent$ = function () {
            this.autoClosingHasStarted = true;
            this.boxAnimation = this.toastNotificationBelonging.ToastCoreConfig.AnimationOut;
            var closeDuration = this.toastNotificationBelonging.ToastCoreConfig.AnimationOut ? 400 : 200;
            this.fadeInOutAnimation = 'close-fast';
            return rxjs.of('').pipe(operators.delay(closeDuration));
        };
        WrapperAbstraction.prototype.close = function () {
            this.toastNotificationBelonging.EventsController.close();
        };
        WrapperAbstraction.prototype.closeIcon = function () {
            var _this = this;
            var _a;
            this.closeIsClicked = true;
            (_a = this.subsToClosingDelay) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            this.closeParent$()
                .pipe(operators.take(1))
                .subscribe(function (resp) {
                _this.toastNotificationBelonging.EventsController.close();
            });
        };
        WrapperAbstraction.prototype.ngOnDestroy = function () {
            var _a, _b;
            (_a = this.subsToClosingDelay) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            (_b = this.subTimer) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        };
        return WrapperAbstraction;
    }());
    WrapperAbstraction.decorators = [
        { type: i0.Directive }
    ];
    WrapperAbstraction.ctorParameters = function () { return [
        { type: ToastNotificationBelonging }
    ]; };
    WrapperAbstraction.propDecorators = {
        elTextWrapper: [{ type: i0.ViewChild, args: ['elTextWrapper',] }],
        elTitleWrapper: [{ type: i0.ViewChild, args: ['elTitleWrapper',] }],
        elButtonWrapper: [{ type: i0.ViewChild, args: ['elButtonWrapper',] }],
        elButton: [{ type: i0.ViewChildren, args: ['elButton',] }]
    };

    var ToastNotificationSimpleWrapperComponent = /** @class */ (function (_super) {
        __extends(ToastNotificationSimpleWrapperComponent, _super);
        function ToastNotificationSimpleWrapperComponent(toastNotificationBelonging, gConfig, cd) {
            var _this = _super.call(this, toastNotificationBelonging) || this;
            _this.toastNotificationBelonging = toastNotificationBelonging;
            _this.gConfig = gConfig;
            _this.cd = cd;
            return _this;
        }
        ToastNotificationSimpleWrapperComponent.prototype.ngAfterViewInit = function () {
            this.setResponse(false);
            this.cd.detectChanges();
            this.autoClose();
            this.setCustomStyles();
        };
        return ToastNotificationSimpleWrapperComponent;
    }(WrapperAbstraction));
    ToastNotificationSimpleWrapperComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'app-toast-notification-simple-wrapper',
                    template: "<div\n  class=\"toast-wrapper simple-toast\"\n  (dblclick)=\"onOverlayClicked($event)\"\n  [@fadeInOut]=\"{\n    value: fadeInOutAnimation,\n    params: {\n      closeDelay: toastNotificationBelonging.ToastCoreConfig.AnimationOut === 0 ? '200ms' : '300ms'\n    }\n  }\"\n>\n  <div\n    class=\"evolve-toast\"\n    [@.disabled]=\"\n      toastNotificationBelonging.ToastCoreConfig.AnimationIn === 0 &&\n      toastNotificationBelonging.ToastCoreConfig.AnimationOut === 0\n    \"\n    [@boxAnimations]=\"boxAnimation\"\n    (mouseover)=\"mouseOver()\"\n    (mouseout)=\"mouseOut()\"\n    (click)=\"onToastClicked($event)\"\n    [ngClass]=\"{\n      'standard-dialog': 0 === toastNotificationBelonging.ToastCoreConfig.LayoutType,\n      'success-dialog': 1 === toastNotificationBelonging.ToastCoreConfig.LayoutType,\n      'info-dialog': 2 === toastNotificationBelonging.ToastCoreConfig.LayoutType,\n      'warning-dialog': 3 === toastNotificationBelonging.ToastCoreConfig.LayoutType,\n      'danger-dialog': 4 === toastNotificationBelonging.ToastCoreConfig.LayoutType\n    }\"\n  >\n    <div class=\"toast-title-content\" #elTitleWrapper *ngIf=\"toastNotificationBelonging.Dispatch.Title\">\n      <div class=\"icon-section\" *ngIf=\"!toastNotificationBelonging.ToastCoreConfig.DisableIcon\">\n        <span\n          class=\"icon-type-toast\"\n          [ngClass]=\"{\n            '': toastNotificationBelonging.ToastCoreConfig.LayoutType === 0,\n            'ap-icon-success icon-check-circle': toastNotificationBelonging.ToastCoreConfig.LayoutType === 1,\n            'ap-icon-info icon-info-circle': toastNotificationBelonging.ToastCoreConfig.LayoutType === 2,\n            'ap-icon-warning icon-warning': toastNotificationBelonging.ToastCoreConfig.LayoutType === 3,\n            'ap-icon-danger icon-times-circle': toastNotificationBelonging.ToastCoreConfig.LayoutType === 4\n          }\"\n        ></span>\n      </div>\n      <div class=\"dont-break-out\">\n        <div class=\"text-wrapper dont-break-out\">\n          {{ toastNotificationBelonging.Dispatch.Title }}\n          <span class=\"close-ico icon-times-circle\" (click)=\"closeIcon()\" *ngIf=\"!buttonsExist\"></span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"content-holder toast-text\" #elTextWrapper *ngIf=\"toastNotificationBelonging.Dispatch.Message\">\n      <div\n        class=\"text-wrapper-section toast-inner-content\"\n        [ngStyle]=\"{\n          'text-align': toastNotificationBelonging.ToastCoreConfig.TextPosition\n        }\"\n        [ngClass]=\"{\n          'only-message': !toastNotificationBelonging.Dispatch.Title\n        }\"\n      >\n        <div class=\"dont-break-out\">\n          <div class=\"text-wrapper dont-break-out\" *ngIf=\"!toastNotificationBelonging.ToastCoreConfig.AllowHTMLMessage\">\n            <p>{{ toastNotificationBelonging.Dispatch.Message }}</p>\n          </div>\n          <div\n            class=\"text-wrapper\"\n            *ngIf=\"toastNotificationBelonging.ToastCoreConfig.AllowHTMLMessage\"\n            [innerHTML]=\"toastNotificationBelonging.Dispatch.Message\"\n          ></div>\n        </div>\n      </div>\n      <span\n        class=\"close-ico icon-times-circle\"\n        (click)=\"closeIcon()\"\n        *ngIf=\"buttonsExist && !toastNotificationBelonging.Dispatch.Title\"\n      ></span>\n    </div>\n\n    <div class=\"button-holder\" #elButtonWrapper>\n      <div\n        class=\"button-section\"\n        *ngIf=\"toastNotificationBelonging.Buttons.length\"\n        [ngStyle]=\"{\n          'text-align': toastNotificationBelonging.ToastCoreConfig.ButtonPosition\n        }\"\n      >\n        <button\n          class=\"ed-btn ed-btn-sm\"\n          #elButton\n          *ngFor=\"let button of toastNotificationBelonging.Buttons\"\n          (click)=\"onCustomButton(button)\"\n          [ngClass]=\"{\n            '': button.LayoutType ? button.LayoutType === 0 : false,\n            'ed-btn-success': button.LayoutType ? button.LayoutType === 1 : false,\n            'ed-btn-info': button.LayoutType ? button.LayoutType === 2 : false,\n            'ed-btn-warning': button.LayoutType ? button.LayoutType === 3 : false,\n            'ed-btn-danger': button.LayoutType ? button.LayoutType === 4 : false,\n            'ed-btn-dark': button.LayoutType ? button.LayoutType === 5 : false,\n            'ed-btn-light': button.LayoutType ? button.LayoutType === 6 : false,\n            'ed-btn-primary': button.LayoutType ? button.LayoutType === 7 : false,\n            'ed-btn-secondary': button.LayoutType ? button.LayoutType === 8 : false,\n            'ed-btn-link': button.LayoutType ? button.LayoutType === 9 : false\n          }\"\n        >\n          {{ button.Label }}\n        </button>\n      </div>\n\n      <div\n        class=\"button-section\"\n        [ngStyle]=\"{\n          'text-align': toastNotificationBelonging.ToastCoreConfig.ButtonPosition\n        }\"\n        *ngIf=\"\n          !toastNotificationBelonging.Buttons.length &&\n          (toastNotificationBelonging.ToastCoreConfig.DeclineLabel ||\n            toastNotificationBelonging.ToastCoreConfig.ConfirmLabel)\n        \"\n      >\n        <button\n          class=\"ed-btn ed-btn-sm\"\n          *ngIf=\"toastNotificationBelonging.ToastCoreConfig.ConfirmLabel\"\n          (click)=\"onButtonClick('confirm')\"\n          [ngClass]=\"{\n            'ed-btn-primary': toastNotificationBelonging.ToastCoreConfig.LayoutType === 0,\n            'ed-btn-success': toastNotificationBelonging.ToastCoreConfig.LayoutType === 1,\n            'ed-btn-info': toastNotificationBelonging.ToastCoreConfig.LayoutType === 2,\n            'ed-btn-warning': toastNotificationBelonging.ToastCoreConfig.LayoutType === 3,\n            'ed-btn-danger': toastNotificationBelonging.ToastCoreConfig.LayoutType === 4\n          }\"\n        >\n          {{ toastNotificationBelonging.ToastCoreConfig.ConfirmLabel }}\n        </button>\n        <button\n          class=\"ed-btn ed-btn-sm ed-btn-secondary\"\n          (click)=\"onButtonClick('decline')\"\n          *ngIf=\"toastNotificationBelonging.ToastCoreConfig.DeclineLabel\"\n        >\n          {{ toastNotificationBelonging.ToastCoreConfig.DeclineLabel }}\n        </button>\n      </div>\n    </div>\n\n    <div\n      class=\"progress-bar-container\"\n      *ngIf=\"!buttonsExist && toastNotificationBelonging.ToastCoreConfig.ProgressBar !== 0\"\n    >\n      <div\n        class=\"progress-bar\"\n        [ngStyle]=\"{\n          width: (toastNotificationBelonging.ToastCoreConfig.ProgressBar === 1 ? timer.Progress : timer.Remaining) + '%'\n        }\"\n      ></div>\n    </div>\n  </div>\n</div>\n",
                    // styleUrls: ['../../../styles/types/toast-simple.scss'],
                    animations: [fadeInOut(), boxAnimations()]
                },] }
    ];
    ToastNotificationSimpleWrapperComponent.ctorParameters = function () { return [
        { type: ToastNotificationBelonging, decorators: [{ type: i0.Inject, args: ['toastNotificationBelonging',] }] },
        { type: GlobalConfigService },
        { type: i0.ChangeDetectorRef }
    ]; };

    var ToastNotificationWrapperComponent = /** @class */ (function (_super) {
        __extends(ToastNotificationWrapperComponent, _super);
        function ToastNotificationWrapperComponent(toastNotificationBelonging, gConfig, cd) {
            var _this = _super.call(this, toastNotificationBelonging) || this;
            _this.toastNotificationBelonging = toastNotificationBelonging;
            _this.gConfig = gConfig;
            _this.cd = cd;
            return _this;
        }
        ToastNotificationWrapperComponent.prototype.ngAfterViewInit = function () {
            this.setResponse(false);
            this.cd.detectChanges();
            this.autoClose();
            this.setCustomStyles();
        };
        return ToastNotificationWrapperComponent;
    }(WrapperAbstraction));
    ToastNotificationWrapperComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'app-toast-notification-wrapper',
                    template: "<div\n  class=\"toast-wrapper standard-toast\"\n  (dblclick)=\"onOverlayClicked($event)\"\n  [@fadeInOut]=\"{\n    value: fadeInOutAnimation,\n    params: {\n      closeDelay: toastNotificationBelonging.ToastCoreConfig.AnimationOut === 0 ? '200ms' : '300ms'\n    }\n  }\"\n>\n  <div\n    class=\"evolve-toast\"\n    [@.disabled]=\"\n      toastNotificationBelonging.ToastCoreConfig.AnimationIn === 0 &&\n      toastNotificationBelonging.ToastCoreConfig.AnimationOut === 0\n    \"\n    [@boxAnimations]=\"boxAnimation\"\n    (mouseover)=\"mouseOver()\"\n    (mouseout)=\"mouseOut()\"\n    (click)=\"onToastClicked($event)\"\n    [ngClass]=\"{\n      'standard-dialog': 0 === toastNotificationBelonging.ToastCoreConfig.LayoutType,\n      'success-dialog': 1 === toastNotificationBelonging.ToastCoreConfig.LayoutType,\n      'info-dialog': 2 === toastNotificationBelonging.ToastCoreConfig.LayoutType,\n      'warning-dialog': 3 === toastNotificationBelonging.ToastCoreConfig.LayoutType,\n      'danger-dialog': 4 === toastNotificationBelonging.ToastCoreConfig.LayoutType\n    }\"\n  >\n    <div class=\"toast-title-content\" #elTitleWrapper *ngIf=\"toastNotificationBelonging.Dispatch.Title\">\n      <div class=\"dont-break-out\">\n        <div class=\"text-wrapper dont-break-out\">\n          {{ toastNotificationBelonging.Dispatch.Title }}\n          <span class=\"close-ico icon-times-circle\" (click)=\"closeIcon()\" *ngIf=\"!buttonsExist\"></span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"content-holder toast-text\" #elTextWrapper *ngIf=\"toastNotificationBelonging.Dispatch.Message\">\n      <div class=\"icon-section\" *ngIf=\"!toastNotificationBelonging.ToastCoreConfig.DisableIcon\">\n        <span\n          class=\"icon-type-toast\"\n          [ngClass]=\"{\n            '': toastNotificationBelonging.ToastCoreConfig.LayoutType === 0,\n            'ap-icon-success icon-check-circle': toastNotificationBelonging.ToastCoreConfig.LayoutType === 1,\n            'ap-icon-info icon-info-circle': toastNotificationBelonging.ToastCoreConfig.LayoutType === 2,\n            'ap-icon-warning icon-warning': toastNotificationBelonging.ToastCoreConfig.LayoutType === 3,\n            'ap-icon-danger icon-times-circle': toastNotificationBelonging.ToastCoreConfig.LayoutType === 4\n          }\"\n        ></span>\n      </div>\n      <div\n        class=\"text-wrapper-section toast-inner-content\"\n        [ngStyle]=\"{\n          'text-align': toastNotificationBelonging.ToastCoreConfig.TextPosition\n        }\"\n        [ngClass]=\"{\n          'only-message': !toastNotificationBelonging.Dispatch.Title\n        }\"\n      >\n        <div class=\"dont-break-out\">\n          <div class=\"text-wrapper dont-break-out\" *ngIf=\"!toastNotificationBelonging.ToastCoreConfig.AllowHTMLMessage\">\n            <p>{{ toastNotificationBelonging.Dispatch.Message }}</p>\n          </div>\n          <div\n            class=\"text-wrapper\"\n            *ngIf=\"toastNotificationBelonging.ToastCoreConfig.AllowHTMLMessage\"\n            [innerHTML]=\"toastNotificationBelonging.Dispatch.Message\"\n          ></div>\n        </div>\n      </div>\n      <span\n        class=\"close-ico icon-times-circle\"\n        (click)=\"closeIcon()\"\n        *ngIf=\"buttonsExist && !toastNotificationBelonging.Dispatch.Title\"\n      ></span>\n    </div>\n\n    <div class=\"button-holder\" #elButtonWrapper>\n      <div\n        class=\"button-section\"\n        *ngIf=\"toastNotificationBelonging.Buttons.length\"\n        [ngStyle]=\"{\n          'text-align': toastNotificationBelonging.ToastCoreConfig.ButtonPosition\n        }\"\n      >\n        <button\n          class=\"ed-btn ed-btn-sm\"\n          #elButton\n          *ngFor=\"let button of toastNotificationBelonging.Buttons\"\n          (click)=\"onCustomButton(button)\"\n          [ngClass]=\"{\n            '': button.LayoutType ? button.LayoutType === 0 : false,\n            'ed-btn-success': button.LayoutType ? button.LayoutType === 1 : false,\n            'ed-btn-info': button.LayoutType ? button.LayoutType === 2 : false,\n            'ed-btn-warning': button.LayoutType ? button.LayoutType === 3 : false,\n            'ed-btn-danger': button.LayoutType ? button.LayoutType === 4 : false,\n            'ed-btn-dark': button.LayoutType ? button.LayoutType === 5 : false,\n            'ed-btn-light': button.LayoutType ? button.LayoutType === 6 : false,\n            'ed-btn-primary': button.LayoutType ? button.LayoutType === 7 : false,\n            'ed-btn-secondary': button.LayoutType ? button.LayoutType === 8 : false,\n            'ed-btn-link': button.LayoutType ? button.LayoutType === 9 : false\n          }\"\n        >\n          {{ button.Label }}\n        </button>\n      </div>\n\n      <div\n        class=\"button-section\"\n        [ngStyle]=\"{\n          'text-align': toastNotificationBelonging.ToastCoreConfig.ButtonPosition\n        }\"\n        *ngIf=\"\n          !toastNotificationBelonging.Buttons.length &&\n          (toastNotificationBelonging.ToastCoreConfig.DeclineLabel ||\n            toastNotificationBelonging.ToastCoreConfig.ConfirmLabel)\n        \"\n      >\n        <button\n          class=\"ed-btn ed-btn-sm\"\n          #elButton\n          *ngIf=\"toastNotificationBelonging.ToastCoreConfig.ConfirmLabel\"\n          (click)=\"onButtonClick('confirm')\"\n          [ngClass]=\"{\n            'ed-btn-primary': toastNotificationBelonging.ToastCoreConfig.LayoutType === 0,\n            'ed-btn-success': toastNotificationBelonging.ToastCoreConfig.LayoutType === 1,\n            'ed-btn-info': toastNotificationBelonging.ToastCoreConfig.LayoutType === 2,\n            'ed-btn-warning': toastNotificationBelonging.ToastCoreConfig.LayoutType === 3,\n            'ed-btn-danger': toastNotificationBelonging.ToastCoreConfig.LayoutType === 4\n          }\"\n        >\n          {{ toastNotificationBelonging.ToastCoreConfig.ConfirmLabel }}\n        </button>\n        <button\n          class=\"ed-btn ed-btn-sm ed-btn-secondary\"\n          #elButton\n          (click)=\"onButtonClick('decline')\"\n          *ngIf=\"toastNotificationBelonging.ToastCoreConfig.DeclineLabel\"\n        >\n          {{ toastNotificationBelonging.ToastCoreConfig.DeclineLabel }}\n        </button>\n      </div>\n    </div>\n\n    <div\n      class=\"progress-bar-container\"\n      *ngIf=\"!buttonsExist && toastNotificationBelonging.ToastCoreConfig.ProgressBar !== 0\"\n    >\n      <div\n        class=\"progress-bar\"\n        [ngStyle]=\"{\n          width: (toastNotificationBelonging.ToastCoreConfig.ProgressBar === 1 ? timer.Progress : timer.Remaining) + '%'\n        }\"\n      ></div>\n    </div>\n  </div>\n</div>\n",
                    // styleUrls: ['../../../styles/types/toast-standard.scss'],
                    animations: [fadeInOut(), boxAnimations()]
                },] }
    ];
    ToastNotificationWrapperComponent.ctorParameters = function () { return [
        { type: ToastNotificationBelonging, decorators: [{ type: i0.Inject, args: ['toastNotificationBelonging',] }] },
        { type: GlobalConfigService },
        { type: i0.ChangeDetectorRef }
    ]; };

    var ToastNotificationService = /** @class */ (function () {
        function ToastNotificationService(componentFactoryResolver, injector, appRef, toastConfig, gConfigService) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.injector = injector;
            this.appRef = appRef;
            this.toastConfig = toastConfig;
            this.gConfigService = gConfigService;
            this.toastComponentRefList = [];
            this.bufferToastRawList = [];
            this.bufferCheckingIntervalIsReady = true;
        }
        ToastNotificationService.prototype.openToast$ = function (_ToastNotificationBelonging) {
            var eventController = _ToastNotificationBelonging.EventsController;
            // console.log(`%c ${_ToastNotificationBelonging.EntityUniqueID} `, `background: #339933; color: #fff`);
            var toastRawInstance = this.prepareRawToast(eventController, _ToastNotificationBelonging);
            this.listeners(eventController);
            this.internalRouting(toastRawInstance);
            return eventController.afterClosed$;
        };
        ToastNotificationService.prototype.internalRouting = function (_ToastRawInstance) {
            if (this.isRefListAvailable()) {
                this.sendToProduction(_ToastRawInstance);
                return true;
            }
            else {
                this.sendToBuffer(_ToastRawInstance);
                return false;
            }
        };
        ToastNotificationService.prototype.sendToBuffer = function (_ToastRawInstance) {
            this.bufferToastRawList.push(_ToastRawInstance);
        };
        ToastNotificationService.prototype.sendToProduction = function (_ToastRawInstance) {
            var componentRef = this.getComponentRef(_ToastRawInstance);
            if (componentRef) {
                this.toastComponentRefList.push(componentRef);
                componentRef.instance.toastNotificationBelonging = _ToastRawInstance.ToastBelonging;
                this.appendToBodyParentComponent(componentRef);
            }
        };
        ToastNotificationService.prototype.isRefListAvailable = function () {
            return (this.toastComponentRefList.length < this.toastConfig.productionConfig.GlobalSettings.AllowedNotificationsAtOnce);
        };
        ToastNotificationService.prototype.prepareRawToast = function (_EventsController, _ToastNotificationBelonging) {
            var weakMap = new WeakMap();
            weakMap.set(ToastNotificationEventsController, _EventsController);
            return {
                WeakMap: weakMap,
                ToastBelonging: _ToastNotificationBelonging
            };
        };
        ToastNotificationService.prototype.getComponentRef = function (_ToastNotificationRawState) {
            var dialogIndex = this.findDialogIndex(_ToastNotificationRawState.ToastBelonging.EntityUniqueID);
            if (dialogIndex === -1) {
                var toastUserViewComponent = ToastNotificationWrapperComponent;
                if (_ToastNotificationRawState.ToastBelonging.ToastCoreConfig.ToastUserViewType === exports.ToastUserViewTypeEnum.SIMPLE) {
                    toastUserViewComponent = ToastNotificationSimpleWrapperComponent;
                }
                var componentFactory = this.componentFactoryResolver.resolveComponentFactory(toastUserViewComponent);
                return componentFactory.create(new DialogInjector(this.injector, _ToastNotificationRawState.WeakMap));
            }
            return null;
        };
        ToastNotificationService.prototype.listeners = function (_EventsController) {
            var _this = this;
            // Listener for closing dialog
            var closeDialogSubscription = _EventsController.afterClosed$.subscribe(function (response) {
                // this.removeFromBodyParentComponent(modalIndex);
                _this.removeFromBody(response.toastNotificationBelonging.EntityUniqueID);
                closeDialogSubscription.unsubscribe();
            });
        };
        ToastNotificationService.prototype.appendToBodyParentComponent = function (_ComponentRef) {
            // attach view to ignite lifecycle hooks
            this.appRef.attachView(_ComponentRef.hostView);
            var toastPosition = _ComponentRef.instance.toastNotificationBelonging.ToastCoreConfig.ToastPosition;
            var openInElementID = _ComponentRef.instance.toastNotificationBelonging.ToastCoreConfig.OpenInElementID;
            var targetNode;
            if (!openInElementID) {
                this.setToastWrapperNode(_ComponentRef.instance.toastNotificationBelonging.ToastCoreConfig.ToastPosition, this.setToastOverlayNode());
                targetNode = document.getElementById("toast-wrapper-" + toastPosition);
            }
            else {
                targetNode = document.getElementById(openInElementID);
            }
            var domElem = _ComponentRef.hostView.rootNodes[0];
            var toastEntity = document.createElement('div');
            toastEntity.setAttribute('id', _ComponentRef.instance.toastNotificationBelonging.EntityUniqueID);
            toastEntity.className = 'toast-entity';
            var split = toastPosition.split('-');
            if (split[1] === 'fullwidth') {
                toastEntity.style.width = '93vw';
            }
            else if (openInElementID) {
                toastEntity.style.width = '100%';
            }
            else {
                toastEntity.style.width = '300px';
            }
            toastEntity.style.margin = 'auto';
            toastEntity.prepend(domElem);
            targetNode.prepend(toastEntity);
            /*setTimeout(() => {
              targetNode.prepend(toastEntity);
            }, 200);*/
        };
        ToastNotificationService.prototype.removeFromBody = function (_EntityUniqueID) {
            var _this = this;
            var modalIndex = this.findDialogIndex(_EntityUniqueID);
            if (modalIndex > -1) {
                if (this.bufferToastRawList.length) {
                    this.sendToProduction(this.bufferToastRawList[0]);
                    this.bufferToastRawList.splice(0, 1);
                }
                this.toastComponentRefList[modalIndex].instance
                    .closeParent$()
                    .pipe(operators.tap(function (item) {
                    var modalIndex = _this.findDialogIndex(_EntityUniqueID);
                    if (_this.toastComponentRefList[modalIndex]) {
                        var toastEntity = document.getElementById(_this.toastComponentRefList[modalIndex].instance.toastNotificationBelonging.EntityUniqueID);
                        toastEntity.remove();
                        // console.log(`%c ${this.toastComponentRefList[modalIndex].instance.toastNotificationBelonging.EntityUniqueID} `, `background: #cc3333; color: #fff`);
                        _this.appRef.detachView(_this.toastComponentRefList[modalIndex].hostView);
                        _this.toastComponentRefList[modalIndex].destroy();
                        _this.toastComponentRefList.splice(modalIndex, 1);
                    }
                }), operators.take(1))
                    .subscribe();
            }
        };
        ToastNotificationService.prototype.findDialogIndex = function (_DialogUniqueID) {
            return this.toastComponentRefList.findIndex(function (item) {
                return _DialogUniqueID === item.instance.toastNotificationBelonging.EntityUniqueID;
            });
        };
        ToastNotificationService.prototype.setToastOverlayNode = function () {
            var bodyNode = document.body || document.getElementsByTagName('body')[0];
            if (!bodyNode) {
                return;
            }
            // check the overlay
            var toastOverlayNode = document.getElementById('toast-overlay-container');
            if (!toastOverlayNode) {
                var toastOverlayNode_1 = document.createElement('div');
                toastOverlayNode_1.setAttribute('id', 'toast-overlay-container');
                toastOverlayNode_1.appendChild(document.createTextNode(''));
                toastOverlayNode_1.style.position = 'fixed';
                toastOverlayNode_1.style.top = '0';
                toastOverlayNode_1.style.left = '0';
                toastOverlayNode_1.style.zIndex = '999999999999';
                bodyNode.appendChild(toastOverlayNode_1);
                return toastOverlayNode_1;
            }
            return toastOverlayNode;
        };
        ToastNotificationService.prototype.setToastWrapperNode = function (_Position, _ToastOverlayNode) {
            var toastWrapperNode = document.getElementById("toast-wrapper-" + _Position);
            if (!toastWrapperNode) {
                var toastWrapper = document.createElement('div');
                toastWrapper.setAttribute('id', 'toast-wrapper-' + _Position);
                toastWrapper.appendChild(document.createTextNode(''));
                _ToastOverlayNode.prepend(toastWrapper);
                var split = _Position.split('-');
                if (split[1] === 'right' || split[1] === 'left') {
                    this.gConfigService
                        .getSheet('ngx-awesome-popup-styles')
                        .addRule("#toast-wrapper-" + _Position, split[0] + ": 20px; " + split[1] + ": 20px; position: fixed; z-index: 999999999;");
                }
                if (split[1] === 'center') {
                    this.gConfigService
                        .getSheet('ngx-awesome-popup-styles')
                        .addRule("#toast-wrapper-" + _Position, split[0] + ": 20px; width: 100%; position: fixed; z-index: 999999999; pointer-events: none;");
                }
                if (split[1] === 'fullwidth') {
                    this.gConfigService
                        .getSheet('ngx-awesome-popup-styles')
                        .addRule("#toast-wrapper-" + _Position, split[0] + ": 10px; width: 100%; position: fixed; z-index: 999999999; pointer-events: none;");
                }
            }
        };
        return ToastNotificationService;
    }());
    ToastNotificationService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function ToastNotificationService_Factory() { return new ToastNotificationService(i0__namespace.ɵɵinject(i0__namespace.ComponentFactoryResolver), i0__namespace.ɵɵinject(i0__namespace.INJECTOR), i0__namespace.ɵɵinject(i0__namespace.ApplicationRef), i0__namespace.ɵɵinject(ToastNotificationConfigService), i0__namespace.ɵɵinject(GlobalConfigService)); }, token: ToastNotificationService, providedIn: "root" });
    ToastNotificationService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    ToastNotificationService.ctorParameters = function () { return [
        { type: i0.ComponentFactoryResolver },
        { type: i0.Injector },
        { type: i0.ApplicationRef },
        { type: ToastNotificationConfigService },
        { type: GlobalConfigService }
    ]; };

    // region *** Public ***
    var ToastNotificationInitializer = /** @class */ (function () {
        function ToastNotificationInitializer() {
            this.toastNotificationCarrier = new ToastNotificationCarrier();
        }
        ToastNotificationInitializer.prototype.openToastNotification$ = function () {
            return this.toastNotificationCarrier.openToastNotification$().pipe(operators.map(function (resp) {
                var basicToastNotificationResponse = new ToastNotificationResponse();
                var dataControl = new DataControl();
                dataControl.copyValuesFrom(resp, basicToastNotificationResponse);
                return basicToastNotificationResponse;
            }), operators.take(1));
        };
        ToastNotificationInitializer.prototype.setButtons = function (_Buttons) {
            this.toastNotificationCarrier.setButtons(_Buttons);
        };
        ToastNotificationInitializer.prototype.setConfig = function (_ToastNotificationConfig) {
            this.toastNotificationCarrier.setConfig(_ToastNotificationConfig);
        };
        ToastNotificationInitializer.prototype.setDispatch = function (_Title, _Message) {
            if (_Message === void 0) { _Message = null; }
            this.toastNotificationCarrier.setTitle(_Title);
            this.toastNotificationCarrier.setMessage(_Message);
        };
        ToastNotificationInitializer.prototype.setTitle = function (_Title) {
            this.toastNotificationCarrier.setTitle(_Title);
        };
        ToastNotificationInitializer.prototype.setMessage = function (_Message) {
            this.toastNotificationCarrier.setMessage(_Message);
        };
        ToastNotificationInitializer.prototype.setButtonLabels = function (_Confirm, _Decline) {
            this.toastNotificationCarrier.setButtonLabels(_Confirm, _Decline);
        };
        return ToastNotificationInitializer;
    }());
    var ToastNotificationResponse = /** @class */ (function (_super) {
        __extends(ToastNotificationResponse, _super);
        function ToastNotificationResponse() {
            var _this = _super.call(this) || this;
            // private Response: DialogPrepareResponse            = new DialogPrepareResponse();
            _this.Success = null;
            _this.ClickedButtonID = null;
            return _this;
        }
        ToastNotificationResponse.prototype.setSuccess = function (_IsSuccess) {
            this.Success = _IsSuccess;
        };
        ToastNotificationResponse.prototype.setClickedButtonID = function (_ClickedButtonID) {
            this.ClickedButtonID = _ClickedButtonID;
        };
        return ToastNotificationResponse;
    }(DataControl));
    var ToastNotificationEventsController = /** @class */ (function () {
        function ToastNotificationEventsController(EntityUniqueID) {
            this.EntityUniqueID = EntityUniqueID;
            this._onButtonClick = new rxjs.Subject();
            this._afterClosed = new rxjs.Subject();
            this._buttonList = new rxjs.Subject();
            this.afterClosed$ = this._afterClosed.asObservable();
            this.onButtonClick$ = this._onButtonClick.asObservable();
            this.buttonList$ = this._buttonList.asObservable();
        }
        ToastNotificationEventsController.prototype.close = function (_Response) {
            var response = _Response ? _Response : this.defaultResponse;
            this._afterClosed.next(response);
        };
        ToastNotificationEventsController.prototype.onButtonClick = function (_Button) {
            this.defaultResponse.setClickedButtonID(_Button.ID);
            this._onButtonClick.next(_Button);
        };
        ToastNotificationEventsController.prototype.setButtonList = function (_ButtonList) {
            this._buttonList.next(_ButtonList);
        };
        ToastNotificationEventsController.prototype.setDefaultResponse = function (_Response) {
            this.defaultResponse = _Response;
        };
        return ToastNotificationEventsController;
    }());
    // endregion
    var ToastNotificationDefaultResponse = /** @class */ (function (_super) {
        __extends(ToastNotificationDefaultResponse, _super);
        function ToastNotificationDefaultResponse() {
            var _this = _super.call(this) || this;
            _this.toastNotificationBelonging = null;
            return _this;
        }
        ToastNotificationDefaultResponse.prototype.setBelonging = function (_ToastNotificationBelonging) {
            this.toastNotificationBelonging = _ToastNotificationBelonging;
        };
        return ToastNotificationDefaultResponse;
    }(ToastNotificationResponse));
    var ToastNotificationCarrier = /** @class */ (function () {
        function ToastNotificationCarrier() {
            this.toastNotificationBelonging = new ToastNotificationBelonging();
        }
        ToastNotificationCarrier.prototype.setButtons = function (_Buttons) {
            if (_Buttons.length) {
                this.toastNotificationBelonging.Buttons = _Buttons;
            }
        };
        ToastNotificationCarrier.prototype.setTitle = function (_Title) {
            this.toastNotificationBelonging.Dispatch.Title = _Title;
        };
        ToastNotificationCarrier.prototype.setMessage = function (_Message) {
            this.toastNotificationBelonging.Dispatch.Message = _Message;
        };
        ToastNotificationCarrier.prototype.setButtonLabels = function (_Confirm, _Decline) {
            this.toastNotificationBelonging.ToastCoreConfig.ConfirmLabel = _Confirm;
            this.toastNotificationBelonging.ToastCoreConfig.DeclineLabel = _Decline;
        };
        ToastNotificationCarrier.prototype.setConfig = function (_ToastNotificationBelonging) {
            // region *** local UserConfig (defined on place where dialog is called) ***
            var dataControl = new DataControl();
            dataControl.copyValuesFrom(_ToastNotificationBelonging, this.toastNotificationBelonging.ToastCoreConfig);
            // endregion
        };
        ToastNotificationCarrier.prototype.openToastNotification$ = function () {
            if (!this.toastNotificationBelonging.Dispatch.Title && !this.toastNotificationBelonging.Dispatch.Message) {
                throw Error('Toast notification can not be without both message and title.');
            }
            var service = ServiceLocator.injector.get(ToastNotificationService);
            return service.openToast$(this.toastNotificationBelonging);
        };
        return ToastNotificationCarrier;
    }());
    var GlobalToastSettings = /** @class */ (function () {
        function GlobalToastSettings() {
            this.AllowedNotificationsAtOnce = null;
        }
        return GlobalToastSettings;
    }());
    var ResetToastGlobalSettings = /** @class */ (function () {
        function ResetToastGlobalSettings(globalToastConfig) {
            var globalToastConfigService = ServiceLocator.injector.get(ToastNotificationConfigService);
            if (globalToastConfigService) {
                globalToastConfigService.setResetGlobalToastConfig(globalToastConfig);
            }
            else {
                globalToastConfigService.setResetGlobalToastConfig();
            }
        }
        return ResetToastGlobalSettings;
    }());
    var ToastSettings = /** @class */ (function () {
        function ToastSettings() {
            this.Buttons = [];
            this.ToastCoreConfig = new ToastCoreConfig();
            this.Dispatch = new Dispatch();
            this.GlobalSettings = new GlobalToastSettings();
        }
        return ToastSettings;
    }());
    var ToastCustomStyles = /** @class */ (function () {
        function ToastCustomStyles() {
            this.TitleCSS = null;
            this.TextCSS = null;
            this.ButtonSectionCSS = null;
            this.ButtonCSS = null;
        }
        return ToastCustomStyles;
    }());
    var ToastCoreConfig = /** @class */ (function () {
        function ToastCoreConfig() {
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
            this.AnimationIn = null;
            this.AnimationOut = null;
            this.CustomStyles = new ToastCustomStyles();
        }
        return ToastCoreConfig;
    }());
    var ToastNotificationBelonging = /** @class */ (function (_super) {
        __extends(ToastNotificationBelonging, _super);
        function ToastNotificationBelonging() {
            var _this = _super.call(this) || this;
            _this.EntityUniqueID = 'T' + Math.random().toString(36).substr(2, 9);
            _this.EventsController = new ToastNotificationEventsController(_this.EntityUniqueID);
            var toastNotificationConfigurator = ServiceLocator.injector.get(ToastNotificationConfigService);
            var baseSettings = new ToastSettings();
            var dataControl = new DataControl();
            dataControl.copyValuesFrom(toastNotificationConfigurator.productionConfig.ToastCoreConfig, baseSettings.ToastCoreConfig);
            _this.ToastCoreConfig = baseSettings.ToastCoreConfig;
            _this.Buttons = toastNotificationConfigurator.productionConfig.Buttons.slice();
            return _this;
        }
        return ToastNotificationBelonging;
    }(ToastSettings));

    var NgxAwesomePopupModule = /** @class */ (function () {
        function NgxAwesomePopupModule(injector) {
            this.injector = injector;
            ServiceLocator.injector = injector;
        }
        NgxAwesomePopupModule.forRoot = function (globalConfig) {
            return {
                ngModule: NgxAwesomePopupModule,
                providers: [{ provide: 'cdGlobalConfig', useValue: globalConfig }]
            };
        };
        return NgxAwesomePopupModule;
    }());
    NgxAwesomePopupModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule, platformBrowser.BrowserModule, animations$1.BrowserAnimationsModule],
                    providers: [GlobalConfigService]
                },] }
    ];
    NgxAwesomePopupModule.ctorParameters = function () { return [
        { type: i0.Injector }
    ]; };
    var DialogConfigModule = /** @class */ (function () {
        function DialogConfigModule() {
        }
        DialogConfigModule.forRoot = function (dialogConfig) {
            return {
                ngModule: DialogConfigModule,
                providers: [
                    { provide: 'dialogConfig', useValue: dialogConfig },
                    { provide: 'dialogBelonging', useClass: DialogBelonging }
                ]
            };
        };
        return DialogConfigModule;
    }());
    DialogConfigModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [DialogWrapperComponent, DefaultLoaderComponent, InsertionDirective, InsertionLoaderDirective],
                    imports: [common.CommonModule],
                    providers: [DialogService, DialogConfigService],
                    entryComponents: [DialogWrapperComponent, DefaultLoaderComponent]
                },] }
    ];
    var ConfirmBoxConfigModule = /** @class */ (function () {
        function ConfirmBoxConfigModule() {
        }
        ConfirmBoxConfigModule.forRoot = function (confirmBoxConfig) {
            return {
                ngModule: ConfirmBoxConfigModule,
                providers: [
                    { provide: 'confirmBoxConfig', useValue: confirmBoxConfig },
                    { provide: 'confirmBoxBelonging', useClass: ConfirmBoxBelonging }
                ]
            };
        };
        return ConfirmBoxConfigModule;
    }());
    ConfirmBoxConfigModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [ConfirmBoxWrapperComponent],
                    imports: [common.CommonModule],
                    providers: [ConfirmBoxService, ConfirmBoxConfigService],
                    entryComponents: [ConfirmBoxWrapperComponent]
                },] }
    ];
    var ToastNotificationConfigModule = /** @class */ (function () {
        function ToastNotificationConfigModule() {
        }
        ToastNotificationConfigModule.forRoot = function (toastNotificationConfig) {
            return {
                ngModule: ToastNotificationConfigModule,
                providers: [
                    {
                        provide: 'toastNotificationConfig',
                        useValue: toastNotificationConfig
                    },
                    {
                        provide: 'toastNotificationBelonging',
                        useClass: ToastNotificationBelonging
                    }
                ]
            };
        };
        return ToastNotificationConfigModule;
    }());
    ToastNotificationConfigModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [ToastNotificationWrapperComponent, ToastNotificationSimpleWrapperComponent],
                    imports: [common.CommonModule],
                    providers: [ToastNotificationService, ToastNotificationConfigService],
                    entryComponents: [ToastNotificationWrapperComponent, ToastNotificationSimpleWrapperComponent]
                },] }
    ];

    // endregion

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ButtonMaker = ButtonMaker;
    exports.ConfirmBoxConfigModule = ConfirmBoxConfigModule;
    exports.ConfirmBoxInitializer = ConfirmBoxInitializer;
    exports.DialogBelonging = DialogBelonging;
    exports.DialogConfigModule = DialogConfigModule;
    exports.DialogInitializer = DialogInitializer;
    exports.NgxAwesomePopupModule = NgxAwesomePopupModule;
    exports.ResetGlobalConfig = ResetGlobalConfig;
    exports.ResetToastGlobalSettings = ResetToastGlobalSettings;
    exports.ToastNotificationConfigModule = ToastNotificationConfigModule;
    exports.ToastNotificationInitializer = ToastNotificationInitializer;
    exports["ɵa"] = ToastSettings;
    exports["ɵb"] = ToastNotificationBelonging;
    exports["ɵba"] = slideOutDown;
    exports["ɵbb"] = slideOutLeft;
    exports["ɵbc"] = slideOutRight;
    exports["ɵbd"] = wobble;
    exports["ɵbe"] = InsertionDirective;
    exports["ɵbf"] = InsertionLoaderDirective;
    exports["ɵbg"] = DefaultLoaderComponent;
    exports["ɵbh"] = DialogService;
    exports["ɵbi"] = DialogConfigService;
    exports["ɵbj"] = ConfirmBoxWrapperComponent;
    exports["ɵbk"] = ConfirmBoxService;
    exports["ɵbl"] = ConfirmBoxConfigService;
    exports["ɵbm"] = ToastNotificationWrapperComponent;
    exports["ɵbn"] = WrapperAbstraction;
    exports["ɵbo"] = ToastNotificationSimpleWrapperComponent;
    exports["ɵbp"] = ToastNotificationService;
    exports["ɵbq"] = ToastNotificationConfigService;
    exports["ɵc"] = DialogSettings;
    exports["ɵd"] = ConfirmBoxSettings;
    exports["ɵe"] = ConfirmBoxBelonging;
    exports["ɵf"] = GlobalConfigService;
    exports["ɵg"] = DialogWrapperComponent;
    exports["ɵh"] = fadeInOut;
    exports["ɵi"] = boxAnimations;
    exports["ɵj"] = bounceIn;
    exports["ɵk"] = swing;
    exports["ɵl"] = zoomIn;
    exports["ɵm"] = zoomInRotate;
    exports["ɵn"] = elastic;
    exports["ɵo"] = jello;
    exports["ɵp"] = fadeIn;
    exports["ɵq"] = slideInUp;
    exports["ɵr"] = slideInDown;
    exports["ɵs"] = slideInLeft;
    exports["ɵt"] = slideInRight;
    exports["ɵu"] = zoomOutWind;
    exports["ɵv"] = bounceOut;
    exports["ɵw"] = flipOutY;
    exports["ɵx"] = zoomOut;
    exports["ɵy"] = zoomOutRotate;
    exports["ɵz"] = slideOutUp;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=costlydeveloper-ngx-awesome-popup.umd.js.map
