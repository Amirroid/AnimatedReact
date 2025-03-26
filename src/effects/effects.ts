import Easing from "../core/easing/Easing";
import EnterAnimationEffect from "../core/effects/EnterAnimationEffect";
import ExitAnimationEffect from "../core/effects/ExitAnimationEffect";
import { BlurIn } from "./blur/BlurIn";
import { BlurOut } from "./blur/BlurOut";
import { CombinedIn } from "./combined/CombinedIn";
import { CombinedOut } from "./combined/CombinedOut";
import { Expand } from "./expand/Expand";
import { Shrink } from "./expand/Shrink";
import { FadeIn } from "./fade/FadeIn";
import { FadeOut } from "./fade/FadeOut";
import { ScaleIn } from "./scale/ScaleIn";
import { ScaleOut } from "./scale/ScaleOut";
import { SlideIn } from "./slide/SlideIn";
import { SlideOut } from "./slide/SlideOut";

// Scale
export const scaleIn = (
    duration: number = 500,
    initialScaleX: number = 0,
    initialScaleY: number = initialScaleX,
    originX: number = 0.5,
    originY: number = 0.5,
    easing: Easing = Easing.EnterDefault
) => new ScaleIn(initialScaleX, initialScaleY, duration, easing, originX, originY);

export const scaleOut = (
    duration: number = 500,
    targetScaleX: number = 0,
    targetScaleY: number = targetScaleX,
    originX: number = 0.5,
    originY: number = 0.5,
    easing: Easing = Easing.ExitDefault
) => new ScaleOut(targetScaleX, targetScaleY, duration, easing, originX, originY);

// Expand
export const expandIn = (
    width: number = 0,
    height: number = 0,
    duration: number = 500,
    easing: Easing = Easing.EnterDefault
) => new Expand(width, height, duration, easing);

export const expandInHorizontally = (
    width: number = 0,
    duration: number = 500,
    easing: Easing = Easing.EnterDefault
) => new Expand(width, 0, duration, easing);

export const expandInVertically = (
    height: number = 0,
    duration: number = 500,
    easing: Easing = Easing.EnterDefault
) => new Expand(0, height, duration, easing);

// Shrink
export const shrinkOut = (
    width: number = 0,
    height: number = 0,
    duration: number = 500,
    easing: Easing = Easing.ExitDefault
) => new Shrink(width, height, duration, easing);

export const shrinkOutHorizontally = (
    width: number = 0,
    duration: number = 500,
    easing: Easing = Easing.ExitDefault
) => new Shrink(width, 0, duration, easing);

export const shrinkOutVertically = (
    height: number = 0,
    duration: number = 500,
    easing: Easing = Easing.ExitDefault
) => new Shrink(0, height, duration, easing);

// Slide
export const slideIn = (
    xPercentage: number = 0,
    yPercentage: number = 0,
    duration: number = 500,
    easing: Easing = Easing.EnterDefault
) => new SlideIn(xPercentage, yPercentage, duration, easing);

export const slideOut = (
    xPercentage: number = 0,
    yPercentage: number = 0,
    duration: number = 500,
    easing: Easing = Easing.ExitDefault
) => new SlideOut(xPercentage, yPercentage, duration, easing);

export const slideInHorizontally = (
    xPercentage: number = 0,
    duration: number = 500,
    easing: Easing = Easing.EnterDefault
) => new SlideIn(xPercentage, 0, duration, easing);

export const slideInVertically = (
    yPercentage: number = 0,
    duration: number = 500,
    easing: Easing = Easing.EnterDefault
) => new SlideIn(0, yPercentage, duration, easing);


export const slideOutHorizontally = (
    xPercentage: number = 0,
    duration: number = 500,
    easing: Easing = Easing.EnterDefault
) => new SlideOut(xPercentage, 0, duration, easing);

export const slideOutVertically = (
    yPercentage: number = 0,
    duration: number = 500,
    easing: Easing = Easing.EnterDefault
) => new SlideOut(0, yPercentage, duration, easing);

// Fade
export const fadeIn = (
    duration: number = 500,
    initialAlpha: number = 0,
    easing: Easing = Easing.EnterDefault
) => new FadeIn(initialAlpha, duration, easing);

export const fadeOut = (
    duration: number = 500,
    targetAlpha: number = 0,
    easing: Easing = Easing.EnterDefault
) => new FadeOut(targetAlpha, duration, easing);

// Blur
export const blurIn = (
    duration: number = 500,
    initialBlur: number = 10,
    easing: Easing = Easing.EnterDefault
) => new BlurIn(initialBlur, duration, easing);

export const blurOut = (
    duration: number = 500,
    targetBlur: number = 10,
    easing: Easing = Easing.ExitDefault
) => new BlurOut(targetBlur, duration, easing);

// Combined
export const combinedIn = (animations: EnterAnimationEffect[]) => {
    return new CombinedIn(animations);
};

export const combinedOut = (animations: ExitAnimationEffect[]) => {
    return new CombinedOut(animations);
};