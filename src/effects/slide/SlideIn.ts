import Easing from "../../core/easing/Easing";
import EnterAnimationEffect from "../../core/effects/EnterAnimationEffect";
import React from "react";

export class SlideIn implements EnterAnimationEffect {
    initialStyle: React.CSSProperties;
    targetStyle: React.CSSProperties;
    duration: number;

    constructor(x: number = 0, y: number = 0, duration: number = 500, easing: Easing = Easing.EnterDefault) {
        this.duration = duration;

        this.initialStyle = { transform: `translate(${x}px, ${y}px)` };
        this.targetStyle = {
            transform: "translate(0, 0)",
            transition: `transform ${duration}ms ${easing.toString()}`,
        };
    }
}