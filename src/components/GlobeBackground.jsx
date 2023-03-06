import GLOBE from "vanta/dist/vanta.globe.min";
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import * as THREE from "three";

export default function GlobeBackground() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const GlobeRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        VANTA.GLOBE({
          el: GlobeRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x646493,
          color2: 0xf7dfaa,
          backgroundColor: 0x504250,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={GlobeRef} className={styles.container} />;
}
//   return (
//     <div className="vanta-net-container" ref={GlobeRef}>
//       <div id="halo"></div>
//     </div>
//   );
// }
