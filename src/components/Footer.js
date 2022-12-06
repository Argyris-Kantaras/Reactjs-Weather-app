import gitIcon from "../icons/github-icon.png";
import netlifyIcon from "../icons/netlify-icon.png";
import linkedInIcon from "../icons/linkedin-logo.png";
import styles from "../css modules/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        &copy; This app was created for learning and showcase purposed by
        Anargyros Kantaras. Please do not claim as your own! Thanks!!!
      </p>
      <div className={styles.links}>
        <h5 className={styles.contactMeContainer}>Contact me</h5>
        <span
          onClick={() => window.open("https://github.com/Argyris-Kantaras")}
        >
          Github <img src={gitIcon} />
        </span>
        <span
          onClick={() =>
            window.open("https://app.netlify.com/teams/argyris-kantaras/sites")
          }
        >
          Netlify <img src={netlifyIcon} />
        </span>
        <span
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/argyris-kantaras-291277219/"
            )
          }
        >
          LinkedIn <img src={linkedInIcon} />
        </span>
      </div>
    </div>
  );
}

export default Footer;

//43.4487399 24.5761951
//33.832213+12.387099
