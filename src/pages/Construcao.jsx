// import { Container } from "reactstrap"
// import background from "../assets/backgroundConstrucao.png";
import IconLogo from "@/assets/iconLogo.png";

// import BsInstagram from 'react-icons/lib/bs/instagram'
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";

import { Col, Container, Row } from "reactstrap";

export function Construcao() {
  return (
    <>
      <div className="container-manuntencao">
        <section className="background-construcao">
          <Container className="d-flex flex-direction-col">
            <Col className="position-relative">
              <Row className="position-absolute top-0 start-0">
                <Row>
                  <h1>
                    <strong>Site em</strong>
                  </h1>
                  <h1>Contrução</h1>
                </Row>
              </Row>
              <Row className="position-absolute top-50 start-0">
                <Row>
                  <p>Você é o único responsável</p>
                  <p>
                    pelo <strong>sucesso</strong> ou <strong>fracasso</strong>
                  </p>
                  <p>na sua vida!</p>
                </Row>
              </Row>
              <Row className="position-absolute top-100 start-0">
                <Row className="lista-icons w-25">
                  <div className="background-icon">
                    <BsInstagram />
                  </div>
                  <div className="background-icon">
                    <BsFacebook />
                  </div>
                  <div className="background-icon">
                    <BsYoutube />
                  </div>
                  <div className="background-icon">
                    <BsTiktok />
                  </div>
                </Row>
              </Row>
            </Col>
            <Col>
              <Row>
                <image
                  src={IconLogo}
                  className=""
                  alt="Imagem de Fundo da Página de Construção"
                />
              </Row>
            </Col>
          </Container>
        </section>
      </div>
    </>
  );
}
