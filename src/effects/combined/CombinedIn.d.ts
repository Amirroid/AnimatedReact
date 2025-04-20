import EnterAnimationEffect from "../../core/effects/EnterAnimationEffect";
import React from "react";
export declare class CombinedIn implements EnterAnimationEffect {
    initialStyle: React.CSSProperties;
    targetStyle: React.CSSProperties;
    duration: number;
    private animations;
    constructor(animations: EnterAnimationEffect[]);
    getAdvancedTargetStyles(): ((element: HTMLElement) => void)[];
}
//# sourceMappingURL=CombinedIn.d.ts.map