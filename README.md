# AnimatedReact

**AnimatedReact** is a React animation library inspired by Jetpack Compose's `AnimatedVisibility` and `AnimatedContent`. It provides smooth enter and exit transitions using customizable animations like **Fade**, **Scale**, **Slide**, **Expand**, and **Shrink**.

## Installation

```bash
npm install animatedreact
```

## Available Animations

| Animation Type   | Function                    | Description |
|-----------------|----------------------------|-------------|
| **Fade**       | `fadeIn(duration, alpha)`   | Fades in an element |
|                | `fadeOut(duration, alpha)`  | Fades out an element |
| **Scale**      | `scaleIn(duration, x, y)`   | Scales in from an initial size |
|                | `scaleOut(duration, x, y)`  | Scales out to a target size |
| **Expand**     | `expandIn(w, h, duration)`  | Expands width and height |
|                | `expandInHorizontally(w, duration)` | Expands width only |
|                | `expandInVertically(h, duration)` | Expands height only |
| **Shrink**     | `shrinkOut(w, h, duration)` | Shrinks width and height |
|                | `shrinkOutHorizontally(w, duration)` | Shrinks width only |
|                | `shrinkOutVertically(h, duration)` | Shrinks height only |
| **Slide**      | `slideIn(x, y, duration)`   | Slides in from an offset |
|                | `slideOut(x, y, duration)`  | Slides out to an offset |
|                | `slideInHorizontally(x, duration)` | Slides in from horizontal offset |
|                | `slideInVertically(y, duration)` | Slides in from vertical offset |
|                | `slideOutHorizontally(x, duration)` | Slides out horizontally |
|                | `slideOutVertically(y, duration)` | Slides out vertically |
| **Combined**   | `combinedIn([animations])`  | Combines multiple enter animations |
|                | `combinedOut([animations])` | Combines multiple exit animations |

## Usage Examples

### Example 1: Fade In and Fade Out
```jsx
<AnimatedVisibility enter={fadeIn(500)} exit={fadeOut(500)} visible={visible}>
  <div className="box" />
</AnimatedVisibility>
```

### Example 2: Scale In and Scale Out
```jsx
<AnimatedVisibility enter={scaleIn(500)} exit={scaleOut(500)} visible={visible}>
  <div className="box" />
</AnimatedVisibility>
```

### Example 3: Slide In and Slide Out
```jsx
<AnimatedVisibility enter={slideIn(100, 0, 500)} exit={slideOut(100, 0, 500)} visible={visible}>
  <div className="box" />
</AnimatedVisibility>
```

### Example 4: Combined Animations
```jsx
<AnimatedVisibility enter={combinedIn([slideIn(100, 0, 500), fadeIn(500)])} exit={combinedOut([slideOut(100, 0, 500), fadeOut(500)])} visible={visible}>
  <div className="box" />
</AnimatedVisibility>
```

### Example 5: Using AnimatedContent
```jsx
// In page
const [count, setCount] = useState(1);
const handleChange = (newCount) => setCount(newCount);

const enter = (prevKey, currKey) =>
  currKey > prevKey ? combinedIn([slideInVertically(100), fadeIn()]) : combinedIn([slideInVertically(-100), fadeIn()]);
const exit = (prevKey, currKey) =>
  currKey > prevKey ? combinedOut([slideOutVertically(-100), fadeOut()]) : combinedOut([slideOutVertically(100), fadeOut()]);

<AnimatedContent enter={enter} exit={exit} currentKey={count} className="text-3xl font-bold">
  <CounterItem />
</AnimatedContent>

<div className="flex gap-4">
  <button onClick={() => handleChange(count + 1)}>up ↑</button>
  <button onClick={() => handleChange(count - 1)}>down↓</button>
</div>

// A component
function CounterItem() {
  const key = useContentKey();
  return <h2>{key}</h2>;
}
```