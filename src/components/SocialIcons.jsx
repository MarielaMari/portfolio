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
    //   <div className={styles.containerSocialMedia}>
          <div className={styles.column}>
            {/* <ul className={styles.socialHandleList}>
        <li className={styles.socialHandleItem}> */}
            <SocialIcon url={socialMediaLinks.linkedin} />
            {/* </li> */}
            {/* <li className={styles.socialHandleItem}> */}
            <SocialIcon url={socialMediaLinks.gitHub} />
            {/* </li>
      </ul> */}
          </div>
    //   </div>
    );
  }
}

export default function SocialIcons() {
  return <SocialMediaHandles />;
}
