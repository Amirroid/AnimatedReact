import { useEffect, useRef, useState } from "react";
import AnimatedVisibility from "../visibility/AnimatedVisibility";
import AnimatedContentKeyContext from "../../contexts/AnimatedContentKeyContext";
import AnimatedContentItemProps from "../../props/AnimatedContentItemProps";


const AnimatedContentItem: React.FC<AnimatedContentItemProps> = ({
    enter,
    exit,
    onEnd,
    itemKey,
    onUpdateSize,
    isLast,
    children
}) => {
    const itemRef = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        requestAnimationFrame(() => {
            setVisible(isLast)
            if (isLast) {
                const updateSize = () => {
                    const item = itemRef.current;
                    if (!item) return;

                    onUpdateSize(item.getBoundingClientRect());
                };

                requestAnimationFrame(updateSize)
            }
        });
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
                    <span ref={itemRef}>{children}</span>
                </AnimatedContentKeyContext.Provider>
            </AnimatedVisibility>
        </div>
    );
}

export default AnimatedContentItem;