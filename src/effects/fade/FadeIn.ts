import Easing from "../../core/easing/Easing";
import EnterAnimationEffect from "../../core/effects/EnterAnimationEffect";
import React from "react";

export class FadeIn implements EnterAnimationEffect {
    initialStyle: React.CSSProperties;
    targetStyle: React.CSSProperties;
    duration: number;

    constructor(initialAlpha: number = 0, duration: number = 500, easing: Easing = Easing.EnterDefault) {
        const clampedAlpha = Math.max(0, Math.min(1, initialAlpha));
        this.duration = duration;

        this.initialStyle = { opacity: clampedAlpha };
        this.targetStyle = {
            opacity: 1,
            transition: `opacity ${duration}ms ${easing.toString()}`,
        };
    }
}