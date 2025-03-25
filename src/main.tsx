import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import AnimatedVisibility from './components/AnimatedVisibility'
import { FadeIn } from './effects/fade/FadeIn'
import { FadeOut } from './effects/fade/FadeOut'
import { CombinedIn } from './effects/combined/CombinedIn'
import { SlideIn } from './effects/slide/SlideIn'
import { ScaleIn } from './effects/scale/ScaleIn'
import { ScaleOut } from './effects/scale/ScaleOut'
import { SlideOut } from './effects/slide/SlideOut'
import { CombinedOut } from './effects/combined/CombinedOut'

createRoot(document.getElementById('root')!).render(
  <div>
    <Test />
  </div>
)


function Test() {
  const [visible, setVisible] = useState(false);

  const fadeIn = new FadeIn(0, 500);
  const fadeOut = new FadeOut(0, 500);

  const scaleIn = new ScaleIn(0, 500);
  const scaleOut = new ScaleOut(0, 500);

  const slideIn = new CombinedIn([new SlideIn(-100, 0, 500), new FadeIn()]);
  const slideOut = new CombinedOut([new SlideOut(100, 0, 500), new FadeOut()]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
      <button onClick={() => setVisible(!visible)}>Toggle Visible</button>

      <AnimatedVisibility enter={fadeIn} exit={fadeOut} visible={visible}>
        <div style={{ width: "100px", height: "100px", backgroundColor: "red" }} />
      </AnimatedVisibility>

      <AnimatedVisibility enter={scaleIn} exit={scaleOut} visible={visible}>
        <div style={{ width: "100px", height: "100px", backgroundColor: "blue" }} />
      </AnimatedVisibility>

      <AnimatedVisibility enter={slideIn} exit={slideOut} visible={visible}>
        <div style={{ width: "100px", height: "100px", backgroundColor: "green" }} />
      </AnimatedVisibility>

      <AnimatedVisibility
        enter={new CombinedIn([new FadeIn(0, 500), new ScaleIn(0.5, 500), new SlideIn(-50, 0, 500)])}
        exit={new CombinedOut([new FadeOut(0, 500), new ScaleOut(0.5, 500), new SlideOut(-50, 0, 500)])}
        visible={visible}
      >
        <div style={{ width: "100px", height: "100px", backgroundColor: "purple" }} />
      </AnimatedVisibility>
    </div>
  );
}
