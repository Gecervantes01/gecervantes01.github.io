import { useState } from 'react';
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'
import MobileNavMenu from './MobileNavMenu';
import '../styles/navbar-styles.css'

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
        console.log(menuOpen)
    }

    return (
        <nav>
            <DesktopNav/>
            <div id='mobile-nav' onClick={toggleMenu}>
                <MobileNav className={menuOpen? 'menu-open': ''}/>
                {menuOpen && <MobileNavMenu/>}
            </div>
        </nav>
    )
}

export default Nav