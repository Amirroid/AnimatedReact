import { useEffect, useRef } from "react";
import AnimatedVisibilityProps from "../props/AnimatedVisibilityProps";

/**
 * Handles visibility transitions with animations. 
 * - When `visible` is true, it applies the `enter` animation.
 * - When `visible` is false, it applies the `exit` animation and hides the element after the animation ends.
 */
const AnimatedVisibility: React.FC<AnimatedVisibilityProps> = ({ enter, exit, children, visible, className = "" }) => {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        if (visible) {
            Object.assign(element.style, enter.initialStyle);
            element.style.visibility = "visible";
            requestAnimationFrame(() => {
                Object.assign(element.style, enter.targetStyle);
            });
        } else {
            Object.assign(element.style, exit.style);
            const timeoutId = setTimeout(() => {
                if (!visible) element.style.visibility = "hidden";
            }, exit.duration);
            return () => clearTimeout(timeoutId);
        }
    }, [visible, enter, exit]);

    return (
        <div ref={ref} style={{ visibility: "hidden" }} className={className}>
            {children}
        </div>
    );
};


export default AnimatedVisibility;