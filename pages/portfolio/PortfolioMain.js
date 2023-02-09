import Link from 'next/link';

export default function PortfolioMain() {
    return (
      <div className='container'>
        <h1>Welcome to the Portfolio</h1>
        <h3>
            <Link href="/">Back to home</Link>
        </h3>
        <div className='card'>
             <Link href="./QRCode">
               <h3>QR Code Card</h3>
             </Link>
             <p>A simple card for holding a QR code</p>
          </div>
      </div>
    );
  }