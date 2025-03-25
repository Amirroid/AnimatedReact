# AnimatedReact

**AnimatedReact** is a React library inspired by Jetpack Compose's `AnimatedVisibility` and `AnimatedContent`. It provides customizable animations such as **Fade**, **Scale**, **Slide**, **Expand**, and **Shrink**, allowing you to create smooth enter and exit transitions in your React applications.

## Installation

You can install **AnimatedReact** via npm or yarn:

```bash
npm install animatedreact
```

or

```bash
yarn add animatedreact
```

## Usage

The library provides various animation effects that can be combined and customized to suit your needs. Below are the key animations available:

### Available Animations

| Animation                    | Description                                                        | Parameters                                                            |
|------------------------------|--------------------------------------------------------------------|-----------------------------------------------------------------------|
| **ScaleIn**                   | Scales the element from an initial scale to its normal size.       | `duration`, `initialScaleX`, `initialScaleY`, `easing`                |
| **ScaleOut**                  | Scales the element from its current size to a target scale.       | `duration`, `targetScaleX`, `targetScaleY`, `easing`                 |
| **ExpandIn**                  | Expands the element based on width and height percentage.         | `widthPercentage`, `heightPercentage`, `duration`, `easing`           |
| **ShrinkOut**                 | Shrinks the element based on width and height percentage.         | `widthPercentage`, `heightPercentage`, `duration`, `easing`           |
| **ExpandInHorizontally**      | Expands the element horizontally based on width percentage.       | `widthPercentage`, `duration`, `easing`                               |
| **ExpandInVertically**        | Expands the element vertically based on height percentage.       | `heightPercentage`, `duration`, `easing`                              |
| **ShrinkOutHorizontally**     | Shrinks the element horizontally based on width percentage.       | `widthPercentage`, `duration`, `easing`                               |
| **ShrinkOutVertically**       | Shrinks the element vertically based on height percentage.        | `heightPercentage`, `duration`, `easing`                              |
| **SlideIn**                   | Slides the element in from a specific x and y percentage.         | `xPercentage`, `yPercentage`, `duration`, `easing`                   |
| **SlideOut**                  | Slides the element out to a specific x and y percentage.          | `xPercentage`, `yPercentage`, `duration`, `easing`                   |
| **SlideInHorizontally**       | Slides the element in horizontally based on x percentage.         | `xPercentage`, `duration`, `easing`                                   |
| **SlideInVertically**         | Slides the element in vertically based on y percentage.           | `yPercentage`, `duration`, `easing`                                   |
| **SlideOutHorizontally**      | Slides the element out horizontally based on x percentage.        | `xPercentage`, `duration`, `easing`                                   |
| **SlideOutVertically**        | Slides the element out vertically based on y percentage.          | `yPercentage`, `duration`, `easing`                                   |
| **FadeIn**                    | Fades the element in from a specified alpha value.                | `duration`, `initialAlpha`, `easing`                                  |
| **FadeOut**                   | Fades the element out to a specified alpha value.                 | `duration`, `targetAlpha`, `easing`                                   |
| **CombinedIn**                | Combines multiple enter animations.                               | `animations: [Array of EnterAnimationEffect]`                          |
| **CombinedOut**               | Combines multiple exit animations.                                | `animations: [Array of ExitAnimationEffect]`                           |

---

### Easing Class

You can use various easing functions in the animations. Below is the `Easing` class that defines several commonly used easing functions.

```typescript
export default class Easing {
    private constructor(public value: string) { }

    static readonly Linear = new Easing("linear");
    static readonly EaseIn = new Easing("ease-in");
    static readonly EaseOut = new Easing("ease-out");
    static readonly EaseInOut = new Easing("ease-in-out");
    static readonly EnterDefault = this.EaseIn;
    static readonly ExitDefault = this.EaseOut;

    toString() {
        return this.value;
    }
}
```

### Animation Examples

Here are a few separated examples using `AnimatedVisibility` with different animations:

### Example 1: Fade In and Fade Out
```jsx
<AnimatedVisibility enter={fadeIn(500, 0)} exit={fadeOut(500, 0)} visible={visible}>
  <div style={{ width: "100px", height: "100px", backgroundColor: "red" }} />
</AnimatedVisibility>
```
- **Explanation**: This example fades in and fades out the element with a duration of 500ms.

### Example 2: Scale In and Scale Out
```jsx
<AnimatedVisibility enter={scaleIn(500, 0)} exit={scaleOut(500, 0)} visible={visible}>
  <div style={{ width: "100px", height: "100px", backgroundColor: "blue" }} />
</AnimatedVisibility>
```
- **Explanation**: This example scales the element in and out with a duration of 500ms.

### Example 3: Slide In and Slide Out
```jsx
<AnimatedVisibility enter={slideIn(100, 0, 500)} exit={slideOut(100, 0, 500)} visible={visible}>
  <div style={{ width: "100px", height: "100px", backgroundColor: "green" }} />
</AnimatedVisibility>
```
- **Explanation**: The element slides in from the left (100px) and slides out back to the left with a duration of 500ms.

### Example 4: Combined Animations (Slide In + Fade In)
```jsx
<AnimatedVisibility enter={combinedIn([slideIn(100, 0, 500), fadeIn(500, 0)])} exit={combinedOut([slideOut(100, 0, 500), fadeOut(500, 0)])} visible={visible}>
  <div style={{ width: "100px", height: "100px", backgroundColor: "purple" }} />
</AnimatedVisibility>
```
- **Explanation**: This combines a slide-in and fade-in effect for the entrance, and a slide-out and fade-out effect for the exit.

### Example 5: Expand In and Shrink Out
```jsx
<AnimatedVisibility enter={expandIn(100, 100, 500)} exit={shrinkOut(0, 0, 500)} visible={visible}>
  <div style={{ width: "200px", height: "100px", backgroundColor: "orange", textAlign: "center", lineHeight: "100px", color: "white", fontWeight: "bold" }}>
    Expanding Box
  </div>
</AnimatedVisibility>
```
- **Explanation**: This example uses expand-in and shrink-out animations for an element. It grows in size initially and shrinks back when it exits.

---

## Conclusion

**AnimatedReact** provides a simple and flexible way to add smooth animations to your React applications. The library supports a wide range of animations and offers customization for easing, duration, and direction. You can combine multiple animations for more complex transitions and enhance your user interface with ease.

For more advanced configurations and examples, refer to the documentation.

---