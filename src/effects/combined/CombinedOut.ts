import ExitAnimationEffect from "../../core/effects/ExitAnimationEffect";
import React from "react";
import { mergeStyles } from "../../utils/Styles";

export class CombinedOut implements ExitAnimationEffect {
    style: React.CSSProperties;
    duration: number;

    constructor(animations: ExitAnimationEffect[]) {
        this.duration = Math.max(...animations.map(anim => anim.duration));
        this.style = mergeStyles(animations.map(anim => anim.style));
    }
}