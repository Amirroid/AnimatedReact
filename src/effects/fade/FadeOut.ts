import Easing from "../../core/easing/Easing";
import React from "react";
import ExitAnimationEffect from "../../core/effects/ExitAnimationEffect";

export class FadeOut implements ExitAnimationEffect {
    style: React.CSSProperties;
    duration: number;

    constructor(targetAlpha: number = 0, duration: number = 500, easing: Easing = Easing.ExitDefault) {
        const clampedAlpha = Math.max(0, Math.min(1, targetAlpha));
        this.duration = duration
        this.style = { opacity: clampedAlpha, transition: `opacity ${duration}ms ${easing.toString()}` };
    }
}