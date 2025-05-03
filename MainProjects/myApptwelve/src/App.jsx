import Navbar from "/components/Navbar.jsx";
import Slider from '/components/Slider.jsx'; 
import imge from './components/images/1.jpg';
import  Grid2  from '@mui/material';
import Card from './components/Cards.jsx'; 

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
        <Grid2 container spacing={2} marginTop={10}> 
          <Grid2 item xs={4}>
            <Card />
          </Grid2>
          <Grid2 item xs={4}>
            <Card />
          </Grid2>
          <Grid2 item xs={4}>
            <Card />
          </Grid2>
        </Grid2>
      </div>

      <div>
        <Slider/> 
      </div>
    </>
  );
}

export default App;
