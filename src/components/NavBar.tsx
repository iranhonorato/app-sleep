"use client"; // Marca o componente para ser um Client Component
import classes from "../styles/NavBar.module.css";

export default function NavBar() {

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


            <div className={classes.central}>
                <p>Home</p>
                <p>About</p>
                <p>Developers</p>
            </div>

            <div className={classes.final}>
                ☰ 
            </div>
        </div>
    );
}
