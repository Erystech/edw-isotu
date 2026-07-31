// src/components/layout/RootLayout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { PageTransition } from '../animations';
import ScrollToTop from '../animations/ScrollToTop';

export default function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar transparent />
      <main>
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}