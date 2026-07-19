// src/components/layout/RootLayout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; //
import Footer from './Footer'; //[cite: 2]

export default function RootLayout() {
  return (
    <>
      <Navbar transparent />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
}