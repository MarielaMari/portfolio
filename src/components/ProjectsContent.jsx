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
                  <strong>Platforms: </strong>
                  <ul>
                    <li>Web Application: used as an administrative tool</li>
                    <li>Mobile Application: for the employees</li>
                  </ul>
                  <strong>Users: </strong>
                  For employees of companies that have subscription to the
                  mobile app
                  <br></br>
                  <strong>Purpose: </strong>
                  To provide employees with Prevention and Early Intervention in
                  Mental Health.
                  <br></br>
                  <strong>Benefits: </strong>
                  <ul>
                    <li>Personalized</li>
                    <li>Easy access to holistic benefits for employees</li>
                    <li>
                      Encourages a sense of community involvement and
                      responsibility
                    </li>
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
                  <strong>Users: </strong>
                  The general public
                  <br></br>
                  <strong>Purpose: </strong>
                  Allows people to report safety hazards
                  <br></br>
                  <strong>Benefits: </strong>
                  <ul>
                    <li>
                      Provides a way for citizens to contribute to the safety of
                      their communities
                    </li>
                    <li>
                      Helps local authorities identify and address safety
                      hazards more quickly
                    </li>
                    <li>
                      Encourages a sense of community involvement and
                      responsibility
                    </li>
                  </ul>
                  <br></br>
                  <strong>Technologies Used: </strong>
                  <br></br>
                  React-Native, ReactJS, NodeJS, ExpressJS, Git, MongoDB,
                  Firebase, Trello
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}
