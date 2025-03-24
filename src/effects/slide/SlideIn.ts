import Easing from "../../core/easing/Easing";
import EnterAnimationEffect from "../../core/effects/EnterAnimationEffect";
import React from "react";

export class SlideIn implements EnterAnimationEffect {
    style: React.CSSProperties;
    duration: number;

    constructor(x: number = 0, y: number = 0, duration: number = 500, easing: Easing = Easing.EnterDefault) {
        this.duration = duration;
        this.style = {
            transform: `translate(${x}px, ${y}px)`,
            transition: `transform ${duration}ms ${easing.toString()}`
        };
    }
}