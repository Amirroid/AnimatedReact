# AnimatedReact

AnimatedReact is a lightweight animation library for React, inspired by Jetpack Compose. It provides a set of simple yet powerful animation functions to enhance UI transitions with ease.

# Intsallation

To install **AnimatedReact**, run:
```bash
npm install animatedreact
```

## Animation Functions

Below is a list of all available animation functions and their parameters:

| Function                | Parameters                                                                 |
|-------------------------|---------------------------------------------------------------------------|
| `fadeIn`                | `duration (ms)`, `initialAlpha (0-1)`, `easing`                          |
| `fadeOut`               | `duration (ms)`, `targetAlpha (0-1)`, `easing`                           |
| `scaleIn`               | `duration (ms)`, `initialScaleX`, `initialScaleY`, `originX`, `originY`, `easing` |
| `scaleOut`              | `duration (ms)`, `targetScaleX`, `targetScaleY`, `originX`, `originY`, `easing`  |
| `expandIn`              | `width`, `height`, `duration (ms)`, `easing`                             |
| `expandInHorizontally`  | `width`, `duration (ms)`, `easing`                                       |
| `expandInVertically`    | `height`, `duration (ms)`, `easing`                                      |
| `shrinkOut`             | `width`, `height`, `duration (ms)`, `easing`                             |
| `shrinkOutHorizontally` | `width`, `duration (ms)`, `easing`                                       |
| `shrinkOutVertically`   | `height`, `duration (ms)`, `easing`                                      |
| `slideIn`               | `xPercentage`, `yPercentage`, `duration (ms)`, `easing`                 |
| `slideOut`              | `xPercentage`, `yPercentage`, `duration (ms)`, `easing`                 |
| `slideInHorizontally`   | `xPercentage`, `duration (ms)`, `easing`                                 |
| `slideInVertically`     | `yPercentage`, `duration (ms)`, `easing`                                 |
| `slideOutHorizontally`   | `xPercentage`, `duration (ms)`, `easing`                                |
| `slideOutVertically`     | `yPercentage`, `duration (ms)`, `easing`                                |
| `blurIn`                | `duration (ms)`, `initialBlur`, `easing`                                |
| `blurOut`               | `duration (ms)`, `targetBlur`, `easing`                                 |
| `combinedIn`            | `animations (array of enter effects)`                                   |
| `combinedOut`           | `animations (array of exit effects)`                                    |

## Easing Configuration

Easing functions control the animation speed curve. The library provides predefined options:

- `Linear`
- `EaseIn`
- `EaseOut`
- `EaseInOut`
- `EnterDefault` (default: `EaseIn`)
- `ExitDefault` (default: `EaseOut`)

For custom easing, you can create your own by using the constructor:
```ts
const customEasing = new Easing("cubic-bezier(0.42, 0, 0.58, 1)");
```

## Usage Examples

### Simple Animations  
```tsx
<AnimatedVisibility enter={enterEffect} exit={exitEffect} visible={visible}>
    <div style={{ width: "100px", height: "100px", backgroundColor: "red" }} />
</AnimatedVisibility>
```

You can replace `enterEffect` and `exitEffect` with any desired animation, for example:  
```tsx
const enterEffect = combinedIn([fadeIn(500, 0, Easing.EaseInOut), blurIn()]);
const exitEffect = combinedOut([fadeOut(), blurOut()]);
```  
Or:  
```tsx
const enterEffect = scaleIn(500, 0);
const exitEffect = scaleOut(500, 0);
```
### AnimatedContent with Dynamic Keys

```tsx
const [count, setCount] = useState(1);

const enter = (previousKey: number, targetKey: number) => {
    return targetKey > previousKey ? combinedIn([slideInVertically(100), fadeIn()]) : combinedIn([slideInVertically(-100), fadeIn()]);
};

const exit = (previousKey: number, targetKey: number) => {
    return targetKey > previousKey ? combinedOut([slideOutVertically(100), fadeOut()]) : combinedOut([slideOutVertically(-100), fadeOut()]);
};

<AnimatedContent enter={enter} exit={exit} currentKey={count}>
    <CounterItem />
</AnimatedContent>


<button onClick={() => handleChange(count + 1)}>
  increase ↑
</button>
<button onClick={() => handleChange(count - 1)}>
  decrease ↓
</button>
```

You can retrieve the key using `useContentKey()`:
```tsx
function CounterItem() {
  const key = useContentKey();
  return <h2>{key}</h2>;
}
```