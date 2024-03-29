import React from "react";
import ReactDOM from "react-dom";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Footer from "@/components/Footer";
import GlobeBackground from "@/components/GlobeBackground";
import HaloBackground from "@/components/HaloBackground";
import ProjectsContent from "@/components/ProjectsContent";
import SocialIcons from "@/components/SocialIcons";
import MariImage from "@/components/MariImage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.globe}>
          <GlobeBackground />
        </div>
        <div className={styles.hi}>
          <p className={styles.hiText}>Hi, I am Mari!</p>
        </div>
        <div>
          <MariImage />
        </div>
        <div className={styles.contentContainer}>
          <p className={styles.aboutMe}>
            <br /> <br />
            Full Stack Developer,
            <br />
            based in Calgary
            <br /> <br />
          </p>
          <div>
            <SocialIcons />
          </div>
        </div>
        <ProjectsContent />
        <div className={styles.vantaHaloContainer}>
          <div className={styles.halo}>
            <HaloBackground />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
