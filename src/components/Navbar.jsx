import '../styles/navbar-styles.css'

function Navbar() {
    return (
        <>
            <nav id='navbar'>
                <div id='logo'>
                    <p>&lt;</p>
                    <p>GC</p>
                    <p>&gt;</p>
                </div>
                <section id='nav-links'>
                    <div className='nav-link'>
                        <a>About</a>
                    </div>
                    <div className='nav-link'>
                        <a>Projects</a>
                    </div>
                </section>
            </nav>
            <nav id='mobile-nav' >
                <div id='hamburger-nav'>
                    <div id='bar-one'/>
                    <div id='bar-two'/>
                </div>
            </nav>
        </>
    )
}

export default Navbar