import Easing from "../../core/easing/Easing";
import EnterAnimationEffect from "../../core/effects/EnterAnimationEffect";
import React from "react";

export class ScaleIn implements EnterAnimationEffect {
    initialStyle: React.CSSProperties;
    targetStyle: React.CSSProperties;
    duration: number;

    constructor(initialScaleX: number = 0, initialScaleY: number = initialScaleX, duration: number = 500, easing: Easing = Easing.EnterDefault) {
        const clampedScaleX = Math.max(0, Math.min(1, initialScaleX));
        const clampedScaleY = Math.max(0, Math.min(1, initialScaleY));
        this.duration = duration;

        this.initialStyle = { transform: `scale(${clampedScaleX}, ${clampedScaleY})` };
        this.targetStyle = {
            transform: "scale(1, 1)",
            transition: `transform ${duration}ms ${easing.toString()}`,
        };
    }
}