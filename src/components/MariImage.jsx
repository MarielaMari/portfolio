import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {
//   faNode,
//   faJs,
//   faReact,
//   faCss,
//   faHtml,
// } from "@fortawesome/free-brands-svg-icons";

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
              gap: "20px",
              width: "100%",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <Image
              src="/javaScript.svg"
              alt="Logo JavaScript"
              width={100}
              height={100}
              style={{
                height: 70,
                width: 70,
                border: "solid",
                borderColor: "black",
                borderRadius: 10,
              }}
            />
            <Image
              src="/reactJS.svg"
              alt="Logo ReactJS"
              width={100}
              height={100}
              style={{
                height: 70,
                width: 70,
                border: "solid",
                borderColor: "black",
                borderRadius: 10,
              }}
            />
            <Image
              src="/nextJS.svg"
              alt="Logo NextJS"
              width={100}
              height={100}
              style={{
                height: 70,
                width: 70,
                border: "solid",
                borderColor: "black",
                borderRadius: 10,
              }}
            />
            <Image
              src="/materialUI.svg"
              alt="Logo MaterialUI"
              width={100}
              height={100}
              style={{
                height: 70,
                width: 70,
                border: "solid",
                borderColor: "black",
                borderRadius: 10,
              }}
            />
            <Image
              src="/reactNative.svg"
              alt="Logo React Native"
              width={100}
              height={100}
              style={{
                height: 70,
                width: 70,
                border: "solid",
                borderColor: "black",
                borderRadius: 10,
              }}
            />
            <Image
              src="/css.svg"
              alt="Logo CSS"
              width={100}
              height={100}
              style={{
                height: 70,
                width: 70,
                border: "solid",
                borderColor: "black",
                borderRadius: 10,
              }}
            />
            <Image
              src="/html.svg"
              alt="Logo HTML"
              width={100}
              height={100}
              style={{
                height: 70,
                width: 70,
                border: "solid",
                borderColor: "black",
                borderRadius: 10,
              }}
            />
            <Image
              src="/nodejs.svg"
              alt="Logo NodeJS"
              width={100}
              height={100}
              style={{ height: 70, width: 70 }}
            />
            <Image
              src="/expressjs.svg"
              alt="Icon ExpressJS"
              width={100}
              height={100}
              style={{
                height: 70,
                width: 90,
                border: "solid",
                borderColor: "black",
                borderRadius: 10,
              }}
            />
            <Image
              src="/postman.svg"
              alt="Logo Postman"
              width={100}
              height={100}
              style={{
                height: 70,
                width: 90,
                border: "solid",
                borderColor: "black",
                borderRadius: 10,
              }}
            />
            <Image
              src="/MongoDBForesGreen.svg"
              alt="Logo MongoDB"
              width={100}
              height={100}
              style={{
                height: 70,
                width: 90,
                border: "solid",
                borderColor: "black",
                borderRadius: 10,
              }}
            />
            <Image
              src="/firebaseLogoBlack.svg"
              alt="Logo Firebase"
              width={100}
              height={100}
              style={{
                height: 70,
                width: 90,
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
