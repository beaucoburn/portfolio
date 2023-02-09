import Image from "next/image";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css'
import Qrcode from "../../components/qrcode";

export default function QRCode() {
    return (
        <Qrcode className="container" >
          <h5>
            <Link href="/">Back to home</Link>
          </h5>
          <div className="card text-center" style={{width: '18rem', borderRadius: '15px', backgroundColor: 'white'}}>
            <Image 
              height={576}
              width={576}
              src="/images/image-qr-code.png" 
              className="card-img-top" 
              style={{borderRadius: '15px'}} 
              alt="Frontend Mentor QR" />
            <div className="card-body">
              <h5 className="card-title">Improve your front-end skills by building projects</h5>
              <p className="card-text">  Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
          </div>
      
          <br />
          <div className="attribution center">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="https://www.frontendmentor.io/profile/beaucoburn">Beau Coburn</a>.
          </div>
        </Qrcode>
      );
    }