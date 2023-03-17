import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function ProjectsContent() {
  return (
    <div className={styles.main}>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.content}>
            <h1>Latest Projects</h1>
            <br></br>
            <Image
              src="/p3-web-mobile-home-border.jpg"
              alt="Mountains"
              width={1860}
              height={956}
              priority
            />
            <br></br>
            <br></br>
            <h2>lugo Femina</h2>
            <br></br>
            <div className={styles.contentText}>
              <strong>Purpose: </strong>
              To provide Prevention and Early Intervention in Mental Health.
              <br></br>
              <br></br>
              <strong>Users: </strong>
              Female employees provided with subscription by their employers.
              <br></br>
              <br></br>
              <strong>Platforms: </strong>
              <ul>
                <li>Web Application: used as an administrative tool</li>
                <li>Mobile Application: for the employees</li>
              </ul>
              <br></br>
              <strong>Benefits: </strong>
              <ul>
                <li>Personalized</li>
                <li>Easy access to holistic benefits</li>
              </ul>
              <br></br>
              <strong>Technologies Used: </strong>
              <br></br>
              JavaScript, ReactJS, NodeJS, ExpressJS, Git, MongoDB, Firebase
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.content}>
            <Image
              src="/p2-safety-hazard-home-border.jpg"
              alt="Lights"
              width={1860}
              height={956}
              priority
            />
            <br></br>
            <br></br>
            <h2>Safety Hazards</h2>
            <br></br>
            <div className={styles.contentText}>
            
              <strong>Purpose: </strong>
              Allows people to report safety hazards
              <br></br>
              <br></br>
                <strong>Users: </strong>
              The general public
              <br></br>
              <br></br>
              <strong>Benefits: </strong>
              <ul>
                 <li>
                  Helps local authorities identify and address safety hazards
                  more quickly
                </li>
                <li>
                  Provides a way for citizens to contribute to the safety of
                  their communities
                </li>
               
                <li>
                  Encourages a sense of community involvement and responsibility
                </li>
              </ul>
              <br></br>
              <strong>Technologies Used: </strong>
              <br></br>
              React-Native, ReactJS, NodeJS, ExpressJS, Git, MongoDB, Firebase,
              Trello
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
