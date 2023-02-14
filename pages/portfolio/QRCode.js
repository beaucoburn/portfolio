import Image from "next/image";
import Link from "next/link";
import styles from "../../components/qrcode.module.css";

export default function QRCode({ Component, pageProps }) {
    return (
        <div className={styles.container} >
          <h3>
            <Link href="/">Back to home</Link>
          </h3>
          <div className={styles.qrcard} >
            <Image 
              height={576}
              width={576}
              src="/images/image-qr-code.png" 
              className={styles.cardImgTop}
              alt="Frontend Mentor QR" />
            <div className={styles.cardBody}>
              <h5 style={{ fontFamily:'Outfit', fontSize:'20px', weight:'700' }}>Improve your front-end skills by building projects</h5>
              <p style={{ fontFamily:'Outfit', fontSize:'15px', weight:'400' }}>  Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
          </div>
      
          <br />
          <div className={styles.attribution}>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="https://www.frontendmentor.io/profile/beaucoburn">Beau Coburn</a>.
          </div>
        </div>
      );
    }