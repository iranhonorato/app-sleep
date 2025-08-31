import Image from "next/image";
import classes from "../styles/page.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={classes.page}>


      <div className={classes.container}>
        <div className={classes.geral}>
          <div className={classes.text_area}>
            <h1>Título</h1>
            <p>Descrição</p>
          </div>
          <div className={classes.vid_area}>
            <h1>Vídeo</h1>
          </div>
        </div>
      </div>



      <div className={classes.complete_features}>
        <div className={classes.study_description}>
          <h1>Evidências Científicas</h1>
          <p>
            O estudo <a href="https://aaafoundation.org/prevalence-drowsy-driving-crashes-estimates-large-scale-naturalistic-driving-study/?utm_source=chatgpt.com">
            “Prevalence of Drowsy‑Driving Crashes: Estimates from a Large‑Scale Naturalistic Driving Study”, 
            conduzido pela AAA Foundation for Traffic Safety com base no SHRP 2 NDS</a>, teve como propósito
            estimar a verdadeira proporção de acidentes de trânsito envolvidos por sonolência do condutor, 
            identificando casos que frequentemente não são reportados nas estatísticas oficiais. 
            O estudo demonstrou que a sonolência está envolvida significativamente mais em acidentes do que sugere os relatórios oficiais.
            Quando observada de forma objetiva, 8,8–9,5% de todos os acidentes e 10,6–10,8% dos acidentes reportáveis à polícia envolvem sonolência do condutor.
            O método naturalístico com vídeo fornece uma visão mais realista do estado do condutor antes do acidente, enquanto os dados tradicionais (baseados em depoimentos ou relatórios policiais) subestimam esse risco
          </p>
        </div>
        <div className={classes.study_data}>
          <img src="/sono-faixa-etaria.png"/>
          <img src="/sono-genero.png"/>
          <img src="/sono-periodo.png"/>
        </div>
      </div>  
    </div>
  );
}
