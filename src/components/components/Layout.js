import React from 'react';
import SideBar from './sideBar';
import ImageCarousel from './imageCarousel';
import MobileProducts from './mobileProducts';
import NavbarOne from './navbarOne';


function Layout() {
  return (
    <>
    <NavbarOne />
    <SideBar/>
    <ImageCarousel/>
    <MobileProducts/>
    </>
  )
}

export default Layout
