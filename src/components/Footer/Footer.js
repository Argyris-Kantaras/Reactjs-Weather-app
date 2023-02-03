import gitIcon from "../../icons/github-icon.png";
import netlifyIcon from "../../icons/netlify-icon.png";
import linkedInIcon from "../../icons/linkedin-logo.png";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <h5 className={styles.contactMeContainer}>Contact info:</h5>
        <span
          onClick={() => window.open("https://github.com/Argyris-Kantaras")}
        >
          <img src={gitIcon} />
        </span>
        <span
          onClick={() =>
            window.open("https://app.netlify.com/teams/argyris-kantaras/sites")
          }
        >
          <img src={netlifyIcon} />
        </span>
        <span
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/argyris-kantaras-291277219/"
            )
          }
        >
          <img src={linkedInIcon} />
        </span>
      </div>
      <p>&copy; This app was created by Anargyros Kantaras!!</p>
    </div>
  );
}

export default Footer;

//43.4487399 24.5761951
//33.832213+12.387099
