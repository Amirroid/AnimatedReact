import { forwardRef, useEffect, useState } from "react";
import AnimatedVisibility from "../visibility/AnimatedVisibility";
import AnimatedContentKeyContext from "../../contexts/AnimatedContentKeyContext";
import AnimatedContentItemProps from "../../props/AnimatedContentItemProps";


const AnimatedContentItem = forwardRef<HTMLDivElement, AnimatedContentItemProps>(
    ({ enter, exit, onEnd, itemKey, isLast, children }, ref) => {
        const [visible, setVisible] = useState(false)
        useEffect(() => {
            requestAnimationFrame(() => setVisible(isLast));
            if (!isLast) {
                const timeoutId = setTimeout(onEnd, exit.duration)
                return () => clearTimeout(timeoutId)
            }
        }, [isLast])
        return (
            <div style={{ width: "auto", height: "auto", position: "absolute" }}>
                <AnimatedVisibility
                    enter={enter}
                    exit={exit}
                    visible={visible}>
                    <AnimatedContentKeyContext.Provider value={itemKey}>
                        <span ref={ref}>{children}</span>
                    </AnimatedContentKeyContext.Provider>
                </AnimatedVisibility>
            </div>
        );
    }
);

export default AnimatedContentItem;