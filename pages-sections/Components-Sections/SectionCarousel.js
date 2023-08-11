import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel sx={{ width: "100%", height: "100%" }}>
              <Carousel {...settings}>
                <div>
                  <img
                    src="/img/academia.JPG"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Academia
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src="/img/quarto1.jpeg"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      quarto 1
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src="/img/quarto2.jpeg"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Quarto 2
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src="/img/quarto3.jpeg"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />          
                      Quarto 3
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src="/img/sacada.JPG"
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      sacada
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src="/img/sala.JPG"
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Sala
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src="/img/salao.JPG"
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Salão
                    </h4>
                  </div>
                </div>









              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>                                                                                                                                                        
      </div>
    </div>
  );
}
