import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import image from '../components/images/elven.jpg';

function ContainerFluidExample() {
  return (
    <Container >
      <Row>
        <Col md={6}>
        <Image style={{height: 400,}} src={image} rounded />
        </Col>
        <Col md={6}>
           <p style={{marginLeft: 100}}>
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias deleniti ex vel aut exercitationem quia tenetur, adipisci officia ipsam, rem ullam fugiat ad. Minima officia reprehenderit doloribus. Quod, amet necessitatibus!
             Dolores excepturi recusandae, odit numquam nisi minima nam, porro maiores quidem velit voluptate error? Delectus, neque nam inventore quasi totam aspernatur animi vero quos commodi cum, beatae eaque molestias doloribus?
             Dolor omnis consequuntur impedit consectetur doloremque pariatur eligendi sequi, quisquam repudiandae facere consequatur commodi, iusto illum vel veniam totam molestiae nisi quidem enim accusantium dignissimos accusamus aperiam animi! Eum, soluta?
             Aspernatur, nemo quibusdam. Tempore quaerat quia aliquam quisquam dignissimos ducimus hic sint numquam dolor aspernatur mollitia minima ut, quis explicabo molestias. Itaque beatae autem aspernatur sapiente dolorum, corrupti fugiat eaque?
          
            </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerFluidExample;