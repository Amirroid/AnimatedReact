import Easing from "../../core/easing/Easing";
import EnterAnimationEffect from "../../core/effects/EnterAnimationEffect";
import React from "react";
export declare class Expand implements EnterAnimationEffect {
    initialStyle: React.CSSProperties;
    targetStyle: React.CSSProperties;
    duration: number;
    constructor(width?: number, height?: number, duration?: number, easing?: Easing);
    applySize(element: HTMLElement): void;
    getAdvancedTargetStyles(): ((element: HTMLElement) => void)[];
}
//# sourceMappingURL=Expand.d.ts.map