import { useEffect, useState } from "react";
import AnimatedContentKeyContext from "../contexts/AnimatedContentKeyContext";
import AnimatedContentProps from "../props/AnimatedContentProps";
import AnimatedVisibility from "./AnimatedVisibility";

const AnimatedContent: React.FC<AnimatedContentProps> = ({ enter, exit, children, currentKey, className = "" }) => {
    const [animationList, setAnimationList] = useState<any[]>([]);

    useEffect(() => {
        setAnimationList(prevList => [...prevList, currentKey]);

        if (animationList.length > 0) {
            const timeoutId = setTimeout(() => {
                setAnimationList(prevList => prevList.slice(1));
            }, exit.duration);
            return () => clearTimeout(timeoutId);
        }
    }, [currentKey]);

    const renderContent = () => {
        return animationList.map((animationKey, index) => {
            const isLast = index === animationList.length - 1;

            return (
                <div style={{ width: "auto", position: "absolute" }} key={animationKey}>
                    <AnimatedVisibility
                        enter={enter}
                        exit={exit}
                        visible={isLast}>
                        <AnimatedContentKeyContext.Provider value={animationKey}>
                            {children}
                        </AnimatedContentKeyContext.Provider>
                    </AnimatedVisibility>
                </div>
            );
        });
    };

    return (
        <div className={className}
            style={{
                position: 'relative',
                overflow: 'visible'
            }}>
            {renderContent()}
        </div>
    );
};


export default AnimatedContent;