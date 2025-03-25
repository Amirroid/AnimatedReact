import { useEffect, useState } from "react";
import AnimatedContentProps from "../../props/AnimatedContentProps";
import AnimatedContentItem from "./AnimatedContentItem";


const AnimatedContent = <T,>({ enter, exit, children, currentKey, className = "" }: AnimatedContentProps<T>) => {
    const [animationList, setAnimationList] = useState<T[]>([]);

    useEffect(() => {
        setAnimationList(prevList => [...prevList, currentKey]);
    }, [currentKey]);

    const removeKey = (itemKey: T) => {
        setAnimationList(prevList => prevList.filter(key => key !== itemKey));
    };

    const renderContent = () => {
        return animationList.map((animationKey, index) => {
            const isLast = index === animationList.length - 1;
            const prevKey = index > 0 ? animationList[index - 1] : currentKey;

            return (
                <AnimatedContentItem
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
        <div className={className} style={{ position: "relative", overflow: "visible" }}>
            {renderContent()}
        </div>
    );
};



export default AnimatedContent;