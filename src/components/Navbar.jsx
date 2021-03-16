import React from 'react';

function Navbar() {
    return (
        <div className="navigation">
            <div className="navigation-sub">
                <input type="checkbox" id="check"></input>
                <label for="check" className="check-btn">
                    <i class="fas fa-bars"></i>
                </label>
                <img src='mypic.jpg' className="logo-image" alt="My Image" />
                <ul className="menu-items">
                    <li><a href="#home" className="active">Home</a></li>
                    <li><a href="#about" className="menu-item">About</a></li>
                    <li><a href="#projects" className="menu-item">Projects</a></li>
                    <li><a href="#Contact" className="menu-item">Contact</a></li>
                    <li><a href="#Feedback" className="menu-item">Feedback</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;