import { useEffect, useState } from "react";
import AnimatedVisibility from "../visibility/AnimatedVisibility";
import AnimatedContentKeyContext from "../../contexts/AnimatedContentKeyContext";
import AnimatedContentItemProps from "../../props/AnimatedContentItemProps";


export default function AnimatedContentItem({ enter, exit, onEnd, itemKey, isLast, children }: AnimatedContentItemProps) {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        requestAnimationFrame(() => setVisible(isLast));
        if (!isLast) {
            const timeoutId = setTimeout(onEnd, exit.duration)
            return () => clearTimeout(timeoutId)
        }
    }, [isLast])
    return (
        <div style={{ width: "auto", position: "absolute" }}>
            <AnimatedVisibility
                enter={enter}
                exit={exit}
                visible={visible}>
                <AnimatedContentKeyContext.Provider value={itemKey}>
                    {children}
                </AnimatedContentKeyContext.Provider>
            </AnimatedVisibility>
        </div>
    );
}