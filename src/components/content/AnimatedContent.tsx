import { useEffect, useLayoutEffect, useRef, useState } from "react";
import AnimatedContentProps from "../../props/AnimatedContentProps";
import AnimatedContentItem from "./AnimatedContentItem";


const AnimatedContent = <T,>({
    enter,
    exit,
    children,
    currentKey,
    className = ""
}: AnimatedContentProps<T>) => {
    const [animationList, setAnimationList] = useState<T[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        setAnimationList(prevList => [...prevList, currentKey]);
    }, [currentKey]);






    const removeKey = (itemKey: T) => {
        setAnimationList(prevList => prevList.filter(key => key !== itemKey));
    };

    const updateSize = (boundSize: DOMRect) => {
        const container = containerRef.current;
        if (!container) return;
        console.log(boundSize)
        container.style.height = `${boundSize.height}px`;
        container.style.width = `${boundSize.width}px`;
    };

    const renderContent = () => {
        return animationList.map((animationKey, index) => {
            const isLast = index === animationList.length - 1;
            const prevKey = index > 0 ? animationList[index - 1] : currentKey;



            return (
                <AnimatedContentItem
                    onUpdateSize={updateSize}
                    key={animationKey as any}
                    itemKey={animationKey as any}
                    enter={enter(prevKey, animationKey)}
                    exit={exit(prevKey, animationKey)}
                    onEnd={() => removeKey(animationKey)}
                    isLast={isLast}
                >
                    {children}
                </AnimatedContentItem>
            );
        });
    };

    return (
        <div
            ref={containerRef}
            className={className}
            style={{
                display: "inline-block",
                position: "relative",
                transition: "width 0.2s ease-in-out, height 0.2s ease-in-out",
            }}
        >
            {renderContent()}
        </div>
    );
};




export default AnimatedContent;