import Easing from "../../core/easing/Easing";
import EnterAnimationEffect from "../../core/effects/EnterAnimationEffect";
import React from "react";

export class Expand implements EnterAnimationEffect {
    initialStyle: React.CSSProperties;
    targetStyle: React.CSSProperties;
    duration: number;

    constructor(width: number = 0, height: number = 0, duration: number = 500, easing: Easing = Easing.EnterDefault) {
        this.duration = duration;

        this.initialStyle = {
            overflow: "hidden",
            maxWidth: `${width}px`,
            maxHeight: `${height}px`,
            display: "block",
            transition: `max-width ${duration}ms ${easing.toString()}, max-height ${duration}ms ${easing.toString()}`,
            willChange: "max-width, max-height",
        };

        this.targetStyle = {
            overflow: "hidden",
            transition: `max-width ${duration}ms ${easing.toString()}, max-height ${duration}ms ${easing.toString()}`,
            willChange: "max-width, max-height",
        };
    }

    // Function to apply the correct size to the element
    applySize(element: HTMLElement) {
        requestAnimationFrame(() => {
            const width = `${element.scrollWidth}px`;
            const height = `${element.scrollHeight}px`;

            element.style.maxWidth = width;
            element.style.maxHeight = height;
        });
    }

    getAdvancedTargetStyles(): ((element: HTMLElement) => void)[] {
        return [(element) => this.applySize(element)];
    }
}