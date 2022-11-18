import Header from "../include/header";
import CarouselCom from "../include/carousel";
import GameCategories from "../include/gameCategories";
import gameImg1 from "../../assets/img/game-img1-2.webp";
import gameImg2 from "../../assets/img/game-img2-2.webp";
import gameImg3 from "../../assets/img/game-img3-2.webp";
import gameImg4 from "../../assets/img/game-img4-1.webp";
import gameImg5 from "../../assets/img/game-img5-1.webp";
import gameImg6 from "../../assets/img/game-img6-1.webp";
import gameImg7 from "../../assets/img/game-img7-1.webp";
import gameImg8 from "../../assets/img/game-img8-1.webp";
import gameImg9 from "../../assets/img/game-img9-1.webp";
import gameImg12 from "../../assets/img/game-img12-2.webp";
import gameImg13 from "../../assets/img/game-img13-2.webp";
import "../../assets/css/home/home.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
  return (
    <div>
      <Header />
      <div className="main-cointainer">   
        <CarouselCom />  
        <Container className="game-intro">
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row style={{marginTop:"10px"}}>
              <Col xs={12} md={6} style={{padding:"3px"}}>
                <div>
                  <GameCategories name="Sports" img={gameImg1} />
                </div>
              </Col>
              <Col xs={12} md={6} style={{padding:"3px"}}>
                <GameCategories name="Virtual Cricket" img={gameImg2} />
              </Col>
          </Row>

          {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
          <Row>
              <Col xs={12} md={6} style={{padding:"3px"}}>
                <div>
                  <GameCategories name="AE Gaming" img={gameImg3} />
                </div>
              </Col>
              <Col xs={12} md={3} style={{padding:"3px"}}>
                <GameCategories name="Cexy Casino" img={gameImg4} />
              </Col>
              <Col xs={12} md={3} style={{padding:"3px"}}>
                <GameCategories name="Ice Hockey" img={gameImg5} />
              </Col>
          </Row>
          <Row>
              <Col xs={12} md={3} style={{padding:"3px"}}>
                <GameCategories name="Horse Racing" img={gameImg6} />
              </Col>
              <Col xs={12} md={3} style={{padding:"3px"}}>
                <GameCategories name="Ezugi Casino" img={gameImg7} />
              </Col>
              <Col xs={12} md={3} style={{padding:"3px"}}>
                <GameCategories name="Evolution" img={gameImg8} />
              </Col>
              <Col xs={12} md={3} style={{padding:"3px"}}>
                <GameCategories name="Spade Gaming" img={gameImg9} />
              </Col>
          </Row>
          <Row>
              <Col xs={12} md={3} style={{padding:"3px"}}>
                <GameCategories name="Cexy Casino" img={gameImg4} />
              </Col>
              <Col xs={12} md={3} style={{padding:"3px"}}>
                <GameCategories name="Ice Hockey" img={gameImg5} />
              </Col>
              <Col xs={12} md={6} style={{padding:"3px"}}>
                <div>
                  <GameCategories name="AE Gaming" img={gameImg3} />
                </div>
              </Col>
          </Row>
          <Row>
              <Col xs={12} md={3} style={{padding:"3px"}}>
                <GameCategories name="Ice Hockey" img={gameImg5} />
              </Col>
              <Col xs={12} md={6} style={{padding:"3px"}}>
                <div>
                  <GameCategories name="Cock Fight" img={gameImg12} />
                </div>
              </Col>
              <Col xs={12} md={3} style={{padding:"3px"}}>
                <GameCategories name="Cexy Casino" img={gameImg4} />
              </Col>
          </Row>
          <Row>
              <Col xs={12} md={3} style={{padding:"3px"}}>
                <GameCategories name="Horse Racing" img={gameImg6} />
              </Col>
              <Col xs={12} md={3} style={{padding:"3px"}}>
                <GameCategories name="Ezugi Casino" img={gameImg7} />
              </Col>
              <Col xs={12} md={3} style={{padding:"3px"}}>
                <GameCategories name="Evolution" img={gameImg8} />
              </Col>
              <Col xs={12} md={3} style={{padding:"3px"}}>
                <GameCategories name="Spade Gaming" img={gameImg9} />
              </Col>
          </Row>
          <Row>
              <Col xs={12} md={3} style={{padding:"3px"}}>
                <GameCategories name="Horse Racing" img={gameImg6} />
              </Col>
              <Col xs={12} md={3} style={{padding:"3px"}}>
                <GameCategories name="Ezugi Casino" img={gameImg7} />
              </Col>
              <Col xs={12} md={3} style={{padding:"3px"}}>
                <GameCategories name="Evolution" img={gameImg8} />
              </Col>
              <Col xs={12} md={3} style={{padding:"3px"}}>
                <GameCategories name="Spade Gaming" img={gameImg9} />
              </Col>
          </Row>
          <Row>
              <Col xs={12} md={3} style={{padding:"3px"}}>
                <GameCategories name="Horse Racing" img={gameImg6} />
              </Col>
              <Col xs={12} md={3} style={{padding:"3px"}}>
                <GameCategories name="Ezugi Casino" img={gameImg7} />
              </Col>
              <Col xs={12} md={3} style={{padding:"3px"}}>
                <GameCategories name="Evolution" img={gameImg8} />
              </Col>
              <Col xs={12} md={3} style={{padding:"3px"}}>
                <GameCategories name="Spade Gaming" img={gameImg9} />
              </Col>
          </Row>
          <Row>
              <Col xs={12} md={3} style={{padding:"3px"}}>
                <GameCategories name="Cexy Casino" img={gameImg4} />
              </Col>
              <Col xs={12} md={6} style={{padding:"3px"}}>
                <div>
                  <GameCategories name="Slot Games" img={gameImg13} />
                </div>
              </Col>
          </Row>

      </Container>   
      </div>
      

      
    </div>
  );
}
export default Home