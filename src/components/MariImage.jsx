import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function MariImage() {
  return (
    <div className={styles.containerMariImage}>
      <Image
        src="/mari-avatar.jpg"
        alt="Avatar"
        className={styles.imageMari}
        width={299}
        height={321}
      />
      <div className={styles.overlayMariImage}>
        <div className={styles.textMariImage}>
          Hello!
          <br></br>I am Mari{" "}
        </div>
      </div>
    </div>
  );
}
