import React from 'react'
import { Link } from 'react-router-dom';
import styles from './PageNav.module.css';
import Logo from './Logo';


function PageNav() {
  return (
<nav className={styles.nav}>
  <Logo/>
    <ul>
        <ul >
            <li>
            <Link to='/' >Home</Link>
            </li>
            <li>
            <Link to='/product' >Product</Link>
            </li>
            <li>
            <Link to='/pricing' >Pricing</Link>
            </li>
            <li>
            <Link to='/login' >Log-In</Link>
            </li>
        </ul>
    </ul>
</nav>
  )
}

export default PageNav