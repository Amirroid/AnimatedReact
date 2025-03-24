import Easing from "../../core/easing/Easing";
import React from "react";
import ExitAnimationEffect from "../../core/effects/ExitAnimationEffect";

export class ScaleOut implements ExitAnimationEffect {
    style: React.CSSProperties;
    duration: number;

    constructor(targetScale: number = 0, duration: number = 500, easing: Easing = Easing.ExitDefault) {
        const clampedScale = Math.max(0, Math.min(1, targetScale));
        this.duration = duration;
        this.style = { transform: `scale(${clampedScale})`, transition: `transform ${duration}ms ${easing.toString()}` };
    }
}