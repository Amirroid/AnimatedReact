import Easing from "../../core/easing/Easing";
import EnterAnimationEffect from "../../core/effects/EnterAnimationEffect";
import React from "react";
export declare class ScaleIn implements EnterAnimationEffect {
    initialStyle: React.CSSProperties;
    targetStyle: React.CSSProperties;
    duration: number;
    constructor(initialScaleX?: number, initialScaleY?: number, duration?: number, easing?: Easing, originX?: number, // default to center
    originY?: number);
}
//# sourceMappingURL=ScaleIn.d.ts.map