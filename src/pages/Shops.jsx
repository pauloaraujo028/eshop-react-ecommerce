import React, { useEffect } from "react";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
//import { Link } from "react-router-dom";
//import { motion } from "framer-motion";
//import heroImg from "../assets/images/hero-img.png";

const Shops = () => {
  //const year = new Date().getFullYear()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Helmet title="Lojas">
      <CommonSection title="Conheça nossas Lojas" />
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              {/*<div className="hero_content">
                <p className="hero_subtitle">Produtos em alta {year}</p>
                <h2>Torne seu interior mais minimalista e moderno </h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ab sapiente illo ipsa expedita eius nam temporibus. Minus
                  neque sapiente atque, veniam, velit doloremque quisquam ullam
                  ex beatae provident totam deserunt?
                </p>

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

export default Shops;