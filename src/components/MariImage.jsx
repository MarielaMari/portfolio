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
          <strong>Tech Stack:</strong>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.8vw",
              marginBottom: "4vw",
              width: "100%",
              maxWidth: "800vw",
              margin: "0 auto",
            }}
          >
            <Image
              src="/JavaScript.svg"
              alt="Logo JavaScript"
              width={70}
              height={70}
              style={{
                height: "4vw",
                width: "4vw",
                border: "solid",
                borderColor: "black",
                borderRadius: 10,
              }}
            />
            <Image
              src="/reactJS.svg"
              alt="Logo ReactJS"
              width={50}
              height={50}
              style={{
                height: "4vw",
                width: "4vw",
                border: "solid",
                borderColor: "black",
                borderRadius: 10,
              }}
            />
            <Image
              src="/nextJS.svg"
              alt="Logo NextJS"
              width={50}
              height={50}
              style={{
                height: "4vw",
                width: "4vw",
                border: "solid",
                borderColor: "black",
                borderRadius: 10,
              }}
            />
            <Image
              src="/materialUI.svg"
              alt="Logo MaterialUI"
              width={50}
              height={50}
              style={{
                height: "4vw",
                width: "4vw",
                border: "solid",
                borderColor: "black",
                borderRadius: 10,
              }}
            />
            <Image
              src="/reactNative.svg"
              alt="Logo React Native"
              width={50}
              height={50}
              style={{
                height: "4vw",
                width: "4vw",
                border: "solid",
                borderColor: "black",
                borderRadius: 10,
              }}
            />
            <Image
              src="/css.svg"
              alt="Logo CSS"
              width={50}
              height={50}
              style={{
                height: "4vw",
                width: "4vw",
                border: "solid",
                borderColor: "black",
                borderRadius: 10,
              }}
            />
            <Image
              src="/html.svg"
              alt="Logo HTML"
              width={50}
              height={50}
              style={{
                height: "4vw",
                width: "4vw",
                border: "solid",
                borderColor: "black",
                borderRadius: 10,
              }}
            />
            <Image
              src="/nodejs.svg"
              alt="Logo NodeJS"
              width={50}
              height={50}
              style={{ height: "4vw", width: "4vw" }}
            />
            <Image
              src="/expressjs.svg"
              alt="Icon ExpressJS"
              width={50}
              height={50}
              style={{
                height: "4vw",
                width: "4vw",
                border: "solid",
                borderColor: "black",
                borderRadius: 10,
              }}
            />
            <Image
              src="/postman.svg"
              alt="Logo Postman"
              width={50}
              height={50}
              style={{
                height: "4vw",
                width: "4vw",
                border: "solid",
                borderColor: "black",
                borderRadius: 10,
              }}
            />
            <Image
              src="/MongoDBForesGreen.svg"
              alt="Logo MongoDB"
              width={50}
              height={50}
              style={{
                height: "4vw",
                width: "4vw",
                border: "solid",
                borderColor: "black",
                borderRadius: 10,
              }}
            />
            <Image
              src="/firebaseLogoBlack.svg"
              alt="Logo Firebase"
              width={50}
              height={50}
              style={{
                height: "4vw",
                width: "4vw",
                border: "solid",
                borderColor: "black",
                borderRadius: 10,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
