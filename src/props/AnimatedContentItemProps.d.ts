import EnterAnimationEffect from "../core/effects/EnterAnimationEffect";
import ExitAnimationEffect from "../core/effects/ExitAnimationEffect";
import React from "react";
export default interface AnimatedContentItemProps {
    enter: EnterAnimationEffect;
    exit: ExitAnimationEffect;
    onEnd: () => void;
    onUpdateSize: (rect: DOMRect) => void;
    itemKey: any;
    isLast: boolean;
    children: React.ReactNode;
}
//# sourceMappingURL=AnimatedContentItemProps.d.ts.map