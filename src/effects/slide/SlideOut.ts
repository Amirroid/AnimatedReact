import Easing from "../../core/easing/Easing";
import ExitAnimationEffect from "../../core/effects/ExitAnimationEffect";
import React from "react";

export class SlideOut implements ExitAnimationEffect {
    style: React.CSSProperties;
    duration: number;

    constructor(
        xPercentage: number = 0,
        yPercentage: number = 0,
        duration: number = 500,
        easing: Easing = Easing.ExitDefault
    ) {
        this.duration = duration;
        this.style = {
            transform: `translate(${xPercentage}%, ${yPercentage}%)`,
            transition: `transform ${duration}ms ${easing.toString()}`
        };
    }
}