import React from "react";

/**
 * Merges multiple style objects into one, ensuring that 
 * 'transition' and 'transform' properties are properly combined.
 */
export function mergeStyles(styles: React.CSSProperties[]): React.CSSProperties {
    const merged: React.CSSProperties = {};
    const transitions: string[] = [];
    const transforms: string[] = [];

    styles.forEach(style => {
        Object.entries(style).forEach(([key, value]) => {
            if (key === "transition" && typeof value === "string") {
                transitions.push(value);
            } else if (key === "transform" && typeof value === "string") {
                transforms.push(value);
            } else if (value !== undefined) {
                (merged as any)[key] = value;
            }
        });
    });

    if (transitions.length > 0) {
        merged.transition = transitions.join(", ");
    }

    if (transforms.length > 0) {
        merged.transform = transforms.join(" ");
    }

    return merged;
}