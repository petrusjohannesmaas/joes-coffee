import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}