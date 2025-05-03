import Navbar from './components/Navbar';
import img from './components/images/one.jpg';
import { Grid2 } from '@mui/material';
import MultiActionAreaCard from './components/Cards';
import DarkVariantExample from './components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ShapeExample from './components/Gallery';
import ContainerFluidExample from './components/About.jsx';
import Footer from './components/Footer.jsx';





function App() {
  return (
    <>
      <Navbar />
      <div>
        <img style={{ height: 800, width: 1349 }} src={img} />
      </div>

      <div>

        <Grid2 container spacing={10} marginTop={5}>
          <Grid2  sm={4}>
            <MultiActionAreaCard />
          </Grid2>
          <Grid2 sm={4}>
            <MultiActionAreaCard />
          </Grid2>
          <Grid2  sm={4}>
            <MultiActionAreaCard />
          </Grid2>
        </Grid2>

      </div>

      <div>
        <Container style={{ height: 100, width: 1110, marginTop: 50 }}>

          <DarkVariantExample />

        </Container>
      </div>

      <div>
        <Container style={{ marginTop:700}}>
          <ShapeExample />
        </Container>
      </div>
       
       <div style={{marginTop: 100}}>
        <Container>
             <ContainerFluidExample/>
        </Container>
       </div>

       <Container fluid style={{ padding: 200, marginTop: 20, backgroundColor: '#3ea690', color: 'white' }}>
        <Footer/>
       </Container>


    </>
  );
}

export default App;
