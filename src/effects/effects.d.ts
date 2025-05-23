import Easing from "../core/easing/Easing";
import EnterAnimationEffect from "../core/effects/EnterAnimationEffect";
import ExitAnimationEffect from "../core/effects/ExitAnimationEffect";
import { BlurIn } from "./blur/BlurIn";
import { BlurOut } from "./blur/BlurOut";
import { CombinedIn } from "./combined/CombinedIn";
import { CombinedOut } from "./combined/CombinedOut";
import { Expand } from "./expand/Expand";
import { Shrink } from "./expand/Shrink";
import { FadeIn } from "./fade/FadeIn";
import { FadeOut } from "./fade/FadeOut";
import { ScaleIn } from "./scale/ScaleIn";
import { ScaleOut } from "./scale/ScaleOut";
import { SlideIn } from "./slide/SlideIn";
import { SlideOut } from "./slide/SlideOut";
export declare const scaleIn: (duration?: number, initialScaleX?: number, initialScaleY?: number, originX?: number, originY?: number, easing?: Easing) => ScaleIn;
export declare const scaleOut: (duration?: number, targetScaleX?: number, targetScaleY?: number, originX?: number, originY?: number, easing?: Easing) => ScaleOut;
export declare const expandIn: (width?: number, height?: number, duration?: number, easing?: Easing) => Expand;
export declare const expandInHorizontally: (width?: number, duration?: number, easing?: Easing) => Expand;
export declare const expandInVertically: (height?: number, duration?: number, easing?: Easing) => Expand;
export declare const shrinkOut: (width?: number, height?: number, duration?: number, easing?: Easing) => Shrink;
export declare const shrinkOutHorizontally: (width?: number, duration?: number, easing?: Easing) => Shrink;
export declare const shrinkOutVertically: (height?: number, duration?: number, easing?: Easing) => Shrink;
export declare const slideIn: (xPercentage?: number, yPercentage?: number, duration?: number, easing?: Easing) => SlideIn;
export declare const slideOut: (xPercentage?: number, yPercentage?: number, duration?: number, easing?: Easing) => SlideOut;
export declare const slideInHorizontally: (xPercentage?: number, duration?: number, easing?: Easing) => SlideIn;
export declare const slideInVertically: (yPercentage?: number, duration?: number, easing?: Easing) => SlideIn;
export declare const slideOutHorizontally: (xPercentage?: number, duration?: number, easing?: Easing) => SlideOut;
export declare const slideOutVertically: (yPercentage?: number, duration?: number, easing?: Easing) => SlideOut;
export declare const fadeIn: (duration?: number, initialAlpha?: number, easing?: Easing) => FadeIn;
export declare const fadeOut: (duration?: number, targetAlpha?: number, easing?: Easing) => FadeOut;
export declare const blurIn: (duration?: number, initialBlur?: number, easing?: Easing) => BlurIn;
export declare const blurOut: (duration?: number, targetBlur?: number, easing?: Easing) => BlurOut;
export declare const combinedIn: (animations: EnterAnimationEffect[]) => CombinedIn;
export declare const combinedOut: (animations: ExitAnimationEffect[]) => CombinedOut;
//# sourceMappingURL=effects.d.ts.map