import Easing from "../../core/easing/Easing";
import EnterAnimationEffect from "../../core/effects/EnterAnimationEffect";
import React from "react";

export class ScaleIn implements EnterAnimationEffect {
    style: React.CSSProperties;
    duration: number;

    constructor(initialScale: number = 0, duration: number = 500, easing: Easing = Easing.EnterDefault) {
        const clampedScale = Math.max(0, Math.min(1, initialScale));
        this.duration = duration;
        this.style = { transform: `scale(${clampedScale})`, transition: `transform ${duration}ms ${easing.toString()}` };
    }
}