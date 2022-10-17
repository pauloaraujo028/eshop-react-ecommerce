import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../assets/data/products";

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";

import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";

import Clock from "../components/UI/Clock";

import counterImg from "../assets/images/counter-timer-img.png";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear()

  useEffect(() => {
    const filteredTrendingProducts = products.filter(item => item.category === "chair");
    const filteredBestSalesProducts = products.filter(item => item.category === "sofa");
    const filteredMobileProducts = products.filter(item => item.category === "mobile");
    const filteredWirelessProducts = products.filter(item => item.category === "wireless");
    const filteredPopularProducts = products.filter(item => item.category === "watch");

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Helmet title={"Inicio"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle">Produtos em alta {year}</p>
                <h2>Torne seu interior mais minimalista e moderno </h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ab sapiente illo ipsa expedita eius nam temporibus. Minus
                  neque sapiente atque, veniam, velit doloremque quisquam ullam
                  ex beatae provident totam deserunt?
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                  <Link to="/products">Compre agora</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />

      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Produtos em alta</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Mais Vendidos</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer_count">
        <Container>
          <Row>

            <Col lg="6" md="12" className="count_down-col">
              <div className="clock_top-content">
                <h4 className="text-white fs-6 mb-2">Ofertas limitadas</h4>
                <h3 className="text-white fs-5 mb-3">Produtos de Qualidade</h3>
              </div>
              <Clock />
              <motion.button whileTap={{ scale: 1.2 }} className="buy_btn store_btn">
                <Link to="/products">Compre Agora</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="12" className="text-end counter_img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new_arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Novos Produtos</h2>
            </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular_category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section_title">Popular na Categoria</h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>

    </Helmet>
  )
};

export default Home;