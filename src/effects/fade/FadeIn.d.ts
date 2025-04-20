import Easing from "../../core/easing/Easing";
import EnterAnimationEffect from "../../core/effects/EnterAnimationEffect";
import React from "react";
export declare class FadeIn implements EnterAnimationEffect {
    initialStyle: React.CSSProperties;
    targetStyle: React.CSSProperties;
    duration: number;
    constructor(initialAlpha?: number, duration?: number, easing?: Easing);
}
//# sourceMappingURL=FadeIn.d.ts.map