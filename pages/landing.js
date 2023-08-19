import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";
import Icon from "@material-ui/core/Icon";
import { useRef } from 'react';



import styles from "/styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "/pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "/pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "/pages-sections/LandingPage-Sections/WorkSection.js";
import SectionCarousel from "/pages-sections/Components-Sections/SectionCarousel.js";
import { Grid, Typography } from "@material-ui/core";
import PlantasCarousel from "../pages-sections/Components-Sections/PlantsCarrousel";


// import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const scrollToSection = (ref) => {
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: 'smooth'
  });
};

const MyComponent = () => {
  const sectionRef = useRef(null);
   }

  const handleClick = () => {
    scrollToSection(sectionRef);
  };

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div id='Inicio'>
      < Header
        color="transparent"
        routes={dashboardRoutes}
        // brand="Jireh"
        image="/img/jirehlogo.png"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "warning"
        }}
        {...rest}
      />
      <Parallax  filter responsive image="/img/fundo.jpeg" >
        <div  className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Qualidade de vida e segurança para toda sua família!</h1>
              <h4>
                Viva perto da natureza e da cidade.
              </h4>
              <br />
              {/* <Button
                color="warning"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Conheça
              </Button> */}
              <GridItem xs={12} sm={2} className={classes.marginLeft}>
                <Button
                color="warning"
                href="https://wa.me/5511996430891"
                size="lg">

              <h4>WhatsApp</h4>
              <img
                src="img/faces/wpp.png" 
                alt="wpp"
                width={50}
                height={50}
                
                className={classes.imgRoundedCircle + " " + classes.imgFluid}
                />
                </Button>
            </GridItem>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax >
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div id='Curuca' className={classes.container}>
          <ProductSection />
          <div id='Fotos'>
          <SectionCarousel/>
          </div>
          <GridContainer justify="center" >

        <GridItem justify="center" style={{color:'#3C4858'}} xs={12} sm={12} md={10} >
          <h2 className={classes.title} style={{color:'#3C4858'}}>Localização</h2>
          <h5 className={classes.description}>
          Venha morar no Centro Alto de Ribeirão Pires!! Os apartamentos do Residencial Açores são perfeitos para você e sua família, com Suíte e Sacada Grill. Não perca essa oportunidade!
          </h5>
        </GridItem>
          </GridContainer>
          <GridContainer justify="center"> 

          <Grid xs={10} sm={6} md={4}>
          <div   id='Localizacao' > 
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4123.765519420179!2d-46.420197811690464!3d-23.71577473747562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6ceb8ff9efef%3A0x55c00325dc5d9df1!2sR.%20Ov%C3%ADdio%20Abrantes%2C%20257%20-%20Centro%20Alto%2C%20Ribeir%C3%A3o%20Pires%20-%20SP%2C%2009424-150!5e1!3m2!1spt-BR!2sbr!4v1691682655017!5m2!1spt-BR!2sbr"
                  width="300" 
                  height="300" 
                  style={{border:0}} 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
                  </Grid>
                  </GridContainer>
                  <GridContainer justify="center" >

<GridItem justify="center" style={{color:'#3C4858'}} xs={12} sm={12} md={8} >
  <h2 className={classes.title} style={{color:'#3C4858'}}>Plantas</h2>
  <h5 className={classes.description}>
  O Residencial Açores contará com apartamentos de 2 e 3 dormitórios em Ribeirão Pires distribuídos em plantas de 82m² e 88m². 
  </h5>
</GridItem>
  </GridContainer>
  <GridContainer justify="center"> 

  <Grid xs={12} sm={12} md={4}>
          </Grid>
          </GridContainer>
          <div>
            
          <PlantasCarousel>

          </PlantasCarousel>
          </div>
          <WorkSection/>
        </div>
      </div>
      <div id='Contato'>
      <  Footer />
      </div>
    </div>
  );
}
