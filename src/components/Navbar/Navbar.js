import React from 'react';
import './Navbar.css';
import { MenuItems } from "./MenuItems";

class Navbar extends React.Component {
    /* state to check if the hamburger menu was clicked or not */
    state = { clicked: false }
    
    /* Reference handleclick from div with navIcon class to turn clicked state to opposite of current value if icon is clicked */
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        return(
            <nav className="navItems">
                <h1 className="navLogo"> Eric Cen </h1>
                <div className="navIcon" onClick= { this.handleClick }>
                    {/* Ternary operator: if icon is clicked, menu opens and we replace with X icon. if not clicked, it stays as hamburger menu icon */}
                    <i className = { this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}> </i>
                </div>
                {/* Depending on clicked state, either show normal menu styling or mobile styling */}
                <ul className={ this.state.clicked ? 'navMenu active' : 'navMenu'}>
                     {/* Map the MenuItems so we can individually use each object in the const with navItem */}
                    {MenuItems.map((navItem) => {
                        return (
                            <li key={ navItem.id }> <a className={ navItem.class } href={ navItem.url }> { navItem.title }  </a> </li> 
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;