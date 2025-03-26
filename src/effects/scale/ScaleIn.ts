import Easing from "../../core/easing/Easing";
import EnterAnimationEffect from "../../core/effects/EnterAnimationEffect";
import React from "react";

export class ScaleIn implements EnterAnimationEffect {
    initialStyle: React.CSSProperties;
    targetStyle: React.CSSProperties;
    duration: number;

    constructor(
        initialScaleX: number = 0,
        initialScaleY: number = initialScaleX,
        duration: number = 500,
        easing: Easing = Easing.EnterDefault,
        originX: number = 0.5, // default to center
        originY: number = 0.5  // default to center
    ) {
        const clampedScaleX = Math.max(0, Math.min(1, initialScaleX));
        const clampedScaleY = Math.max(0, Math.min(1, initialScaleY));
        this.duration = duration;

        const transformOrigin = `${originX * 100}% ${originY * 100}%`;

        this.initialStyle = {
            transform: `scale(${clampedScaleX}, ${clampedScaleY})`,
            transformOrigin: transformOrigin,
        };

        this.targetStyle = {
            transform: "scale(1, 1)",
            transition: `transform ${duration}ms ${easing.toString()}`,
            transformOrigin: transformOrigin,
        };
    }
}
