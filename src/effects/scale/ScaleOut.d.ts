import Easing from "../../core/easing/Easing";
import React from "react";
import ExitAnimationEffect from "../../core/effects/ExitAnimationEffect";
export declare class ScaleOut implements ExitAnimationEffect {
    style: React.CSSProperties;
    duration: number;
    constructor(targetScaleX?: number, targetScaleY?: number, duration?: number, easing?: Easing, originX?: number, // default to center
    originY?: number);
}
//# sourceMappingURL=ScaleOut.d.ts.map