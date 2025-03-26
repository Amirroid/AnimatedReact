import EnterAnimationEffect from "../../core/effects/EnterAnimationEffect";
import React from "react";
import { mergeStyles } from "../../utils/Styles";

export class CombinedIn implements EnterAnimationEffect {
    initialStyle: React.CSSProperties;
    targetStyle: React.CSSProperties;
    duration: number;
    private animations: EnterAnimationEffect[];

    constructor(animations: EnterAnimationEffect[]) {
        this.animations = animations;
        this.duration = Math.max(...animations.map(anim => anim.duration));
        this.initialStyle = mergeStyles(animations.map(anim => anim.initialStyle));
        this.targetStyle = mergeStyles(animations.map(anim => anim.targetStyle));
    }

    getAdvancedTargetStyles(): ((element: HTMLElement) => void)[] {
        return this.animations
            .map(anim => anim.getAdvancedTargetStyles?.() ?? [])
            .flat();
    }
}
