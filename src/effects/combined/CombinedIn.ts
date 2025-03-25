import EnterAnimationEffect from "../../core/effects/EnterAnimationEffect";
import React from "react";
import { mergeStyles } from "../../utils/Styles";

export class CombinedIn implements EnterAnimationEffect {
    initialStyle: React.CSSProperties;
    targetStyle: React.CSSProperties;
    duration: number;

    constructor(animations: EnterAnimationEffect[]) {
        this.duration = Math.max(...animations.map(anim => anim.duration));
        this.initialStyle = mergeStyles(animations.map(anim => anim.initialStyle));
        this.targetStyle = mergeStyles(animations.map(anim => anim.targetStyle));
    }
}