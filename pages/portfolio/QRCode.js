import Image from "next/image";
import Link from "next/link";
//import 'bootstrap/dist/css/bootstrap.css'
import styles from "../../components/qrcode.module.css";


export default function QRCode() {
    return (
        <div className={styles.container} >
          <h5>
            <Link href="/">Back to home</Link>
          </h5>
          <div className={styles.qrcard} >
            <Image 
              height={576}
              width={576}
              src="/images/image-qr-code.png" 
              className={styles.cardImgTop}
              alt="Frontend Mentor QR" />
            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>Improve your front-end skills by building projects</h5>
              <p className={styles.cardText}>  Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
          </div>
      
          <br />
          <div className="attribution center">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="https://www.frontendmentor.io/profile/beaucoburn">Beau Coburn</a>.
          </div>
        </div>
      );
    }