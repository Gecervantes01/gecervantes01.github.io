function DesktopNav() {
    return (
        <>
            <div id='navbar'>
                <div id='logo'>
                    <p>&lt;</p>
                    <p>GC</p>
                    <p>&gt;</p>
                </div>
                <section id='nav-links'>
                    <div className='nav-link'>
                        <a href='#about'>About</a>
                    </div>
                    <div className='nav-link'>
                        <a href="#projects">Projects</a>
                    </div>
                    <div className='nav-link'>
                        <a href='#resume'>Resume</a>
                    </div>
                </section>
            </div>
        </>
    )
}

export default DesktopNav