import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import styles from "@/styles/Home.module.css";

const socialMediaLinks = {
  gitHub: "https://github.com/MarielaMari",
  linkedin: "https://www.linkedin.com/in/marielamihilova/",
};

class SocialMediaHandles extends Component {
  render() {
    return (
      <div className={styles.rowSocialMedia}>
        <SocialIcon
          url={socialMediaLinks.linkedin}
          style={{ height: "5vw", width: "5vw" }}
        />

        <SocialIcon
          url={socialMediaLinks.gitHub}
          style={{ height: "5vw", width: "5vw" }}
        />
      </div>
    );
  }
}

export default function SocialIcons() {
  return <SocialMediaHandles />;
}
