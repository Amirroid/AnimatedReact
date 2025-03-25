import Easing from "../../core/easing/Easing";
import EnterAnimationEffect from "../../core/effects/EnterAnimationEffect";
import React from "react";

export class Expand implements EnterAnimationEffect {
    initialStyle: React.CSSProperties;
    targetStyle: React.CSSProperties;
    duration: number;

    constructor(
        widthPercentage: number = 0,
        heightPercentage: number = 0,
        duration: number = 500,
        easing: Easing = Easing.EnterDefault
    ) {
        this.duration = duration;

        this.initialStyle = {
            overflow: "hidden",
            width: "0px",
            height: "0px",
            display: "block",
            transition: `
                width ${duration}ms ${easing.toString()},
                height ${duration}ms ${easing.toString()}
            `,
            willChange: "width, height",
        };

        this.targetStyle = {
            overflow: "hidden",
            width: "auto",
            height: "auto",
            transition: `
                width ${duration}ms ${easing.toString()},
                height ${duration}ms ${easing.toString()}
            `,
        };
    }
}