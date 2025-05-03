import Navbar from './components/Navbar';
import imge from './components/images/1.jpg';
import Grid from '@mui/material/Grid2';
import Card from './components/Cards';
import Carousel from './components/Carousel';
import About from './components/About';
import Container from '@mui/material/Container';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div style={{
        backgroundImage: `url(${imge})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}>
        <Navbar />
      </div>

      <div>
        <Grid container spacing={18} marginTop={10}>
          <Grid>
            <Card />
          </Grid>
          <Grid>
            <Card />
          </Grid>
          <Grid>
            <Card />
          </Grid>
        </Grid>


      </div>

      <div>
        <Container maxWidth="lg" sx={{ marginTop: '30px' }}>
          <Grid container spacing={2} >
            <Grid size={12}>
              <Carousel />
            </Grid>
          </Grid>
        </Container>
      </div>

      <div>
        <About />
      </div>

      <div>
        <Gallery />
      </div>

      <div style={{backgroundColor:'skyblue', fontSize: '20px'}}>
        <Container>
          <Footer />
        </Container>

      </div>
    </>
  );
}

export default App;
