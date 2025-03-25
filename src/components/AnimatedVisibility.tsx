import { useEffect, useRef } from "react";
import AnimatedVisibilityProps from "../props/AnimatedVisibilityProps";

/**
 * Handles visibility transitions with animations. 
 * - When `visible` is true, it applies the `enter` animation.
 * - When `visible` is false, it applies the `exit` animation and hides the element after the animation ends.
 */
const AnimatedVisibility: React.FC<AnimatedVisibilityProps> = ({ enter, exit, children, visible }) => {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;
        console.log(enter.initialStyle, enter.targetStyle, exit.style)
        if (visible) {
            element.style.display = "block";
            Object.assign(element.style, enter.initialStyle);
            requestAnimationFrame(() => Object.assign(element.style, enter.targetStyle));
        } else {
            Object.assign(element.style, exit.style);
            const timeoutId = setTimeout(() => {
                if (!visible) element.style.display = "none";
            }, exit.duration);
            return () => clearTimeout(timeoutId)
        }
    }, [visible, enter, exit]);

    return <div ref={ref} style={{ display: "none" }}>{children}</div>;
};


export default AnimatedVisibility;