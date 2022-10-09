import React, { useEffect } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "../styles/checkout.css";
import { useSelector } from "react-redux";

const Checkout = () => {
  const totalQty = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Informações de pagamento</h6>
              <Form className="billing_form">
                <FormGroup className="form_group">
                  <input type="text" placeholder="Digite seu nome" />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="email" placeholder="Digite seu e-mail" />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="number" placeholder="Número de telefone" />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="text" placeholder="Endereço" />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="text" placeholder="Cidade" />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="text" placeholder="Código postal" />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="text" placeholder="País" />
                </FormGroup>
              </Form>
            </Col>

            <Col lg="4">
              <div className="checkout_cart">
                <h3>Resumo do Pedido</h3>
                <h6>Produtos: <span>{totalQty} items</span></h6>
                <h6>Subtotal: <span>R$ {totalAmount},00</span></h6>
                <h6>
                  <span>Envio: <br />Envio Grátis</span><span>R$ 0</span>
                </h6>
                <h4>Total: <span>R$ {totalAmount},00</span></h4>
                <motion.button whileTap={{ scale: 1.1 }} className="buy_btn auth_btn w-100">Fazer um pedido</motion.button>
                <motion.button whileTap={{ scale: 1.1 }} className="buy_btn auth_btn w-100 mt-3">
                  <Link to="/products">Escolher mais Produtos</Link>
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout;