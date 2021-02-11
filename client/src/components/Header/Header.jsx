import React from 'react'

const Header = () => (
    <header className="row border-bottom border-white mb-4 p-2">
        <div className="col-md-12">
            <nav className="navbar navbar-expand navbar-dark bg-dark d-flex ">
                <a className="navbar-brand" href="/">Cat Stuff</a>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link text-white" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/catalog">CATalog</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
)

export default Header