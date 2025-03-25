import EnterAnimationEffect from "../core/effects/EnterAnimationEffect";
import ExitAnimationEffect from "../core/effects/ExitAnimationEffect";
import React from "react";

export default interface AnimatedContentProps {
    enter: EnterAnimationEffect;
    exit: ExitAnimationEffect;
    children: React.ReactNode;
    currentKey: any;
    className?: string,
}