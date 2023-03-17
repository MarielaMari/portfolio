import HALO from "vanta/dist/vanta.halo.min";
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import * as THREE from "three";

export default function HaloBackground() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const HaloRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        VANTA.HALO({
          el: HaloRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          baseColor: 0xb6aa20,
          backgroundColor: 0x504250,
          amplitudeFactor: 0.9,
          xOffset: -0.05,
          yOffset: -0.31,
          size: 0.1,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={HaloRef} className={styles.container} />;
}
//   return (
//     <div className="vanta-net-container" ref={HaloRef}>
//       <div id="halo"></div>
//     </div>
//   );
// }
