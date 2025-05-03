import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import imgOne from '../components/images/one.jpg';
import imgTwo from '../components/images/two.jpg';
import imgThree from '../components/images/three.jpg';
import imgFour from '../components/images/four.jpg';
import imgFive from '../components/images/five.jpg';
import imgSix from '../components/images/six.jpg';
import imgSeven from '../components/images/seven.jpg';
import imgEight from '../components/images/eight.jpg';
import imgNine from '../components/images/nine.jpg';
import imgTen from '../components/images/ten.jpg';
import imgEleven from '../components/images/six.jpg';
import imgTwelve from '../components/images/thirteen.jpg';

function ShapeExample() {
 
  return (
    <Container>
      <Row>
        <Col  md={4}>
          <Image src={imgOne} thumbnail  />
        </Col>
        <Col  md={4}>
          <Image src={imgTwo} thumbnail  />
        </Col>
        <Col  md={4}>
          <Image src={imgThree} thumbnail />
        </Col>

        <Col  md={4}>
          <Image src={imgFour} thumbnail  />
        </Col>
        <Col  md={4}>
          <Image src={imgFive} thumbnail  />
        </Col>
        <Col  md={4}>
          <Image src={imgSix} thumbnail />
        </Col>

        <Col  md={4}>
          <Image src={imgSeven} thumbnail  />
        </Col>
        <Col  md={4}>
          <Image src={imgEight} thumbnail  />
        </Col>
        <Col  md={4}>
          <Image src={imgNine} thumbnail />
        </Col>

        <Col  md={4}>
          <Image src={imgTen} thumbnail  />
        </Col>
        <Col  md={4}>
          <Image src={imgEleven} thumbnail  />
        </Col>
        <Col  md={4}>
          <Image src={imgTwelve} thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;