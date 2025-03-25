import { createRoot } from 'react-dom/client'
import AnimatedVisibility from './components/AnimatedVisibility'
import { useEffect, useState } from 'react';
import { combinedIn, combinedOut, expandIn, fadeIn, fadeOut, scaleIn, scaleOut, shrinkOut, slideIn, slideInHorizontally, slideOut, slideOutHorizontally } from './effects/effects';
import AnimatedContent from './components/AnimatedContent';
import useContentKey from './hooks/useContentKey';

createRoot(document.getElementById('root')!).render(
  <div>
    <Test />
  </div>
)



function Test() {
  const [visible, setVisible] = useState(false);

  const fadeInAnimation = fadeIn(500, 0);
  const fadeOutAnimation = fadeOut(500, 0);

  const scaleInAnimation = scaleIn(500, 0);
  const scaleOutAnimation = scaleOut(500, 0);

  const slideInAnimation = combinedIn([slideIn(-200, 0, 500), fadeIn(500, 0)]);
  const slideOutAnimation = combinedOut([slideOut(100, 0, 500), fadeOut(500, 0)]);

  const expandInAnimation = expandIn(100, 100, 500);
  const shrinkOutAnimation = shrinkOut(0, 0, 500);
  const [key, setKey] = useState("1");

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => (parseInt(prevKey) + 1).toString());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const enterAnimation = combinedIn([slideInHorizontally(20), fadeIn()])
  const exitAnimation = combinedOut([slideOutHorizontally(-20), fadeOut()])


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

      <AnimatedContent enter={enterAnimation} exit={exitAnimation} currentKey={key}>
        <BannerItem />
      </AnimatedContent>

      <AnimatedVisibility
        enter={combinedIn([fadeIn(500, 0), scaleIn(0.5, 500), slideIn(-50, 0, 500)])}
        exit={combinedOut([fadeOut(500, 0), scaleOut(0.5, 500), slideOut(-50, 0, 500)])}
        visible={visible}
      >
        <div style={{ width: "100px", height: "100px", backgroundColor: "purple" }} />
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
    </div >
  );
}

function BannerItem() {
  const key = useContentKey()
  return <h2>Banner {key}</h2>
}