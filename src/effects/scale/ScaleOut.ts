import Easing from "../../core/easing/Easing";
import React from "react";
import ExitAnimationEffect from "../../core/effects/ExitAnimationEffect";

export class ScaleOut implements ExitAnimationEffect {
    style: React.CSSProperties;
    duration: number;

    constructor(targetScaleX: number = 0, targetScaleY: number = targetScaleX, duration: number = 500, easing: Easing = Easing.ExitDefault) {
        const clampedScaleX = Math.max(0, Math.min(1, targetScaleX));
        const clampedScaleY = Math.max(0, Math.min(1, targetScaleY));
        this.duration = duration;
        this.style = {
            transform: `scale(${clampedScaleX}, ${clampedScaleY})`,
            transition: `transform ${duration}ms ${easing.toString()}`
        };
    }
}