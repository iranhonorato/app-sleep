"use client"; // Marca o componente para ser um Client Component
import classes from "../styles/NavBar.module.css";
import { useState } from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar o menu

 
    const toggleMenu = () => {
    setIsOpen(!isOpen); 
    };
    
    return (
        <div className={classes.pai}>
            <div className={classes.logo}>
                <a  
                    href="https://www.qualcomm.com/developer/events/edge-ai-developer-hackathon/brazil"
                    target="_blank"
                    rel="noopener noreferrer">
                    <p>Edge AI Developer Hackathon</p>
                </a>
            </div>


            <div className={`${classes.central} ${isOpen ? classes.menuActive : ""}`}>
                <p>Home</p>
                <p>About</p>
                <p>Developers</p>
            </div>

            <div className={classes.final} onClick={toggleMenu}>
                ☰ 
            </div>
        </div>
    );
}
