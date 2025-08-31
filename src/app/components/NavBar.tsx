"use client"; // Marca o componente para ser um Client Component
import classes from "../styles/NavBar.module.css";
import { useState } from "react";

export default function NavBar() {

    return (
        <div className={classes.pai}>
            <div className={classes.logo}>
                <p>foto</p>
            </div>


                <div className={classes.central}>
                    <p>Home</p>
                    <p>About</p>
                    <p>Something</p>
                    <p>Something else</p>
                </div>


            <div className={classes.final}>
                <p>botao</p>
            </div>
        </div>
    );
}
