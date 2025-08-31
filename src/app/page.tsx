import Image from "next/image";
import classes from "../styles/page.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={classes.page}>
      <NavBar />
      <div className={classes.geral}>
        <div className={classes.text_area}>
          <p>Área destinada para texto</p>
        </div>
        <div className={classes.vid_area}>
          <p>Área destinada para vídeo</p>
        </div>
      </div>
      <div className={classes.complete_features}>
        <div className={classes.description_features}>
          <p>Descricaoooooooooooooooooooooooooo</p>
        </div>
        <div className={classes.features}>
          <div>a0</div>
          <div>a1</div>
          <div>a2</div>
          <div>a3</div>
          <div>a4</div>
          <div>a5</div>
          <div>a6</div>
          <div>a7</div>
          <div>a8</div>
          <div>a9</div>
        </div>
      </div>  
      <Footer/>
    </div>
  );
}
