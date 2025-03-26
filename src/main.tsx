import { createRoot } from 'react-dom/client'
import AnimatedVisibility from './components/visibility/AnimatedVisibility'
import { useState } from 'react';
import { blurIn, blurOut, combinedIn, combinedOut, expandIn, fadeIn, fadeOut, scaleIn, scaleOut, shrinkOut, slideIn, slideInVertically, slideOut, slideOutVertically } from './effects/effects';
import AnimatedContent from './components/content/AnimatedContent';
import useContentKey from './hooks/useContentKey';
import Easing from './core/easing/Easing';

createRoot(document.getElementById('root')!).render(
  <div>
    <Test />
  </div>
)



function Test() {
  const [visible, setVisible] = useState(false);

  const fadeInAnimation = combinedIn([fadeIn(500, 0, Easing.EaseInOut), blurIn()]);
  const fadeOutAnimation = combinedOut([fadeOut(), blurOut()]);

  const scaleInAnimation = scaleIn(500, 0);
  const scaleOutAnimation = scaleOut(500, 0);

  const [count, setCount] = useState(1);

  const handleChange = (newCount: number) => {
    setCount(newCount);
  };

  const enter = (previousKey: number, targetKey: number) => {
    return targetKey > previousKey ? combinedIn([slideInVertically(100), fadeIn()]) : combinedIn([slideInVertically(-100), fadeIn()]);
  };

  const exit = (previousKey: number, targetKey: number) => {
    return targetKey > previousKey ? combinedOut([slideOutVertically(100), fadeOut()]) : combinedOut([slideOutVertically(-100), fadeOut()]);
  };

  const slideInAnimation = combinedIn([slideIn(-200, 0, 500), fadeIn(500, 0)]);
  const slideOutAnimation = combinedOut([slideOut(100, 0, 500), fadeOut(500, 0)]);

  const expandInAnimation = combinedIn([fadeIn(), expandIn(0, 0, 500, Easing.EaseIn)]);
  const shrinkOutAnimation = combinedOut([shrinkOut(0, 0, 500, Easing.Linear), fadeOut()]);


  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
      <button onClick={() => setVisible(!visible)}>Toggle Visible</button>

      <AnimatedVisibility enter={fadeInAnimation} exit={fadeOutAnimation} visible={visible}>
        <div style={{ width: "100px", height: "100px", backgroundColor: "red" }} />
      </AnimatedVisibility>

      <AnimatedVisibility enter={scaleInAnimation} exit={scaleOutAnimation} visible={visible}>
        <div style={{ width: "100px", height: "100px", backgroundColor: "blue" }} />
      </AnimatedVisibility>

      <AnimatedVisibility enter={slideInAnimation} exit={slideOutAnimation} visible={visible}>
        <div style={{ width: "100px", height: "100px", backgroundColor: "green" }} />
      </AnimatedVisibility>

      <AnimatedVisibility enter={expandInAnimation} exit={shrinkOutAnimation} visible={visible}>
        <div
          style={{
            width: "200px",
            height: "100px",
            backgroundColor: "orange",
            textAlign: "center",
            lineHeight: "100px",
            color: "white",
            fontWeight: "bold",
            overflow: "hidden",
          }}
        >
          Expanding Box
        </div>
      </AnimatedVisibility>

      <AnimatedContent enter={enter} exit={exit} currentKey={count}>
        <CounterItem />
      </AnimatedContent>

      <div className="flex gap-4">
        <button onClick={() => handleChange(count + 1)}>
          up ↑
        </button>
        <button onClick={() => handleChange(count - 1)}>
          down↓
        </button>
      </div>

      <AnimatedVisibility
        enter={combinedIn([fadeIn(500, 0), scaleIn(0.5, 500), slideIn(-50, 0, 500)])}
        exit={combinedOut([fadeOut(500, 0), scaleOut(0.5, 500), slideOut(-50, 0, 500)])}
        visible={visible}
      >
        <div style={{ width: "100px", height: "100px", backgroundColor: "purple" }} />
      </AnimatedVisibility>
    </div >
  );
}

function CounterItem() {
  const key = useContentKey()
  return <h2>{key}</h2>
}