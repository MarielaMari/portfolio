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
            <SocialIcon url={socialMediaLinks.linkedin} />
        
            <SocialIcon url={socialMediaLinks.gitHub} />
       
          </div>
    
    );
  }
}

export default function SocialIcons() {
  return <SocialMediaHandles />;
}
