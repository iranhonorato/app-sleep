import classes from "../styles/Footer.module.css"


export default function Footer() {
    return(
        <div className={classes.pai}>
            <div className={classes.sub_pai_upper}>
                <div className={classes.logo}>
                    <a  
                        href="https://www.insper.edu.br/pt/pesquisa/centro-de-gestao-e-politicas-publicas/metricis"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img src="/logo_footer.png.webp" />
                    </a>
                </div>
                <div className={classes.infos}>
                    <div className={classes.col1}>
                        <a href="https://www.insper.edu.br/pt/cursos">Cursos</a>
                        <a href="https://www.insper.edu.br/pt/quem-somos">Quem Somos</a>
                        <a href="https://www.insper.edu.br/pt/transformacao">Comunidade Transforme</a>
                    </div>
                    <div className={classes.col2}>
                        <a href="https://www.insper.edu.br/pt/campus">Campus</a>
                        <a href="https://www.insper.edu.br/pt/cursos/diplomas">Consulta de Registro de Diplomas</a>
                        <a href="https://www.insper.edu.br/pt/cursos/graduacao/informacoes-academicas">Informações Acadêmicas</a>
                    </div>
                    <div className={classes.col3}>
                        <a href="https://www.insper.edu.br/pt/atendimento">Fale Conosco</a>
                        <a href="https://www.insper.edu.br/pt/atendimento/visite-o-insper">Visite o Insper</a>
                        <a href="https://www.insper.edu.br/pt/atendimento/portal-da-privacidade">Portal Privacidade</a>
                    </div>
                    <div className={classes.col4}>
                        <div>
                            <p>Consulte aqui o cadastro</p>
                            <p>da Instituição no sistema</p>
                            <p>e-MEC.</p>
                        </div>
                        <a 
                        href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MTE2MQ=="
                        target="_blank">
                            <img src="/e-mec.png"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}