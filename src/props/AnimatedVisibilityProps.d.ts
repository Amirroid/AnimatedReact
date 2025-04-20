import EnterAnimationEffect from "../core/effects/EnterAnimationEffect";
import ExitAnimationEffect from "../core/effects/ExitAnimationEffect";
import React from "react";
export default interface AnimatedVisibilityProps {
    enter: EnterAnimationEffect;
    exit: ExitAnimationEffect;
    children: React.ReactNode;
    visible: boolean;
    className?: string;
}
//# sourceMappingURL=AnimatedVisibilityProps.d.ts.map