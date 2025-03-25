import Easing from "../core/easing/Easing";
import EnterAnimationEffect from "../core/effects/EnterAnimationEffect";
import ExitAnimationEffect from "../core/effects/ExitAnimationEffect";
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

export const scaleIn = (duration: number = 500, initialScaleX: number = 0, initialScaleY: number = initialScaleX, easing: Easing = Easing.EnterDefault) =>
    new ScaleIn(initialScaleX, initialScaleY, duration, easing);

export const scaleOut = (duration: number = 500, targetScaleX: number = 0, targetScaleY: number = targetScaleX, easing: Easing = Easing.ExitDefault) =>
    new ScaleOut(targetScaleX, targetScaleY, duration, easing);

export const expandIn = (widthPercentage: number = 0, heightPercentage: number = 0, duration: number = 500, easing: Easing = Easing.EnterDefault) =>
    new Expand(widthPercentage, heightPercentage, duration, easing);

export const shrinkOut = (widthPercentage: number = 0, heightPercentage: number = 0, duration: number = 500, easing: Easing = Easing.ExitDefault) =>
    new Shrink(widthPercentage, heightPercentage, duration, easing);

export const expandInHorizontally = (widthPercentage: number = 0, duration: number = 500, easing: Easing = Easing.EnterDefault) =>
    new Expand(widthPercentage, 0, duration, easing);

export const expandInVertically = (heightPercentage: number = 0, duration: number = 500, easing: Easing = Easing.EnterDefault) =>
    new Expand(0, heightPercentage, duration, easing);

export const shrinkOutHorizontally = (widthPercentage: number = 0, duration: number = 500, easing: Easing = Easing.ExitDefault) =>
    new Shrink(widthPercentage, 0, duration, easing);

export const shrinkOutVertically = (heightPercentage: number = 0, duration: number = 500, easing: Easing = Easing.ExitDefault) =>
    new Shrink(0, heightPercentage, duration, easing);

export const slideIn = (xPercentage: number = 0, yPercentage: number = 0, duration: number = 500, easing: Easing = Easing.EnterDefault) =>
    new SlideIn(xPercentage, yPercentage, duration, easing);

export const slideOut = (xPercentage: number = 0, yPercentage: number = 0, duration: number = 500, easing: Easing = Easing.ExitDefault) =>
    new SlideOut(xPercentage, yPercentage, duration, easing);

export const slideInHorizontally = (xPercentage: number = 0, duration: number = 500, easing: Easing = Easing.EnterDefault) =>
    new SlideIn(xPercentage, 0, duration, easing);

export const slideInVertically = (yPercentage: number = 0, duration: number = 500, easing: Easing = Easing.EnterDefault) =>
    new SlideIn(0, yPercentage, duration, easing);

export const slideOutHorizontally = (xPercentage: number = 0, duration: number = 500, easing: Easing = Easing.ExitDefault) =>
    new SlideOut(xPercentage, 0, duration, easing);

export const slideOutVertically = (yPercentage: number = 0, duration: number = 500, easing: Easing = Easing.ExitDefault) =>
    new SlideOut(0, yPercentage, duration, easing);

export const fadeIn = (duration: number = 500, initialAlpha: number = 0, easing: Easing = Easing.EnterDefault) =>
    new FadeIn(initialAlpha, duration, easing);

export const fadeOut = (duration: number = 500, targetAlpha: number = 0, easing: Easing = Easing.EnterDefault) =>
    new FadeOut(targetAlpha, duration, easing);

export const combinedIn = (animations: EnterAnimationEffect[]) => {
    return new CombinedIn(animations);
};

export const combinedOut = (animations: ExitAnimationEffect[]) => {
    return new CombinedOut(animations);
};