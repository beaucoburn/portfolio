import Link from 'next/link';

export default function PortfolioMain() {
    return (
      <div className='container'>
        <h1>Welcome to the Portfolio</h1>
        <h2>
            <Link href="/">Back to home</Link>
        </h2>
        <div className='card'>
             <a href="./qr-code-component-main/index.html">
               <h3>QR Code Card</h3>
             </a>
             <p>A simple card for holding a QR code</p>
          </div>
      </div>
    );
  }