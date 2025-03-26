import Easing from "../../core/easing/Easing";
import EnterAnimationEffect from "../../core/effects/EnterAnimationEffect";

export class BlurIn implements EnterAnimationEffect {
    initialStyle: React.CSSProperties;
    targetStyle: React.CSSProperties;
    duration: number;

    constructor(initialBlur: number = 10, duration: number = 500, easing: Easing = Easing.EnterDefault) {
        this.duration = duration;

        this.initialStyle = { filter: `blur(${initialBlur}px)` };
        this.targetStyle = {
            filter: "blur(0px)",
            transition: `filter ${duration}ms ${easing.toString()}`,
        };
    }
}
