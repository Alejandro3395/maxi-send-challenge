import styles from "./Footer.module.css";
import facebookLogo from "../../assets/social/facebook-white.svg";
import instagramLogo from "../../assets/social/instagram-white.svg";
import twitterLogo from "../../assets/social/twitter-white.svg";
import appStoreLogo from "../../assets/store/app-store.svg";
import playStoreLogo from "../../assets/store/play-store.svg";
import windowsStoreLogo from "../../assets/store/windows-store.svg";

function Footer() {
  const footerLinks = [
    "Home",
    "Terms and Conditions",
    "Privacy Policy",
    "Collection Statement",
    "Help",
    "Manage Account",
  ];

  const linksList = footerLinks.map((linkLabel, index) => {
    return index === 0 ? <span key={linkLabel}>{linkLabel}</span> : <span key={linkLabel}> <span key={linkLabel} className={styles.divider}>|</span> {linkLabel}</span>;
  });

  return (
    <div className={styles.footer}>
      <div className={styles.mainSection}>
        <div className={styles.linksContainer}>{linksList}</div>
        <div className={styles.copyrightContainer}>
          <p>Copyright &copy; 2016 DEMO Streaming. All Rights Reserved</p>
        </div>
      </div>
      <div className={styles.subSection}>
        <div className={styles.socialContainer}>
          <img className={styles.socialLogo} src={facebookLogo} alt="facebook logo"></img>
          <img className={styles.socialLogo} src={twitterLogo} alt="twitterLogo"></img>
          <img className={styles.socialLogo} src={instagramLogo} alt="instagram logo"></img>
        </div>
        <div className={styles.storeContainer}>
          <img className={styles.storeLogo} src={appStoreLogo} alt="App store logo"></img>
          <img className={styles.storeLogo} src={playStoreLogo} alt="Play store logo"></img>
          <img className={styles.storeLogo} src={windowsStoreLogo} alt="Windows store logo"></img>
        </div>
      </div>
    </div>
  );
}

export default Footer;
