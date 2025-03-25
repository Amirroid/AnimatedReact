import EnterAnimationEffect from "../core/effects/EnterAnimationEffect";
import ExitAnimationEffect from "../core/effects/ExitAnimationEffect";
import React from "react";

export default interface AnimatedContentProps<T> {
    enter: (previusKey: T, targetKey: T) => EnterAnimationEffect;
    exit: (previusKey: T, targetKey: T) => ExitAnimationEffect;
    children: React.ReactNode;
    currentKey: T;
    className?: string,
}