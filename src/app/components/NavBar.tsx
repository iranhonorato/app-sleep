"use client"; // Marca o componente para ser um Client Component
import classes from "../styles/NavBar.module.css";
import { useState } from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classes.pai}>
            <div className={classes.logo}>
                <p>foto</p>
            </div>

            {/* Menu Hamburger */}
            <div className={classes.hamburger} onClick={() => setIsOpen(!isOpen)}>
                ☰
            </div>

            {/* Menu Central */}
            <div className={`${classes.menu} ${isOpen ? classes.active : ""}`}>
                <div className={classes.central}>
                    <p>Home</p>
                    <p>About</p>
                    <p>Something</p>
                    <p>Something else</p>
                </div>
            </div>

            {/* Botão Final */}
            <div className={classes.final}>
                <p>botao</p>
            </div>
        </div>
    );
}
