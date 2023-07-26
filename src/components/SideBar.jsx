import React from 'react';
import styles from'./Sidebar.module.css'
import AppNav from './AppNav';
import Logo from './Logo';
import { Outlet } from 'react-router-dom';

function SideBar() {
  return (
    <div className={styles.sidebar}>
<Logo/>
<AppNav/>
<Outlet/>
<footer className={styles.footer}> &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.</footer>
    </div>
  )
}

export default SideBar