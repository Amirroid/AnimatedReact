import React from "react";

export default interface EnterAnimationEffect {
    initialStyle: React.CSSProperties;
    targetStyle: React.CSSProperties;
    duration: number;
    getAdvancedTargetStyles?(): ((element: HTMLElement) => void)[];
}