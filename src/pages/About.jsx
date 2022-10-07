import React, { useEffect } from "react";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
//import { Link } from "react-router-dom";
//import { motion } from "framer-motion";
//import heroImg from "../assets/images/hero-img.png";

const About = () => {
  //const year = new Date().getFullYear()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Helmet title="Sobre">
      <CommonSection title="Sobre Nós" />
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              {/*<div className="hero_content">
                <p className="hero_subtitle"></p>
                <h2></h2>
                <p></p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                  <Link to="/shop">Compre agora</Link>
                </motion.button>
              </div>*/}
            </Col>

            <Col lg="6" md="6">
              {/*<div className="hero_img">
                <img src={heroImg} alt="" />
              </div>*/}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default About