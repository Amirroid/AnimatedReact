import Easing from "../../core/easing/Easing";
import ExitAnimationEffect from "../../core/effects/ExitAnimationEffect";

export class BlurOut implements ExitAnimationEffect {
    style: React.CSSProperties;
    duration: number;

    constructor(targetBlur: number = 10, duration: number = 500, easing: Easing = Easing.ExitDefault) {
        this.duration = duration;
        this.style = {
            filter: `blur(${targetBlur}px)`,
            transition: `filter ${duration}ms ${easing.toString()}`,
        };
    }
}
