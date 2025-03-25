import Easing from "../../core/easing/Easing";
import EnterAnimationEffect from "../../core/effects/EnterAnimationEffect";
import React from "react";

export class SlideIn implements EnterAnimationEffect {
    initialStyle: React.CSSProperties;
    targetStyle: React.CSSProperties;
    duration: number;

    constructor(
        xPercentage: number = 0,
        yPercentage: number = 0,
        duration: number = 500,
        easing: Easing = Easing.EnterDefault
    ) {
        this.duration = duration;

        this.initialStyle = { 
            transform: `translate(${xPercentage}%, ${yPercentage}%)`
        };

        this.targetStyle = {
            transform: "translate(0%, 0%)", 
            transition: `transform ${duration}ms ${easing.toString()}`,
        };
    }
}