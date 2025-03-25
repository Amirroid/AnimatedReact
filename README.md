# AnimatedReact Library

A collection of animation effects for React components to add smooth transitions like fade, scale, slide, and expand. Ideal for controlling visibility or content transitions.

## Available Animations

| Animation                | Description                                                       | Parameters                                                       |
|--------------------------|-------------------------------------------------------------------|------------------------------------------------------------------|
| **ScaleIn**              | Scales the element from an initial scale to its normal size.      | `duration`, `initialScaleX`, `initialScaleY`, `easing`           |
| **ScaleOut**             | Scales the element from its current size to a target scale.      | `duration`, `targetScaleX`, `targetScaleY`, `easing`            |
| **ExpandIn**             | Expands the element based on width and height percentage.        | `widthPercentage`, `heightPercentage`, `duration`, `easing`      |
| **ShrinkOut**            | Shrinks the element based on width and height percentage.        | `widthPercentage`, `heightPercentage`, `duration`, `easing`      |
| **SlideIn**              | Slides the element in from a specified direction.                 | `xPercentage`, `yPercentage`, `duration`, `easing`              |
| **SlideOut**             | Slides the element out to a specified direction.                  | `xPercentage`, `yPercentage`, `duration`, `easing`              |
| **FadeIn**               | Fades the element in from an initial opacity.                     | `duration`, `initialAlpha`, `easing`                             |
| **FadeOut**              | Fades the element out to a target opacity.                        | `duration`, `targetAlpha`, `easing`                              |

## Usage Example

### `AnimatedVisibility`

This component allows you to animate the visibility of an element using the available animations.

```tsx
import { useState } from 'react';
import { AnimatedVisibility } from 'animated-react';
import { fadeIn, fadeOut, scaleIn, scaleOut } from './effects/effects';

function ExampleComponent() {
  const [visible, setVisible] = useState(false);

  const fadeInAnimation = fadeIn(500, 0);
  const fadeOutAnimation = fadeOut(500, 0);
  const scaleInAnimation = scaleIn(500, 0);
  const scaleOutAnimation = scaleOut(500, 0);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Toggle Visibility</button>
      
      <AnimatedVisibility enter={fadeInAnimation} exit={fadeOutAnimation} visible={visible}>
        <div style={{ width: "100px", height: "100px", backgroundColor: "red" }} />
      </AnimatedVisibility>

      <AnimatedVisibility enter={scaleInAnimation} exit={scaleOutAnimation} visible={visible}>
        <div style={{ width: "100px", height: "100px", backgroundColor: "blue" }} />
      </AnimatedVisibility>
    </div>
  );
}
```

This will show or hide the elements with smooth animations when the visibility is toggled.