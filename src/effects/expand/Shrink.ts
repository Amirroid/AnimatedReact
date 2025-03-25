import Easing from "../../core/easing/Easing";
import ExitAnimationEffect from "../../core/effects/ExitAnimationEffect";
import React from "react";

export class Shrink implements ExitAnimationEffect {
    style: React.CSSProperties;
    duration: number;

    constructor(
        targetWidthPercentage: number = 0,
        targetHeightPercentage: number = 0,
        duration: number = 500,
        easing: Easing = Easing.ExitDefault
    ) {
        this.duration = duration;

        this.style = {
            maxWidth: `${targetWidthPercentage}%`,
            maxHeight: `${targetHeightPercentage}%`,
            transition: `max-width ${duration}ms ${easing.toString()}, max-height ${duration}ms ${easing.toString()}`,
            overflow: "hidden",
        };
    }
}