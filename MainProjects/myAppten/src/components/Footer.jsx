import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'


const Footer = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={5}>
                       <p>
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti aspernatur ex esse! Pariatur officiis aliquam nobis quae quia, sapiente illo. In necessitatibus ratione soluta minima nihil itaque ducimus ullam vel!
                       Sed soluta, nesciunt porro reprehenderit corrupti quos quo, magni optio ipsum rem vitae neque vel tempore tenetur sint eum quam nemo est. Pariatur, exercitationem deserunt. Molestiae quae minima eius neque.
                   
                       </p>
                    </Col>
                    <Col md={2}>
                        <ListGroup>

                        <ListGroup>PHP</ListGroup>
                        <ListGroup>LARAVEL</ListGroup>
                        <ListGroup>.NET</ListGroup>
                        <ListGroup>PHYTHON</ListGroup>
                        <ListGroup>SQL SERVER</ListGroup>
                          
                        </ListGroup>
                    </Col>
                    <Col md={2}>
                        <ListGroup>
                        <ListGroup>HTML</ListGroup>
                        <ListGroup>CSS</ListGroup>
                        <ListGroup>BOOTSTRAP</ListGroup>
                        <ListGroup>SEO</ListGroup>
                        <ListGroup>UI/UX</ListGroup>
                        </ListGroup>
                    </Col>

                    <Col md={2}>
                        <ListGroup>
                        <ListGroup>HTML</ListGroup>
                        <ListGroup>CSS</ListGroup>
                        <ListGroup>BOOTSTRAP</ListGroup>
                        <ListGroup>SEO</ListGroup>
                        <ListGroup>UI/UX</ListGroup>
                        </ListGroup>
                    </Col>
                    <Col md={1}>
                        <ListGroup>
                        <ListGroup>HTML</ListGroup>
                        <ListGroup>CSS</ListGroup>
                        <ListGroup>BOOTSTRAP</ListGroup>
                        <ListGroup>SEO</ListGroup>
                        <ListGroup>UI/UX</ListGroup>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
