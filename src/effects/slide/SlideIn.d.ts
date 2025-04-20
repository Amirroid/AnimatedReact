import Easing from "../../core/easing/Easing";
import EnterAnimationEffect from "../../core/effects/EnterAnimationEffect";
import React from "react";
export declare class SlideIn implements EnterAnimationEffect {
    initialStyle: React.CSSProperties;
    targetStyle: React.CSSProperties;
    duration: number;
    constructor(xPercentage?: number, yPercentage?: number, duration?: number, easing?: Easing);
}
//# sourceMappingURL=SlideIn.d.ts.map